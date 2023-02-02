import React, { useEffect, useRef } from "react";
import "../style/mouse.scss";
import { Link } from "react-router-dom";

function Mouse(props) {
  const mouseRef = useRef();

  const cursor = document.querySelector("#cursor");

  let mouse = { x: -100, y: -100 };
  let pos = { x: 0, y: 0 };
  const speed = 0.1;

  const updateCoordinates = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  window.addEventListener("mousemove", updateCoordinates);

  const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;
    cursor.style.transform = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";
  };

  const loop = () => {
    updatePosition();
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);

  const cursorModifiers = document.querySelectorAll("[cursor-class]");

  cursorModifiers.forEach((cursorModifier) => {
    cursorModifier.addEventListener("mouseenter", function () {
      let attribute = this.getAttribute("cursor-class");
      cursor.classList.add(attribute);
    });

    cursorModifier.addEventListener("mouseleave", function () {
      let attribute = this.getAttribute("cursor-class");
      cursor.classList.remove(attribute);
    });
  });

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div id="cursor" ref={mouseRef}>
        <div className="cursor__inner"></div>
      </div>
      <Link to="" className="button" cursor-class="overlay">
        <span className="button-text">.</span>
        <span className="button-text foreground-text">1.</span>
      </Link>
    </div>
  );
}

export default Mouse;
