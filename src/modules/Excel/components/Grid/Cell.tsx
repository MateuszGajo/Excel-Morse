import { memo } from "react";

interface Props {
  value: number;
  onChange: (cellIndex: number, rowIndex: number, value: string) => void;
  cellIndex: number;
  rowIndex: number;
}

const Cell = ({ value, onChange, cellIndex, rowIndex }: Props) => (
  <td>
    <input
      value={value}
      onChange={(e) =>
        onChange(rowIndex, cellIndex, e.target.value.substring(0, 3))
      }
      type="number"
      maxLength={3}
    />
  </td>
);

export default memo(Cell);
