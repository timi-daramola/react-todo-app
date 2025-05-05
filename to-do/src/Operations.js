import React from 'react';

function Operation({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={onToggle}>{todo.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Operation;
