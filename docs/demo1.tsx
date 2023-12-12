import React from "react";
import { store } from "./store";

export default () => {
  const { age } = store.use();
  console.log("demo1 render...");
  return (
    <div>
      {age}
      <button
        onClick={async () => {
          store.age += 1;
        }}
      >
        添加age
      </button>
    </div>
  );
};
