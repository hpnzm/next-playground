"use client";
import { useRef, useState } from "react";
export function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const nextId = useRef(0);
  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, { id: nextId.current++, title: text }]);
    setText("");
  }
  function handleChange(e) {
    setText(e.currentTarget.value);
  }
  function handleDelete(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }
  return (
    <>
      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={handleChange}
          type="text"
          name="new_todo"
        />
      </form>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.title} <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
