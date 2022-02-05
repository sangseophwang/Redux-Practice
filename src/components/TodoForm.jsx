import { useRef } from "react";
import { useReduxDispatch } from "../hooks";
import { addTodo } from "../redux/actions";

export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  function handleClick() {
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = "";
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="할 일을 적어보세요." />
      <button onClick={handleClick}>추가</button>
    </div>
  );
}
