import { NavLink } from "react-router-dom";
import "./Navbar.scss"; // We'll style it next

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/taskone">Task One</NavLink>
        </li>
        <li>
          <NavLink to="/tasktwoandthree">Task Two & Three</NavLink>
        </li>
        <li>
          <NavLink to="/taskfour">Task Four</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
