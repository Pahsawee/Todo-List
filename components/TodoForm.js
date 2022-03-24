import React, { useState, useRef } from 'react';
import { AiOutlinePlusCircle, AiOutlineCheckCircle} from 'react-icons/ai';

function TodoForm(props) {
  const [input, todoInput] = useState(props.edit ? props.edit.value : null);
  const inputRef = useRef(null);
  const handleChange = e => {
    todoInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault(); //Prevent reload

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    todoInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todoform'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todoinput edit'
          />
          <button onClick={handleSubmit} className='todobutton edit'>
            <AiOutlineCheckCircle
            className ='editconfirmicon'
            />
          </button>
        </>
      ) : (
        <>
          <input
            placeholder=" What's the Plan for Today"
            value={input}
            onChange={handleChange}
            name='text'
            className='todoinput'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todobutton'>
            <AiOutlinePlusCircle
            className ='addicons'
            />
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;