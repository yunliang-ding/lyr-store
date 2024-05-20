## useRefresh

### 会返回一个函数，调用该函数会强制组件重新渲染。

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