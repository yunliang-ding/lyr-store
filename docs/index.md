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
import React, { useState } from "react";
import Demo1 from "./demo1";
import Demo2 from "./demo2";
import Demo3 from "./demo3";

export default () => {
  const [show, setShow] = useState(true);
  const [remove, setRemove] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setRemove(!remove);
        }}
      >
        模拟卸载
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        模拟切换
      </button>
      {!remove && (
        <>
          <br />
          <br />
          {show ? <Demo1 /> : <Demo2 />}
          <Demo3 />
        </>
      )}
    </div>
  );
};
```