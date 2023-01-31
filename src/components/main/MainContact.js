import "../style/mainContact.scss";
import Flip from "react-reveal/Flip";

function MainContact(props) {
  const github = "https://github.com/yis-park?tab=repositories";
  const blog = "https://blog.naver.com/ckadltmf423";
  const email = "https://google.com";

  return (
    <article className="contact main">
      <p>읽어주셔서 감사합니다 :)</p>
      <h2>I Will Wait For You;</h2>

      <div className="border" data-aos="flip-right">
        <h4>
          <Flip left cascade>
            Park YiSeul
          </Flip>
        </h4>
        <div className="flex">
          <button
            onClick={() => {
              window.open(email);
            }}
          >
            <Flip left cascade>
              E mail
            </Flip>
          </button>
          <button
            onClick={() => {
              window.open(blog);
            }}
          >
            <Flip left cascade>
              Blog
            </Flip>
          </button>
          <button
            onClick={() => {
              window.open(github);
            }}
          >
            <Flip left cascade>
              Github
            </Flip>
          </button>
        </div>
        <span>2022~2023 프론트엔드 개발 및 실무프로젝트 구현과정 수료 </span>
      </div>
    </article>
  );
}

export default MainContact;
