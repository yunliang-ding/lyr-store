# react-core-form-store

React 状态管理库

## 基本使用

```tsx
import React from 'react';
import { create } from 'react-core-form-store';

const store = create<{
  count: number;
  addCount(): void;
}>({
  count: 1,
  async addCount(){
    this.count += 1;
  }
});

export default () => {
  const { count, addCount } = store.use();
  return (
    <div>
      {count}
      <button onClick={async () => {
        // store.addCount();
        store.count += 1;
      }}>
        添加
      </button>
    </div>
  );
};

```
