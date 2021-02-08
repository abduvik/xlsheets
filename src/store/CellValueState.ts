import { atom } from "recoil";
import { memoize } from "../utils/memoize";

export const CellValueState = <T>(cellId: string) =>
  memoize(cellId, () =>
    atom({
      key: `cell_${cellId}`,
      default: "",
    })
  );
