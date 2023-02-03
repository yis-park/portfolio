import { useEffect, useState } from "react";

import "../style/goUp.scss";

function GoUp({ isHovered }) {
  const [upBtn, setUpBtn] = useState(false);

  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(window.scrollY);
    const handleScroll = () => {
      window.scrollY > 150 ? setUpBtn(true) : setUpBtn(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={upBtn ? "goUpBtn on" : "goUpBtn"}
      onClick={handleGoUp}
      onMouseEnter={() => isHovered(true)}
      onMouseLeave={() => isHovered(false)}
    >
      <p>▲ Back Top</p>
    </div>
  );
}

export default GoUp;
