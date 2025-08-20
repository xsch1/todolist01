import { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import styles from './App.module.css';

function App() {
  // R: 로컬스토리지에서 초기값 읽어옴
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // W: todos 변경 시 로컬스토리지에 저장함
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // C: 추가
  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false },
    ]);
  };

  // U: 텍스트 수정
  const updateTodo = (id, updatedText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
  };

  // U: 완료 토글
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // D: 삭제
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const remainingCount = todos.filter((t) => !t.completed).length;

  return (
    <div className={styles.app}>
      <h1>To Do List</h1>

      <div className={styles.summary}>
        남은 할 일: <strong>{remainingCount}</strong>개 / 전체: {todos.length}개
      </div>

      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
