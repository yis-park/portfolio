import "../style/mainContact.scss";
import Flip from "react-reveal/Flip";

function MainContact({ isHovered }) {
  const github = "https://github.com/yis-park?tab=repositories";
  const blog = "https://blog.naver.com/ckadltmf423";

  return (
    <article className="contact main">
      <h3>읽어주셔서 감사합니다 :)</h3>
      <h2>I am Waiting For You;</h2>

      <div className="border" data-aos="flip-right">
        <h4 className="name">
          <Flip left cascade>
            Park YiSeul
          </Flip>
        </h4>
        <div className="flex ">
          <p
            onClick={() => {
              window.open(github);
            }}
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
          >
            <Flip left cascade>
              깃허브
            </Flip>
          </p>
          <p
            onClick={() => {
              window.open(blog);
            }}
            className="button-text"
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
          >
            <Flip left cascade>
              기술블로그
            </Flip>
          </p>
        </div>
        <span>yis.park@gmail.com</span>
        <span>2022~2023 프론트엔드 개발 및 실무프로젝트 구현과정 수료 </span>
      </div>
    </article>
  );
}

export default MainContact;
