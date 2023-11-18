import dynamic from "next/dynamic";
import { Todo } from "../com/todo";

const Counter = dynamic(() => import("../com/counter"), {
  loading: () => <button>...</button>,
  ssr: false,
});

export default () => <Todo />;
