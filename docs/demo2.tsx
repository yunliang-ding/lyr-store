import React from "react";
import { store } from "./store";

export default () => {
  const { count } = store.use();
  console.log("demo2 render...");
  return (
    <div>
      {count}
      <button
        onClick={async () => {
          store.count += 1;
        }}
      >
        添加count
      </button>
    </div>
  );
};
