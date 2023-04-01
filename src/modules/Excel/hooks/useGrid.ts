import { useCallback, useState } from "react";
import { sumRow } from "../utils/utils";

export const useGrid = (N: number) => {
  const [arr, setArr] = useState(
    new Array(N)
      .fill(0)
      .map((e) =>
        new Array(N).fill(0).map((e) => Math.floor(Math.random() * 999))
      )
  );

  const onChange = useCallback(
    (rowIndex: number, cellIndex: number, newValue: string) => {
      setArr((prev) => {
        const copyArr = [...prev];
        copyArr[rowIndex][cellIndex] = Number(newValue);
        copyArr[rowIndex] = [...copyArr[rowIndex]];

        return copyArr;
      });
    },
    []
  );

  const extendTable = () => {
    const newArr = arr.map((arr) => [...arr, Math.floor(Math.random() * 999)]);
    newArr.push(
      new Array((arr[0]?.length ?? 0) + 1)
        .fill(0)
        .map((e) => Math.floor(Math.random() * 999))
    );
    setArr([...newArr]);
  };

  const shrinkArray = () => {
    const newArr = arr.map((arr) => arr.splice(0, arr.length - 1));
    newArr.pop();
    setArr([...newArr]);
  };

  const rowsSum = sumRow(arr);
  const sum = rowsSum.reduce((acc, val) => acc + val, 0);

  return {
    extendTable,
    rowsSum,
    sum,
    onChange,
    shrinkArray,
    arr,
  };
};
