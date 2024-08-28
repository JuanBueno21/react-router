import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>¿Quieres salir? </label>

        <button type="submit">Salir</button>
      </form>
    </>
  );
}
<h1>Logout Page</h1>
export { LogoutPage }; 