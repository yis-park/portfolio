import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../style/header.scss";
function Header({ setIdx }) {
  const headerRef = useRef(null);
  const main = document.querySelector(".main");
  const aspiration = document.querySelector(".aspiration");
  const project = document.querySelector(".project");
  const skill = document.querySelector(".skill");
  const contact = document.querySelector(".contact");

  const scrollTo =
    ("click",
    (e) => {
      e.preventDefault();
      scrollTo({
        top: window.offsetTop,
        behavior: "smooth",
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
              scrollTo();
            }}
          >
            main
          </li>
          <li
            onClick={() => {
              setIdx(1);
              scrollTo();
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
