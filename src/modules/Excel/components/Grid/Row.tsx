import { memo } from "react";
import Cell from "./Cell";

interface Props {
  row: number[];
  onChange: (cellIndex: number, rowIndex: number, value: string) => void;
  rowIndex: number;
  rowSum: number;
}

const Row = ({ onChange, rowIndex, row, rowSum }: Props) => (
  <tr key={"row" + rowIndex}>
    {row.map((cell, cellIndex) => (
      <Cell
        key={"cel" + cellIndex}
        value={cell}
        cellIndex={cellIndex}
        rowIndex={rowIndex}
        onChange={onChange}
      />
    ))}
    {rowSum}
  </tr>
);

export default memo(Row);
