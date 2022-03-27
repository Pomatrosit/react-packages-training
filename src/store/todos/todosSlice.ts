import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/todo";

interface TodosState {
  todos: ITodo[];
  loading: boolean;
  error: string;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: "",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todosFetching: (state) => {
      state.loading = true;
      state.error = "";
    },
    todosFetchingSuccess: (state, action: PayloadAction<ITodo[]>) => {
      state.loading = false;
      state.todos = action.payload;
    },
    todosFetchingError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default todosSlice;
