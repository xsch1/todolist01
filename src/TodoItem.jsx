import { useState } from 'react';
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  CloseOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import styles from './TodoItem.module.css';

export default function TodoItem({
  todo,
  updateTodo,
  toggleComplete,
  deleteTodo,
}) {
  const { id, text, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(text);

  const onEdit = () => {
    setDraft(text);
    setIsEditing(true);
  };

  const onSave = () => {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== text) updateTodo(id, trimmed);
    setIsEditing(false);
  };

  const onCancel = () => {
    setDraft(text);
    setIsEditing(false);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSave();
    if (e.key === 'Escape') onCancel();
  };

  return (
    <li className={styles.item}>
      <button
        className={`${styles.iconButton} ${completed ? styles.done : ''}`}
        onClick={() => toggleComplete(id)}
        title={completed ? '미완료로 변경' : '완료로 표시'}
        aria-label={completed ? '미완료로 변경' : '완료로 표시'}>
        <CheckOutlined />
      </button>

      {isEditing ? (
        <input
          className={styles.editInput}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
          aria-label="할 일 수정"
        />
      ) : (
        <span className={`${styles.text} ${completed ? styles.completed : ''}`}>
          {text}
        </span>
      )}

      <div className={styles.actions}>
        {isEditing ? (
          <>
            <button
              className={styles.iconButton}
              onClick={onSave}
              title="저장"
              aria-label="저장">
              <SaveOutlined />
            </button>
            <button
              className={styles.iconButton}
              onClick={onCancel}
              title="취소"
              aria-label="취소">
              <CloseOutlined />
            </button>
          </>
        ) : (
          <>
            <button
              className={styles.iconButton}
              onClick={onEdit}
              title="수정"
              aria-label="수정">
              <EditOutlined />
            </button>
            <button
              className={styles.iconButton}
              onClick={() => deleteTodo(id)}
              title="삭제"
              aria-label="삭제">
              <DeleteOutlined />
            </button>
          </>
        )}
      </div>
    </li>
  );
}
