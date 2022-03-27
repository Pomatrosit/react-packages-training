import axios from "axios";
import { ITodo } from "../../types/todo";
import { AppDispatch } from "../store";
import todosSlice from "./todosSlice";

export const fetchTodos = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(todosSlice.actions.todosFetching());
    try {
      const todos = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch(todosSlice.actions.todosFetchingSuccess(todos.data));
    } catch (error) {
      dispatch(todosSlice.actions.todosFetchingError("Ошибка загрузки"));
    }
  };
};
