## useRefresh

### useRefresh 会返回一个函数，调用该函数会强制组件重新渲染。

```tsx | react
import { useRefresh } from "lyr-hooks";

export default () => {
  const refresh = useRefresh();
  return (
    <div>
      now: {Date.now()}
      <button onClick={refresh}>刷新</button>
    </div>
  );
};
```

## useFullscreen

### 管理 DOM 全屏的 Hook

```tsx | react
import { useRef } from "react";
import { useFullscreen } from "lyr-hooks";

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] =
    useFullscreen(ref);
  return (
    <div ref={ref} style={{ background: "white" }}>
      <div style={{ marginBottom: 16 }}>
        {isFullscreen ? "Fullscreen" : "Not fullscreen"}
      </div>
      <div>
        <button type="button" onClick={enterFullscreen}>
          enterFullscreen
        </button>
        <button
          type="button"
          onClick={exitFullscreen}
          style={{ margin: "0 8px" }}
        >
          exitFullscreen
        </button>
        <button type="button" onClick={toggleFullscreen}>
          toggleFullscreen
        </button>
      </div>
    </div>
  );
};
```

## useUpdateEffect

### 用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行。

```tsx | react
import { useUpdateEffect } from "lyr-hooks";

export default () => {
  const [age, setAge] = React.useState(0);
  useUpdateEffect(() => {
    console.log("new age ->", age);
  }, [age]);
  return (
    <div>
      age: {age}
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};
```

## useReactive

### 提供一种数据响应式的操作体验，定义数据状态不需要写 useState，直接修改属性即可刷新视图。

```tsx | react
import { useReactive } from "lyr-hooks";

export default () => {
  const state = useReactive({
    count: 0,
    age: 0,
    list: [1, 2, 3, 4, 5],
    user: {
      baseInfo: {
        age: 0,
      },
    },
  });
  console.log("state ->", state);
  return (
    <>
      <div>
        count: {state.count}
        <button
          onClick={() => {
            state.count++;
          }}
        >
          +1
        </button>
      </div>
      <div>
        age: {state.user.baseInfo.age}
        <button
          onClick={() => {
            state.user.baseInfo.age++;
          }}
        >
          +1
        </button>
      </div>
      <div>
        list: {state.list.toString()}
        <button
          onClick={() => {
            state.list.push(100);
          }}
        >
          push
        </button>
      </div>
    </>
  );
};
```

## create 全局状态管理库

- ✨ 思路参看 [resy](https://github.sheincorp.cn/lsbFlying/resy)，感谢文木

### 定义 store

```ts
import { create } from "lyr-hooks";

export const store = create({
  count: 1,
  age: 1,
  addCount() {
    this.count++;
  },
});
```

### 使用 store

```tsx
import { store } from "./store";

export default () => {
  const { age } = store.useSnapshot();
  return (
    <div>
      {age}
      <button
        onClick={async () => {
          store.age += 1;
        }}
      >
        添加
      </button>
    </div>
  );
};
```
