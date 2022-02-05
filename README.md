# Redux Practice

## 액션 (Action)

- 객체(object)의 일종.
- 두 가지 형태의 액션이 있다.
  - {type: 'TEST'} //payload 없는 액션
  - {type: 'TEST', params: 'hello'} //payload 있는 액션
- type만이 필수 프로퍼티이며, type는 문자열이다.
- 액션의 역할
  - 액션 생성자를 통해 액션을 만들어낸다.
  - 만들어낸 액션 객체를 리덕스 스토어에 보낸다.
  - 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경된다.
  - 변경된 상태 값에 의해 상태를 이용하고 있는 컴포넌트가 변경된다.
  - 스토어에 보내는 일종의 인풋이라 생각할 수 있다.
- 액션 생성자
  - function 액션생성자(...args) {return 액션;}
  - 액션을 생성하는 함수를 액션 생성자(Action Creator)라고 한다.
  - 함수를 통해 액션을 생성해, 액션 개체를 리턴해준다.

## 리듀서 (Reducer)

- 액션을 주면, 그 액션이 적용되어 달라진(안 달라질수도?) 결과를 만들어줌.
- 그냥 함수(pure function, Immutable)
- function 리듀서(previousState, action) {
  return newState;
  }
- 액션을 받아서 스테이트를 리턴하는 구조 (인자로 들어오는 previousState와 리턴되는 newState는 다른 참조를 가지도록 해야한다.)

## 스토어 (Store)

- const store = createStore(리듀서);
- store.getState() // 현재 스토어 상태 가져오기
- store.dispatch(액션) // 액션을 인자로 넣어 상태를 변화시킴
- store.subscribe(()=> {}) // 스토어 상태가 변경되면 subscribe 내부의 함수를 실행.
- store.replaceReducer(다른 리듀서)
