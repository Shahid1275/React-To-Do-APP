import React, { useEffect, useRef , useState } from 'react';
import Todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
 // Clear the input field after adding
    if(inputText === '') {
        return null;
    }
    const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: inputText,
        isCompleted: false
    }
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
    console.log(newTodo);
  };
  const deleteTodo = (id) => {
   return setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if(todo.id === id) {
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo;
      })
    })
  }
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])
  return (
    <div className='flex items-start justify-center min-h-screen bg-gray-900'>
      <div className='bg-white shadow-lg w-11/12 max-w-md flex flex-col p-7 rounded-xl mt-10 min-h-[550px]'>
        {/* Title */}
        <div className='flex items-center mt-7 gap-2'>
          <img className='w-8' src={Todo_icon} alt="Todo Icon" />
          <h1 className='text-3xl font-semibold text-gray-800'>To-Do List</h1>
        </div>

        {/* Input Section */}
        <div className='flex mt-4 mb-5'>
          <input
            ref={inputRef}
            type="text"
            placeholder='Add new task'
            className='flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm'
          />
          <button
            onClick={add}
            className='bg-blue-500 text-white rounded-lg p-3 ml-2 hover:bg-blue-600 transition duration-200 shadow-md hover:shadow-lg'>
            ADD +
          </button>
        </div>

        {/* Tasks List */}
        <div className='flex flex-col space-y-2'>
        {todoList.map((item,index) => (
            <TodoItems key={index} text={item.text} id={item.id} isCompleted={item.isCompleted} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
