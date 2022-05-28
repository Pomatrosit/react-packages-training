import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import FormikPage from "./pages/FormikPage";
import MinifiedFormikPage from "./pages/MinifiedFormikPage";
import Layout from "./components/Layout";
import AxiosPage from "./pages/AxiosPage";
import ReduxToolkit from "./pages/ReduxToolkit";
import LoginPage from "./pages/LoginPage";
import { useAppSelector } from "./hooks/redux";
import ReactHookForm from "./pages/ReactHookForm";

function App() {
  const { auth } = useAppSelector((state) => state.auth);

  return (
    <div className="App">
      {auth ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FormikPage />} />
            <Route path="/minified-formik" element={<MinifiedFormikPage />} />
            <Route path="/axios" element={<AxiosPage />} />
            <Route path="/redux-toolkit" element={<ReduxToolkit />} />
            <Route path="/react-hook-form" element={<ReactHookForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
