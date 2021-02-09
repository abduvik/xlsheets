import React, { FunctionComponent } from "react";

export type RowProps = {};

const Row: FunctionComponent<RowProps> = (props) => {
  return <tr>{props.children}</tr>;
};

export default Row;
