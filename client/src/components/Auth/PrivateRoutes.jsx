import { useContext } from "react";
import { AccountContext } from "../AccountContext";
import { useLocation } from "react-router-dom";

const { Outlet, Navigate } = require("react-router");

const useAuth = () => {
  const { user } = useContext(AccountContext);
  return user && user.loggedIn;
};

const PrivateRoutes = () => {
  const location = useLocation()
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" replace state={{from: location}}/>;
};

export default PrivateRoutes;

