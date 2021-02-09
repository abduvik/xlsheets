import React, {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CellValueState } from "../../store/CellValueState";

import classes from "./Cell.module.css";
import { EvaluatedCellValueState } from "../../store/EvaluatedCellValueState";

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;

export type CellProps = {
  cellId: string;
};

const Cell: FunctionComponent<CellProps> = (props) => {
  const [cellValue, setCellValue] = useRecoilState<string>(
    CellValueState(props.cellId)
  );
  const evaluatedCellValueState = useRecoilValue<string>(
    EvaluatedCellValueState(props.cellId)
  );

  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeLabeltoInput = () => {
    setIsEditMode(true);
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };
  const changeInputToLabel = () => setIsEditMode(false);

  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== props.cellId) {
      changeInputToLabel();
    }
  };

  const onDefocusInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditMode(false);
    }
  };

  const updateCellValueState = (event: ChangeEvent<HTMLInputElement>) =>
    setCellValue(event.target.value);

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);

    return document.addEventListener("click", onClickOutsideInputHandler);
  });

  return isEditMode ? (
    <input
      className={classes.CellInput}
      ref={inputRef}
      data-cell-id={props.cellId}
      value={cellValue}
      onChange={updateCellValueState}
      onKeyDown={onDefocusInputHandler}
    />
  ) : (
    <div
      className={classes.CellLabel}
      data-cell-id={props.cellId}
      onClick={changeLabeltoInput}
    >
      {evaluatedCellValueState}
    </div>
  );
};

export default Cell;
