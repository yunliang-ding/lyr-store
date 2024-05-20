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
