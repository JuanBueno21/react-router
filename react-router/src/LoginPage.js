import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function LoginPage() {

  const auth = useAuth();
  const [userName, setUserName] = React.useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ userName });
  }

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario: </label>
        <input
          value={userName}
          onChange={e => setUserName(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
export { LoginPage }; 