import React from "react";
import { store } from "./store";

export default () => {
  const { age, count } = store.useSnapshot();
  return (
    <div>
      total: {age + count}
    </div>
  );
};
