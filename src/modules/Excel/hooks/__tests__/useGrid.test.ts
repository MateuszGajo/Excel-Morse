import { useGrid } from "../useGrid";
import { act, renderHook, waitFor } from "@testing-library/react";

describe("Excel, useGrid", () => {
  it("Should render array with corrct length", () => {
    const {
      result: { current },
    } = renderHook(() => useGrid(2));

    expect(current.arr.length).toBe(2);
    expect(current.arr[0].length).toBe(2);
    expect(current.arr[1].length).toBe(2);
  });

  it("Should extend array", async () => {
    const { result } = renderHook(() => useGrid(2));
    act(() => result.current.extendTable());

    await waitFor(() => expect(result.current.arr.length).toBe(3));
    expect(result.current.arr[2].length).toBe(3);
  });

  it("Should shrink array", async () => {
    const { result } = renderHook(() => useGrid(3));

    act(() => result.current.shrinkArray());

    await waitFor(() => expect(result.current.arr.length).toBe(2));
    expect(result.current.arr[1].length).toBe(2);
  });

  it("Should update value", async () => {
    const { result } = renderHook(() => useGrid(1));

    act(() => result.current.onChange(0, 0, "10"));

    await waitFor(() => expect(result.current.arr[0][0]).toBe(10));
  });
});
