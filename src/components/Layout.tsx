import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { logout } from "../store/auth/auth";

interface IGetActiveLinkParameters {
  isActive: boolean;
}

const getActiveLink = ({ isActive }: IGetActiveLinkParameters): string =>
  isActive ? "active-nav-link" : "";

const Layout = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <header>
        <NavLink to="/" className={getActiveLink}>
          {" "}
          Formik
        </NavLink>
        <NavLink to="/minified-formik" className={getActiveLink}>
          {" "}
          Minified Formik
        </NavLink>
        <NavLink to="/axios" className={getActiveLink}>
          {" "}
          Axios
        </NavLink>
        <NavLink to="/redux-toolkit" className={getActiveLink}>
          {" "}
          Redux Toolkit
        </NavLink>
        <NavLink to="/react-hook-form" className={getActiveLink}>
          {" "}
          React-hook-form
        </NavLink>
        <NavLink to="/react-query" className={getActiveLink}>
          {" "}
          React-Query
        </NavLink>
        <button onClick={() => dispatch(logout())}>Выйти </button>
      </header>

      <div className="wrapper">
        <Outlet />
      </div>

      <footer>2021</footer>
    </>
  );
};

export default Layout;
