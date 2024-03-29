import { create } from "lyr-hooks";

export const store = create({
  count: 1,
  age: 1,
  addCount() {
    this.count++;
  },
});
