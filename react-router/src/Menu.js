import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth"

function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;

          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "blue",
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}

        { /*// PRIMERA OPCION: Link }

        {/*<li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}


        { /*// SEGUNDA OPCION: Link */}

        {/* {<li>
          <NavLink to="Home"
            // className={({ isActive }) => ""}
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >Home</NavLink>
        </li>
        <li>
          <NavLink to="Blog"
            // className={({ isActive }) => ""}
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >Blog</NavLink>
        </li>
        <li>
          <NavLink to="Profile"
            // className={({ isActive }) => ""}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >Profile</NavLink>
        </li>} */}
      </ul>
    </nav>
  );
}

const routes = [
  { to: "/home", text: "Home", private: false, },
  { to: "/blog", text: "Blog", private: false, },
  { to: "/profile", text: "Profile", private: true, },
  { to: "/login", text: "Login", private: false, publicOnly: true, },
  { to: "/logout", text: "Logout", private: true, },
];

export { Menu };