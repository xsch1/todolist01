import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({
  todos,
  updateTodo,
  toggleComplete,
  deleteTodo,
}) {
  if (!todos.length) {
    return <p className={styles.empty}>할 일이 비어 있어요.</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          updateTodo={updateTodo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
