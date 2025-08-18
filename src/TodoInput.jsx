import { useState } from 'react';
import style from './TodoInput.module.css';

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState('');

  // 할 일 추가 함수
  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };
  // Enter 키 입력 감지
  const handleKeyDown = (e) => {
    if (e.keyCode === 229) return;
    // 맥에서 한글을 입력하는 동작(onKeyDown/Up)에서 함수 콜링이 두번 중첩되는 이슈가 있어 해결책 삽입
    if (e.key === 'Enter') handleAdd();
    // Enter를 누르면 할 일 추가
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} // 키 입력 이벤트 추가
        // onBlur={handleAdd} // 포커스가 떠났을 때 자동등록하고 싶다면 넣어볼 수 있음
        placeholder="오늘 해야하는 일을 등록해 주세요"
        className={style.todoInput}
      />
      <button onClick={handleAdd}> 등록 </button>
    </div>
  );
};

export default TodoInput;
