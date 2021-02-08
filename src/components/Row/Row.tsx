import React, { ComponentType, FunctionComponent } from "react";
import classes from "./Row.module.css";

export type RowProps = {};

const Row: FunctionComponent<RowProps> = (props) => {
  return <tr>{props.children}</tr>;
};

export default Row;
