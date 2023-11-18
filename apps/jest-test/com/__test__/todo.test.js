import { render, screen } from "@testing-library/react";
import { Todo } from "../todo";
import userEvent from "@testing-library/user-event";

let todoInput;
let todoList;

async function userAddTodo() {
  await userEvent.click(todoInput);
  await userEvent.type(todoInput, "hello world{Enter}");
}

beforeEach(() => {
  render(<Todo />);
  todoInput = screen.getByRole("textbox");
  todoList = screen.getByRole("list");
});

describe("Todo", () => {
  it("should display correctly", () => {
    expect(todoInput).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
  });
  it("can add todo", async () => {
    await userAddTodo();

    expect(todoInput).toHaveValue("");
    expect(todoList).toContainElement(screen.getByText("hello world"));
  });
  it("can remove todo", async () => {
    await userAddTodo();
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await userEvent.click(deleteButton);
    expect(todoList).toBeEmptyDOMElement();
  });
});
