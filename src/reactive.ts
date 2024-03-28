import { useState } from "react";

const isObject = (type) =>
  Object.prototype.toString.call(type) === "[object Object]";

const arrayToObject = (arr, value) =>
  arr.reduceRight((acc, curr) => ({ [curr]: acc }), value);

// 防止存在循环引用
const proxyMap = new WeakMap();

const observe = (initialState = {}, cb = (payload = {}) => {}, path = []) => {
  const existingProxy = proxyMap.get(initialState);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(initialState, {
    get: (target, propKey, receiver) => {
      // 处理对象
      if (isObject(target[propKey])) {
        return observe(target[propKey], cb, [...path, propKey]);
      }
      return Reflect.get(target, propKey, receiver);
    },
    set: (target, propKey, value, receiver) => {
      // 数据发生更新
      if (initialState[propKey] !== value) {
        const paths: any = path || propKey;
        const payload = arrayToObject([...paths, propKey], value);
        cb(payload);
      }
      return Reflect.set(target, propKey, value, receiver);
    },
  });
  proxyMap.set(initialState, proxy);
  return proxy;
};

/** 可替换 useState 进行更新 */
export default <T>(initialState: T) => {
  const [state, setState] = useState(initialState);
  return observe(state, (payload) => {
    // 更新 view
    Object.assign(state, payload);
    setState({
      ...state,
    });
  }) as T;
};
