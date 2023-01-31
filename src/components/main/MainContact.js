import { Link } from "react-router-dom";
import "../style/mainContact.scss";
import { Fade } from "react-reveal";
import Flip from "react-reveal/Flip";

function MainContact(props) {
  return (
    <article className="contact main">
      <Fade bottom>
        <p>읽어주셔서 감사합니다 :)</p>
        <h2>I Will Wait For You;</h2>
      </Fade>

      <div className="border">
        <h4>
          <Flip left cascade>
            Park YiSeul
          </Flip>
        </h4>
        <div className="flex">
          <Link to={""}>
            <Flip left cascade>
              E mail
            </Flip>
          </Link>
          <Link to={""}>
            <Flip left cascade>
              Blog
            </Flip>
          </Link>
          <Link to={""}>
            <Flip left cascade>
              Github
            </Flip>
          </Link>
        </div>
        <span>
          <Flip left cascade>
            2022~2023 프론트엔드 개발 및 실무프로젝트 구현과정 수료{" "}
          </Flip>
        </span>
      </div>
    </article>
  );
}

export default MainContact;
