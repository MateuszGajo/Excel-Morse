import { sumRow } from "../utils";

describe("Excel module, sumRow util", () => {
  it("Should sum properly", () => {
    const testArr = [
      [1, 2, 3],
      [1, 2, 3],
    ];

    expect(sumRow(testArr)).toEqual([6, 6]);
  });
  it("Should work for empty array", () => {
    const testArr = [[]];

    expect(sumRow(testArr)).toEqual([0]);
  });
});
