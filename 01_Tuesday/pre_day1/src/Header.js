import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

export default function Header() {
    return (
        <div>
          <ul className="header">
            <li>
              <NavLink exact activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="selected" to="/exercise1">Exercise 1</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="selected" to="/exercise2">Exercise 2</NavLink>
            </li>
          </ul>
  
          <hr />
          </div>
    );
  }