# useReactive

## 提供一种数据响应式的操作体验，定义数据状态不需要写 useState，直接修改属性即可刷新视图。

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