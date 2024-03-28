import React from "react";
import { store } from "./store";

export default () => {
  const { count, addCount } = store.use();
  console.log("demo2 render...");
  return (
    <div>
      {count}
      <button
        onClick={async () => {
          addCount();
        }}
      >
        添加count
      </button>
    </div>
  );
};
