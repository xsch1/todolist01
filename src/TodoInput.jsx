import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import styles from './TodoInput.module.css';

export default function TodoInput({ addTodo }) {
  const [value, setValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할 일을 입력하세요"
        aria-label="할 일 입력"
      />
      <button
        type="submit"
        className={styles.iconButton}
        title="추가"
        aria-label="추가">
        <PlusOutlined />
      </button>
    </form>
  );
}
