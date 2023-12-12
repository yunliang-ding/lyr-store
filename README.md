# react-core-form-store

React 状态管理库

## 基本使用

```tsx
import React from 'react';
import { create, useStore } from 'react-core-form-store';

const store = create<{
  count: number;
  addCount(): void;
}>({
  count: 1,
  async addCount(){
    // await new Promise(res => setTimeout(res, 1000))
    this.count += 1;
  }
});

export default () => {
  const { count, addCount } = useStore(store);
  return (
    <div>
      {count}
      <button onClick={async () => {
        // store.count += 1;
        await addCount()
      }}>
        添加
      </button>
    </div>
  );
};

```
