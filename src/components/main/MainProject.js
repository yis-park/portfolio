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
        <Link to="/mainProject/p1" className="button" cursor-class="overlay">
          <div className="button-text">
            <h3>+ PORTFOLIO 제작일지 </h3>
            <h4> # figma</h4>
          </div>
          <h3 className="button-text foreground-text">
            PORTFOLIO 제작일지 보러가기
          </h3>
        </Link>
      </div>
      <div
        className="projectReact"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link to="/mainProject/p2" className="button" cursor-class="overlay">
          <div className="button-text">
            <h3>+ React를 이용한 웹사이트 만들기 </h3>
            <h4> # Web # React #Swiper #JavaScript # HTML5 # CSS3 </h4>
          </div>
          <h3 className="button-text foreground-text">
            React를 이용한 웹사이트 보러가기
          </h3>
        </Link>
      </div>
      <div
        className="projectReact"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link to="/mainProject:p2" className="button" cursor-class="overlay">
          <div className="button-text">
            <h3>+ JAVASCRIPT를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
            <h4># Dr.MODOO # Web #JavaScript #Selection # HTML5 # CSS3</h4>
          </div>
          <h3 className="button-text foreground-text">
            <h3>+ JAVASCRIPT를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
            <h4># Dr.MODOO # Web #JavaScript #Selection # HTML5 # CSS3</h4>
          </h3>
        </Link>
      </div>
      <div
        className="projectReact"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link to="/" className="button" cursor-class="overlay">
          <div className="button-text">
            <h3>+ HTML,CSS를 이용한 웹사이트 만들기 (팀프로젝트)</h3>
            <h4>Netschool Live</h4>
          </div>
          <h3 className="button-text foreground-text">
            HTML,CSS를 이용한 팀프로젝트 보러가기
          </h3>
        </Link>
      </div>
      <div
        className="projectReact"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Link to="/" className="button" cursor-class="overlay">
          <div className="button-text">
            <h3>+ FIGMA를 이용한 웹사이트 만들기 </h3>
            <h4>UI/UX design, prototype</h4>
          </div>
          <h3 className="button-text foreground-text">
            FIGMA를 이용한 작업물 보러가기
          </h3>
        </Link>
      </div>
    </article>
  );
}

export default MainProject;
