import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todoN, todomodify] = useState([]);

  const addTodo = todo => {
    const newTodos = [todo, ...todoN];

    if(todo.text !== ''){
      todomodify(newTodos);
    console.log(...todoN);
    }
  };

  const updateTodo = (todoId, newValue) => {
    
    todomodify(previous => previous.map(item => (item.id === todoId ? newValue : item)));
  };

  const deleteTodo = id => {
    const deleteTodo = [...todoN].filter(todo => todo.id !== id);

    todomodify(deleteTodo);
  };

  const completeTodo = id => {
    let updatedTodos = todoN.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    todomodify(updatedTodos);
  };

  return (
    <>
      <header>To - Do List</header>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todoN}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;