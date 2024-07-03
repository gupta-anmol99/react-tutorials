import React from "react";
import { removeTodo } from "../features/todoSlice";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="text-3xl bg-red-400" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
