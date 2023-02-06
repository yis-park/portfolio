import { Link, useNavigate } from "react-router-dom";
import "../style/project.scss";

function ProjectTeam({ team, isHovered }) {
  const path = process.env.PUBLIC_URL;
  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };
  return (
    <article className="sub-project">
      <h1
        onClick={handleGoUp}
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
      >
        YIS PARK
      </h1>

      <Link
        to=""
        className="site"
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
      >
        사이트 바로가기
      </Link>
      <button
        onClick={goTo}
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
      >
        HOME
      </button>
    </article>
  );
}

export default ProjectTeam;
