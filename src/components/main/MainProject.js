import "../style/mainProject.scss";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Flip from "react-reveal/Flip";

function MainProject() {
  return (
    <article className="project main">
      <Fade bottom>
        <h2>
          <span>2022~2023</span>
          <br />
          Selected
          <br /> works
        </h2>
      </Fade>

      <div className="projectReact">
        <Link to="/">
          <Flip left cascade>
            <h3>+ HTML, CSS를 이용한 웹사이트 만들기 </h3>
            <h4>webReact</h4>
          </Flip>
        </Link>
      </div>
      <div className="projectReact">
        <Link to="/">
          <Flip left cascade>
            <h3>+ JAVASCRIPT를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
            <h4>Dr.MODOO</h4>
          </Flip>
        </Link>
      </div>

      <div className="projectReact">
        <Link to="/">
          <Flip left cascade>
            <h3>+ HTML,CSS를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
            <h4>Netschool Live</h4>
          </Flip>
        </Link>
      </div>
      <div className="projectReact">
        <Link to="/">
          <Flip left cascade>
            <h3>+ FIGMA를 이용한 웹사이트 만들기 </h3>
            <h4>UI/UX디자인, 프로토타입</h4>
          </Flip>
        </Link>
      </div>
    </article>
  );
}

export default MainProject;
