import { useAppDispatch } from "../hooks/redux";
import { login } from "../store/auth/auth";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={() => dispatch(login())}>Войти</button>
    </>
  );
};

export default LoginPage;
