import { Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">메인</Link>
      </li>
      <li>
        <Link to="/login">로그인</Link>
      </li>
      <li>
        <Link to="/register">회원가입</Link>
      </li>
    </ul>
  );
}

export default Header;
