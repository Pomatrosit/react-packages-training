import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/counter/counterSlice";
import { fetchTodos } from "../store/todos/todosActions";

const ReduxToolkit = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);
  const { todos, error, loading } = useAppSelector((state) => state.todos);

  return (
    <>
      <h1>Redux Toolkit</h1>
      <h2>Counter: {value}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button
        onClick={() => dispatch(incrementByAmount(10))}
        style={{ marginBottom: 30 }}
      >
        Increment by 10
      </button>
      <h2>Todos:</h2>
      <button
        onClick={() => dispatch(fetchTodos())}
        style={{ marginBottom: 30 }}
      >
        Fetch Todos
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error</p>
      ) : (
        todos.map((todo) => (
          <p key={todo.id}>
            {todo.id} | {todo.title}
          </p>
        ))
      )}
    </>
  );
};

export default ReduxToolkit;
