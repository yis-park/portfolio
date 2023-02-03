import { useEffect, useRef, useState } from "react";

import Header from "./Header";
import MainAspiration from "./MainAspiration";
import MainContact from "./MainContact";
import MainIntro from "./MainIntro";
import MainProject from "./MainProject";
import MainSkill from "./MainSkill";

import GoUp from "./GoUp";

function Main() {
  const mainRef = useRef(null);
  const pos = useRef([]);
  let secs = null;
  const [idx, setIdx] = useState(0);
  const [scrolled, setSrcrolled] = useState(0);

  const getPos = () => {
    pos.current = [];
    secs = mainRef.current.querySelectorAll(".main");
    secs.forEach((sec) => {
      pos.current.push(sec.offsetTop);
    });
  };

  const motion = () => {
    const base = -window.innerHeight / 5;
    const scrollY = window.scrollY;
    const btns = mainRef.current.querySelectorAll(".global-nav li");

    setSrcrolled(scrollY);

    pos.current.forEach((pos, idx) => {
      if (scrollY >= pos + base) {
        btns.forEach((btn) => btn.classList.remove("on"));
        btns[idx].classList.add("on");

        secs.forEach((sec) => sec.classList.remove("on"));
        secs[idx].classList.add("on");
      }
    });
  };

  useEffect(() => {
    getPos();
    window.addEventListener("resize", getPos);
    window.addEventListener("scroll", motion);

    return () => {
      window.removeEventListener("resize", getPos);
      window.removeEventListener("scroll", motion);
    };
  }, []);

  // 마우스 커서
  const [coods, setCoods] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoods({ x: e.clientX, y: e.clientY });
  };
  const style1 = {
    left: coods.x,
    top: coods.y,
    width: "50px",
    height: "50px",
    position: "fixed",
    borderRadius: "50%",
    zIndex: -999,
    backgroundColor: "#85f28530",
    transform: "translate(-50%, -50%)",
  };
  const style2 = {
    left: coods.x,
    top: coods.y,
    width: "80px",
    height: "80px",
    border: "1px solid #153",
    position: "fixed",
    borderRadius: "50%",
    zIndex: -999,
    transform: "translate(-50%, -50%)",
  };

  const [hover, setHover] = useState(false);
  const isHovered = (boo) => {
    setHover(boo);
  };
  useEffect(() => {
    return isHovered();
  }, []);

  return (
    <main ref={mainRef} onMouseMove={handleMouseMove}>
      <Header setIdx={setIdx} isHovered={isHovered} />
      <MainIntro />
      <MainAspiration />
      <MainProject isHovered={isHovered} />
      <MainSkill />
      <MainContact isHovered={isHovered} />
      <GoUp isHovered={isHovered} />
      <div className="mouse" style={hover ? style1 : style2}></div>
    </main>
  );
}

export default Main;
