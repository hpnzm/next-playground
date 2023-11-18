"use client";

import { useReducer } from "react";

const Counter = () => {
  const [count, inc] = useReducer((c) => c + 1, 0);
  return <button onClick={inc}>{count}</button>;
};

export default Counter;
