import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 0, text: "msg", complete: false }],

  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  addTodo: (todo) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
