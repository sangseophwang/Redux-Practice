import { useReduxState } from "../hooks";

export default function TodoList() {
  const state = useReduxState();
  return (
    <ul>
      {state.todos.map((todo, index) => {
        return <li key={index}>{todo.text}</li>;
      })}
    </ul>
  );
}
