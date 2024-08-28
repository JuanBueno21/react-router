import React, { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ["Juan", "Laura", "Sebas"];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({ userName }) => {
    const isAdmin = adminList.find(admin => admin === userName);
    setUser({ userName, isAdmin });
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
function AuthRoute({ children }) {
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