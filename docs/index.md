---
order: 1
title: 介绍
toc: menu
nav:
  title: 组件
  order: 1
---

## 使用 reactive 实现单一组件状态管理

```tsx
import React from "react";
import { reactive } from "lyr-store";

export default () => {
  const state = reactive({
    count: 0,
    age: 0,
    user: {
      baseInfo: {
        age: 0,
      }
    },
  });
  console.log('render', state);
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
    </>
  );
};
```

## 使用 create 实现全局状态管理

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
