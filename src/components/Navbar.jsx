import { NavLink } from "react-router-dom";
import "./Navbar.scss";

// Simple Navigation bar to allow easy access to each task page.
// Not part of the original task scope - but added for better presentation and usability

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
