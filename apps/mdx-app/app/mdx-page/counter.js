"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((c) => c + 1);
  return <button onClick={inc}>Count {count}</button>;
}
