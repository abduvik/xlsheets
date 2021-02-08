import React, { ComponentType, FunctionComponent } from "react";
import classes from "./Column.module.css";

export type ColumnProps = {};

const Column: FunctionComponent<ColumnProps> = (props) => {
  return <td>{props.children}</td>;
};

export default Column;
