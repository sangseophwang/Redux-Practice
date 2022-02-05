import { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();

  function handleClick() {
    add(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="할 일을 적어보세요." />
      <button onClick={handleClick}>추가</button>
    </div>
  );
}
