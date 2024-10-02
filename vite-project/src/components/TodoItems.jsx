import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({text,id,isCompleted,deleteTodo,toggleTodo}) => {
  return (
    <div className='flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm mb-2 mt-3'>
      {/* Task item */}
      <div onClick={() => toggleTodo(id)} className='flex items-center gap-2 cursor-pointer'>
        <img src={isCompleted? tick : not_tick} alt="Tick" className='w-6 h-6 mr-2' />
        <p className={`text-slate-700 ml-4 text-[17px] ${isCompleted? 'line-through' : ''}`}>{text}</p>
      </div>
      
      {/* Delete icon */}
      <button  className='focus:outline-none'>
        <img onClick={() => deleteTodo(id)} src={delete_icon} alt="Delete" className='w-6 h-6 hover:text-red-500 transition duration-200' />
      </button>
    </div>
  );
}

export default TodoItems;
