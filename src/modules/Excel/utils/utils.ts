export const sumRow = (values: number[][]) => {
  const rowSums = values.map((row) => row.reduce((acc, val) => acc + val, 0));
  return rowSums;
};
