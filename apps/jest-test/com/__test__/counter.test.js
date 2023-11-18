import Counter from "../counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("counter", () => {
  let el;
  beforeEach(() => {
    render(<Counter />);
    el = screen.getByRole("button", { name: "0" });
  });

  test("counter should display correctly", async () => {
    await userEvent.click(el);
    expect(el).toHaveTextContent("1");
  });
});

describe("text", () => {
  beforeEach(() => render(<h1>Heading</h1>));
  test("be in document", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
