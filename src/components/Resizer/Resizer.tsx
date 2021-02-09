import React, { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import classes from "./Resizer.module.css";
import { SheetSizeState } from "../../store/SheetSizeState";

export type ResizerProps = {};

const Resizer: FunctionComponent<ResizerProps> = (props) => {
  const [,setSheetSize] = useRecoilState(SheetSizeState);

  const initDrag = () => {
    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const doDrag = (event: MouseEvent) => {
    const pointerX = event.pageX;
    const pointerY = event.pageY;

    setSheetSize({
      width: pointerX,
      height: pointerY,
    });
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", doDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  return <div onMouseDown={initDrag} className={classes.Resizer} />;
};

export default Resizer;
