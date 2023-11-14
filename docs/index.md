---
order: 1
title: 介绍
toc: menu
nav:
  title: 组件
  order: 1
---

<div style="display:flex;align-items:center;margin-bottom:24px">
  <span style="font-size:30px;font-weight:600;display:inline-block;">react-core-form-store</span>
</div>
<p style="display:flex;justify-content:space-between;width:220px">
  <a href="https://npmmirror.com/package/react-core-form-store">
    <img alt="npm" src="http://center.yunliang.cloud/npm/version?package=react-core-form-store">
  </a>
  <a href="https://npmmirror.com/package/react-core-form-store">
    <img alt="npm" src="http://center.yunliang.cloud/npm/downloads?package=react-core-form-store">
  </a>
</p>

## 使用 CreateStore 创建 全局状态管理

```tsx
import React from 'react';
import { CreateStore, useStore } from 'react-core-form-store';

const store = CreateStore<{
  count: number;
  age: number;
  addCount(): void;
}>({
  count: 1,
  age: 12,
  async addCount(){
    // await new Promise(res => setTimeout(res, 1000))
    this.count += 1;
  }
});

export default () => {
  const { age, count, addCount } = useStore(store);
  console.log('render...')
  return (
    <div>
      {count}
      <br />
      {age}
      <button onClick={async () => {
        store.count += 1;
        store.age += 1;
        // await addCount()
      }}>
        添加
      </button>
    </div>
  );
};
```
