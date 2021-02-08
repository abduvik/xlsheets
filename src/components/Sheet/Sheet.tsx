import React, { ComponentType, FunctionComponent } from "react";
import Column from "../Column/Column";
import Row from "../Row/Row";
import Cell from "../Cell/Cell";
import classes from "./Sheet.module.css";

export type SheetProps = {};

const Sheet: FunctionComponent<SheetProps> = (props) => {
  return (
    <table>
      <tbody>
        <Row>
          <Column>
            <Cell />
          </Column>
          <Column>
            <Cell />
          </Column>
          <Column>
            <Cell />
          </Column>
        </Row>
      </tbody>
    </table>
  );
};

export default Sheet;
