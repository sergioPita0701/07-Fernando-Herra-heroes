import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onlogin = () => {
    login("Sergio");

    navigate("/", {
      replace: true,
    });
  };

  const onlogout = () => {
    logout();

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <br />

      <button className="btn btn-primary" onClick={onlogin}>
        Login2
      </button>
      <br />

      <button className="btn btn-primary" onClick={onlogout}>
        Logout2
      </button>
    </div>
  );
};
