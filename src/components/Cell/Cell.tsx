import React, {
  ChangeEvent,
  ComponentType,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { atom, useRecoilState } from "recoil";
import { CellValueState } from "../../store/CellValueState";

import classes from "./Cell.module.css";

export type CellProps = {
  children: ComponentType | string;
};

const Cell: FunctionComponent<CellProps> = (props) => {
  const [cellValue, setCellValue] = useRecoilState<string>(CellValueState);
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null);

  const changeLabeltoInput = () => setIsEditMode(true);
  const changeInputToLabel = () => setIsEditMode(false);
  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== "2") {
      changeInputToLabel();
    }
  };
  const updateCellValueState = (event: ChangeEvent<HTMLInputElement>) =>
    setCellValue(event.target.value);

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);

    return document.addEventListener("click", onClickOutsideInputHandler);
  }, []);

  return isEditMode ? (
    <input
      ref={inputRef}
      data-cell-id={"2"}
      value={cellValue}
      onChange={updateCellValueState}
    />
  ) : (
    <div data-cell-id={"2"} onClick={changeLabeltoInput}>
      {cellValue}
    </div>
  );
};

export default Cell;
