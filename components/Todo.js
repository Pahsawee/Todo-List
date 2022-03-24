import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, deleteTodo, updateTodo }) => {
  const [edit, todoEdit] = useState({id: null, value: ''});

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    todoEdit({id: null, value: ''});
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todobox completed' : 'todobox'}
      key={index}
    >
      {todo.text}
      <div className='icons'>
        <AiOutlineCheckCircle
          onClick={() => completeTodo(todo.id)}
          className='completeicon'
        />
        <TiEdit
          onClick={() => todoEdit({ id: todo.id, value: todo.text })}
          className='editicon'
        />
        <AiOutlineCloseCircle
          onClick={() => deleteTodo(todo.id)}
          className='deleteicon'
        />
      </div>
    </div>
  ));
};

export default Todo;