import React, {
  ComponentType,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import classes from "./Cell.module.css";

export type CellProps = {
  children: ComponentType | string;
};

const Cell: FunctionComponent<CellProps> = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null);

  const changeLabeltoInput = () => setIsEditMode(true);

  const changeInputToLabel = () => setIsEditMode(false);

  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== "2") {
      changeInputToLabel();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);

    return document.addEventListener("click", onClickOutsideInputHandler);
  }, []);

  return isEditMode ? (
    <input ref={inputRef} data-cell-id={"2"} />
  ) : (
    <div data-cell-id={"2"} onClick={changeLabeltoInput}>
      {props.children}
    </div>
  );
};

export default Cell;
