import { useRef } from "react";
import { Link } from "react-router-dom";

import "../style/header.scss";
function Header({ setIdx, isHovered }) {
  const headerRef = useRef(null);
  const main = document.querySelectorAll(".global-nav li");
  const boxes = document.querySelectorAll("article");

  const handleGoUp = () => {
    window.location.reload(
      window.scrollTo({
        top: 0,
      })
    );
  };
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
        <Link to="/" onClick={handleGoUp} className="button-text">
          YIS PARK
        </Link>
      </h1>
      <nav className="navigation">
        <ul className="global-nav">
          <li
            // className="on"
            onClick={() => {
              setIdx(0);
            }}
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
          >
            main
          </li>
          <li
            onClick={() => {
              setIdx(1);
            }}
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
          >
            aspiration
          </li>
          <li
            id="project"
            onClick={() => {
              setIdx(2);
            }}
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
          >
            project
          </li>
          <li
            id="skill"
            onClick={() => {
              setIdx(3);
            }}
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
          >
            skill
          </li>
          <li
            id="contact"
            onClick={() => {
              setIdx(4);
            }}
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
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
