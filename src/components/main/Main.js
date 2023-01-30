import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import MainAspiration from "./MainAspiration";
import MainContact from "./MainContact";
import MainIntro from "./MainIntro";
import MainProject from "./MainProject";
import MainSkill from "./MainSkill";

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
    const btns = mainRef.current.querySelectorAll(".globalNav li");

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

  return (
    <main ref={mainRef}>
      <Header setIdx={setIdx} />
      <MainIntro />
      <MainAspiration />
      <MainProject />
      <MainSkill />
      <MainContact />
    </main>
  );
}

export default Main;
