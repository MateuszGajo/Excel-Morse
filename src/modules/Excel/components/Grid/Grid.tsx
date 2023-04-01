import { INITIAL_GRID_SIZE } from "../../constant";
import { useGrid } from "../../hooks/useGrid";
import Row from "./Row";
import "./grid.css";

const Grid = () => {
  const { arr, rowsSum, onChange, sum, extendTable, shrinkArray } =
    useGrid(INITIAL_GRID_SIZE);

  return (
    <div className="excel__container">
      <table>
        {arr.map((row, rowIndex) => (
          <Row
            onChange={onChange}
            rowIndex={rowIndex}
            row={row}
            key={`row-${rowIndex}`}
            rowSum={rowsSum[rowIndex]}
          ></Row>
        ))}
      </table>
      <div className="excel__container__sum">{sum}</div>
      <button onClick={extendTable}>+</button>
      <button onClick={shrinkArray}>-</button>
    </div>
  );
};

export default Grid;
