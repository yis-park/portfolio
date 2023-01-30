import { useRef } from "react";
import { Link } from "react-router-dom";

import "../style/header.scss";
function Header({ setIdx }) {
  const headerRef = useRef(null);
  const main = document.querySelectorAll(".globalNav li");
  const boxes = document.querySelectorAll("article");

  main.forEach((main, idx) => {
    main.addEventListener("click", (e) => {
      e.preventDefault();

      const getBox = boxes[idx].offsetTop;
      window.scrollTo({
        top: getBox,
        behavior: "smooth",
      });
    });
  });
  return (
    <header ref={headerRef}>
      <h1>
        <Link to="/">YIS PARK</Link>
      </h1>
      <nav className="navigation">
        <ul className="globalNav">
          <li
            // className="on"
            onClick={() => {
              setIdx(0);
            }}
          >
            main
          </li>
          <li
            onClick={() => {
              setIdx(1);
            }}
          >
            aspiration
          </li>
          <li
            id="project"
            onClick={() => {
              setIdx(2);
            }}
          >
            project
          </li>
          <li
            id="skill"
            onClick={() => {
              setIdx(3);
            }}
          >
            skill
          </li>
          <li
            id="contact"
            onClick={() => {
              setIdx(4);
            }}
          >
            contact
          </li>
        </ul>
        {/* <ul className="registry">
          <li>
            <Link to="/notFoundPage">login</Link>
          </li>
          <li>
            <Link to="/join">join</Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;
{
  /* <li>
<Link to="/aspiration">aspiration</Link>
</li>
<li>
<Link to="/skill">skill</Link>
</li>
<li>
<Link to="/contact">contact</Link>
</li> */
}

{
  /* <ul className="registry">
          <li>
            <Link to="/notFoundPage">login</Link>
          </li>
          <li>
            <Link to="/join">join</Link>
          </li>
        </ul> */
}
