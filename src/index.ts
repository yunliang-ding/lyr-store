import cloneDeep from "lodash.clonedeep";
import useSyncExternalStoreExports from "use-sync-external-store/shim";

const { useSyncExternalStore } = useSyncExternalStoreExports;

interface InitProps {
  state?: any;
  subscribe?: any;
  getSnapshot?: any;
  dispatch?: any;
  listeners?: any;
}

class InitStore {
  public state = {};
  public restore = {};
  public listeners = new Set();
  private useCount = 0; // 计数器
  constructor(initialStore: any) {
    this.state = initialStore;
    this.restore = cloneDeep(initialStore); // 还原数据需要深拷贝下
  }
  dispatch = (payload: any) => {
    this.state = { ...this.state, ...payload };
    this.listeners.forEach((fn: any) => fn()); // 更新试图
  };
  subscribe = (listener) => {
    this.listeners.add(listener);
    this.useCount++;
    return () => {
      this.useCount--;
      this.listeners.delete(listener);
      /** 当所有用到了 useStore 的组件，全部都卸载了，就将 store 自动还原初始状态 */
      if (this.useCount === 0) {
        this.state = this.restore; // 还原下
      }
    };
  };
  getSnapshot = () => {
    return this.state;
  };
  /** 提供 use代替 useStore */
  use() {
    return useStore(this);
  }
}

/** 不可触达属性 */
type UnreachableType = {
  subscribe?: never;
  getSnapshot?: never;
  use?: never;
};

export const CreateStore = <T>(
  initialStore: (T & ThisType<T>) & UnreachableType
) => {
  const initStore = new InitStore(initialStore);
  /** 对 initStore 取值进行监听 */
  const store: InitProps = new Proxy(initStore, {
    get: (target, propKey, receiver) => {
      if (!["subscribe", "getSnapshot", "use"].includes(propKey as string)) {
        return initStore.state[propKey];
      }
      return Reflect.get(target, propKey, receiver);
    },
    set: (target, propKey, value, receiver) => {
      // 数据发生更新
      if (target.state[propKey] !== value) {
        initStore.dispatch({ [propKey]: value });
      }
      return Reflect.set(target, propKey, value, receiver);
    },
  });
  return store as T & {
    use: () => T;
  };
};

export const useStore = <T>(store: T & InitProps): T => {
  /** */
  const initStore = useSyncExternalStore(store.subscribe, store.getSnapshot);
  Object.keys(initStore).forEach((key) => {
    if (typeof initStore[key] === "function") {
      initStore[key] = initStore[key].bind(store); // bind this
    }
  });
  return initStore as T;
};
