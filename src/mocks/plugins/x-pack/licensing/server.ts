import { from } from "rxjs";

export const licensing = {
  license$: from([
    {
      check() {
        return { state: "valid" };
      },
    },
  ]),
};
