import "../style/mainProject.scss";
import { Link } from "react-router-dom";

function MainProject() {
  return (
    <article
      className="project main"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <h2>
        <span>2022~2023</span>
        <br />
        Selected
        <br /> works
      </h2>
      <div
        className="projectReact"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link to="/">
          <h3>+ HTML, CSS를 이용한 웹사이트 만들기 </h3>
          <h4>webReact</h4>
        </Link>
      </div>
      <div
        className="projectReact"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link to="/">
          <h3>+ JAVASCRIPT를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
          <h4>Dr.MODOO</h4>
        </Link>
      </div>
      <div
        className="projectReact"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link to="/">
          <h3>+ HTML,CSS를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
          <h4>Netschool Live</h4>
        </Link>
      </div>
      <div
        className="projectReact"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link to="/">
          <h3>+ FIGMA를 이용한 웹사이트 만들기 </h3>
          <h4>UI/UX design, prototype</h4>
        </Link>
      </div>
    </article>
  );
}

export default MainProject;
