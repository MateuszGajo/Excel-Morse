import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Row from "../Row";

describe("Excel cell component", () => {
  it("Should render value", () => {
    render(<Row onChange={() => {}} rowIndex={0} row={[1, 2]} rowSum={12} />);

    expect(screen.getByText("12")).toBeInTheDocument();
  });
});
