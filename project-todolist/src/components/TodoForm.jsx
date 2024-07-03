import React from "react";
import { useTodo } from "../contexts/TodoContext";
import {useState} from 'react'

function TodoForm() {
    const {addTodo} = useTodo()
    const [todoItem, setTodoItem] = useState({text:"", complete:false})

    const handleSubmit = ()=>{
        addTodo(todoItem)
    }

    
  return (
    <form className="flex"
    onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoItem.text}
        onChange={(e) => setTodoItem({ ...todoItem, text: e.target.value })}
     />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;