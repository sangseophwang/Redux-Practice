import { ADD_TODO } from "./actions";

// state
// ['코딩', '점심 먹기'];

const initialState = [];

export function todoApp(previousState = initialState, action) {
  // 초기값 설정
  // if (previousState === undefined) return [];

  if (action.type === ADD_TODO) return [...previousState, action.todo];

  return previousState;
}
