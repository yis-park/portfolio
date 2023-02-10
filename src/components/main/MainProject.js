import "../style/mainProject.scss";
import { Link } from "react-router-dom";

function MainProject({ isHovered }) {
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
        className="projectReact  border"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <a
          href="https://leaf-makeup-5e2.notion.site/e725012b957f49aab5086541baec98a0"
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
        >
          <h3>+ PORTFOLIO 제작일지 </h3>
          <h4> # Notion</h4>
        </a>
      </div>
      <div
        className="project-react border"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <a
          href="https://yis-park.github.io/noonnu/"
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
        >
          <h3>+ React를 이용한 웹사이트 만들기 </h3>
          <h4> # Web # React #Swiper #JavaScript # HTML5 # CSS3 </h4>
        </a>
      </div>
      <div
        className="project-team  border"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link
          to="/projectTeam"
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
        >
          <h3>+ JAVASCRIPT를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
          <h4># Dr.MODOO # Web #JavaScript #Selection # HTML5 # CSS3</h4>
        </Link>
      </div>
      <div
        className="project-team2  border"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link
          to="/projectTeam2"
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
        >
          <h3>+ HTML,CSS를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
          <h4>Netschool Live</h4>
        </Link>
      </div>
      <div
        className="project-figma  border"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link
          to="/projectGraphic"
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
        >
          <h3>+ FIGMA를 이용한 웹사이트 만들기 </h3>
          <h4>UI/UX design, prototype</h4>
        </Link>
      </div>
    </article>
  );
}

export default MainProject;
