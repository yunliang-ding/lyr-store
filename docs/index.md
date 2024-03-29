---
order: 1
title: 介绍
toc: menu
nav:
  title: 组件
  order: 1
---

<div style="display:flex;align-items:center;margin-bottom:24px">
  <span style="font-size:30px;font-weight:600;display:inline-block;">lyr-hooks</span>
</div>
<p style="display:flex;justify-content:space-between;width:220px">
  <a href="https://npmmirror.com/package/lyr-hooks">
    <img alt="npm" src="https://center.yunliang.cloud/npm/version?package=lyr-hooks">
  </a>
  <a href="https://npmmirror.com/package/lyr-hooks">
    <img alt="npm" src="https://center.yunliang.cloud/npm/downloads?package=lyr-hooks">
  </a>
</p>

## useRefresh

<Alert>
  useRefresh 会返回一个函数，调用该函数会强制组件重新渲染。
</Alert>

```tsx
import React from "react";
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

<Alert>
  管理 DOM 全屏的 Hook
</Alert>

```tsx
import React, { useRef } from 'react';
import { useFullscreen } from 'lyr-hooks';

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(ref);
  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
      <div>
        <button type="button" onClick={enterFullscreen}>
          enterFullscreen
        </button>
        <button type="button" onClick={exitFullscreen} style={{ margin: '0 8px' }}>
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

<Alert>
  用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行。
</Alert>

```tsx
import React from "react";
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

<Alert>
  提供一种数据响应式的操作体验，定义数据状态不需要写useState，直接修改属性即可刷新视图。
</Alert>

```tsx
import React from "react";
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

## create

<Alert>
  最新 React 全局状态管理库
</Alert>

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
