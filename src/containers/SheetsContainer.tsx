import React, { ComponentType, FunctionComponent } from "react";
import Sheet from "../components/Sheet/Sheet";
import classes from "./SheetsContainer.module.css";

export type SheetsContainerProps = {};

const SheetsContainer: FunctionComponent<SheetsContainerProps> = (props) => {
  return <Sheet />;
};

export default SheetsContainer;
