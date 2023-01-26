import { useRef } from "react";
import { Link } from "react-router-dom";

import "../style/header.scss";
function Header() {
  const headerRef = useRef(null);
  return (
    <header ref={headerRef}>
      <h1>
        <Link to="/main">YIS PARK</Link>
      </h1>
      <nav className="navigation">
        <ul className="globalNav">
          <li>
            <Link to="/main">main</Link>
          </li>
          <li>
            <Link to="/aspiration">aspiration</Link>
          </li>
          <li>
            <Link to="/skill">skill</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <ul className="registry">
          <li>
            <Link to="/notFoundPage">login</Link>
          </li>
          <li>
            <Link to="/join">join</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
