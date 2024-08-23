import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}

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

const routes = [];
routes.push({
  to: "/home",
  text: "Home",
});
routes.push({
  to: "/blog",
  text: "Blog",
});
routes.push({
  to: "/profile",
  text: "Profile",
});


export { Menu };