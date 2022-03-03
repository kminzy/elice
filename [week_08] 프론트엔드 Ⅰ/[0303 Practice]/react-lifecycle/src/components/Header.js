import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/timer">
          <li>Timer</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
