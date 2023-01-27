import { Link } from "react-router-dom";
import "../style/mainContact.scss";

function MainContact(props) {
  return (
    <article className="contact">
      <p>읽어주셔서 감사합니다 :)</p>
      <h2>I Will Wait For You;</h2>

      <div className="border">
        <h4>Park YiSeul</h4>
        <div className="flex">
          <Link to={""}>E mail</Link>
          <Link to={""}>Blog</Link>
          <Link to={""}>Github</Link>
        </div>
        <span>2022~2023 프론트엔드 개발 및 실무프로젝트 구현과정 수료</span>
      </div>
    </article>
  );
}

export default MainContact;
