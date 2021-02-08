import React, { ComponentType, FunctionComponent } from "react";
import Column from "../Column/Column";
import Row from "../Row/Row";
import Cell, { CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import classes from "./Sheet.module.css";
import { useRecoilValue } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";

export type SheetProps = {};

const Sheet: FunctionComponent<SheetProps> = (props) => {
  const sheetSize = useRecoilValue(SheetSizeState);

  const numberOfColumns = sheetSize.width / CELL_WIDTH;
  const numberOfRows = sheetSize.height / CELL_HEIGHT;

  return (
    <table className={classes.Sheet}>
      <tbody>
        {[...Array(numberOfRows)].map((row, rowIndex) => (
          <Row key={rowIndex}>
            {[...Array(numberOfColumns)].map((column, columnIndex) => (
              <Column key={columnIndex}>
                <Cell cellId={`${rowIndex},${columnIndex}`} />
              </Column>
            ))}
          </Row>
        ))}
      </tbody>
    </table>
  );
};

export default Sheet;
