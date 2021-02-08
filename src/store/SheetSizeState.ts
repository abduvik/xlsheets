import { atom } from "recoil";

export const SheetSizeState = atom({
  key: "SheetSizeState",
  default: {
    width: 600,
    height: 600,
  },
});
