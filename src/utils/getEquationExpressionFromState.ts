import { cellIdtoMatrixIndices } from "./cellIdToMatrixIndices";
import { CellValueState } from "../store/CellValueState";

export const getEquationExpressionFromState = (
  getState: any,
  expression: any,
  notAllowedCellsIds: string[] = []
) => {
  const filterFoundCells = notAllowedCellsIds.filter((cellId) =>
    expression.includes(cellId)
  );

  if (filterFoundCells.length) {
    return "!ERROR";
  }

  const cellValues = [...Array.from(expression.matchAll(/[A-Z]+[0-9]+/gi))]
    .map((regrexOutput: any) => regrexOutput[0])
    .map((cellId: string) => {
      const { row, column } = cellIdtoMatrixIndices(cellId);

      let value = "";

      try {
        value = getState(CellValueState(`${row},${column}`)) || 0;

        if (value.startsWith("=")) {
          notAllowedCellsIds.push(cellId);
          value = getEquationExpressionFromState(
            getState,
            value.slice(1),
            notAllowedCellsIds
          );
        }
      } catch {}

      return {
        cellId,
        value,
      };
    });

  const evaluatedExpression = cellValues.reduce(
    (finalExpression, cellValue) =>
      finalExpression.replaceAll(cellValue.cellId, cellValue.value.toString()),
    expression
  );

  // Evaluated expression needs to be added between brackets to avoid issues caused
  // by Mathematical operations priority 
  return `(${evaluatedExpression})`;
};
