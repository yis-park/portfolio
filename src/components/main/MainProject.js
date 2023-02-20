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
          href="https://leaf-makeup-5e2.notion.site/01cd1328954e42cfbb25ff4891261f10"
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
        >
          <h3>+ React를 이용한 웹사이트 만들기 </h3>
          <h4>
            # Web # React # react-router-dom # axios # gh-pages # JavaScript #
            HTML5 # CSS3
          </h4>
        </a>
      </div>
      <div
        className="project-team  border"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <a
          href="https://leaf-makeup-5e2.notion.site/Dr-MODOO-a9814a1b9cad4755816311fb8eb1b665"
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
        >
          <h3> + JavaScript를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
          <h4> # Web # JavaScript #Filter # HTML5 # CSS3 # Dr.MODOO </h4>
        </a>
      </div>
      <div
        className="project-team2  border"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link
          to=""
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
          to=""
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
