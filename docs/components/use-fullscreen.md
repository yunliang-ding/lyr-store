# useFullscreen

## 管理 DOM 全屏的 Hook

```tsx | react
import { useRef } from "react";
import { useFullscreen } from "lyr-hooks";

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] =
    useFullscreen(ref);
  return (
    <div ref={ref}>
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