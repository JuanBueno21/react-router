import React, { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({ userName }) => {
    setUser({ userName });
    navigate("/profile");
  }

  const logout = () => {
    setUser(null);
    navigate("/home");
  }

  const auth = { user, login, logout };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}
function AuthRoute({children}) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export {
  AuthProvider,
  AuthRoute,
  useAuth,
}