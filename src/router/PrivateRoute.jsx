import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  console.log("abc");
  return logged ? children : <Navigate to="/login" />;
};
