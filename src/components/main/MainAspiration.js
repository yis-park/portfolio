import React from "react";
import "aos/dist/aos.css";
import "../style/mainAspiration.scss";

function MainAspiration() {
  return (
    <article
      className="aspiration main"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <h2>Aspiration</h2>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
      >
        <p>#느리지만 꾸준히 #책임감 #열정 #적응력 #계획 및 실천</p>
        <br />
        <p>
          더 나은 미래를 위해 한 발 내딛으려 합니다. 위에 적힌 해시태그처럼
          책임감 있는 자세로 조금 늦더라도 꾸준히 노력하여 팀과 회사에 보탬이
          되는 인재가 되겠습니다.
        </p>
        <br />
        <p>
          업무에 필요한 것들은 스스로 찾아보고 적극적으로 질문도 하여 빠르게
          팀에 흡수할 수 있는 인재가 되겠습니다.
        </p>
      </div>
    </article>
  );
}

export default MainAspiration;
