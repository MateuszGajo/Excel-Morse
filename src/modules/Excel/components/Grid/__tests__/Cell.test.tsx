import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cell from "../Cell";

describe("Excel cell component", () => {
  it("Should render value", () => {
    render(<Cell value={5} onChange={() => {}} rowIndex={0} cellIndex={0} />);

    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });

  it("Should call onChange function with correct values", () => {
    const onChange = jest.fn();
    render(<Cell value={5} onChange={onChange} rowIndex={0} cellIndex={0} />);

    const input = screen.getByDisplayValue("5");
    userEvent.clear(input);
    userEvent.type(input, "2");

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(0, 0, "2");
  });

  it("Should call onChange with just 3 digits", () => {
    const onChange = jest.fn();
    render(<Cell value={5} onChange={onChange} rowIndex={0} cellIndex={0} />);

    const input = screen.getByDisplayValue("5");
    userEvent.type(input, "21634");

    expect(onChange).toHaveBeenCalledTimes(5);
    expect(onChange).toHaveBeenCalledWith(0, 0, "521");
  });
});
