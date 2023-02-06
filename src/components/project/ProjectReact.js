import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/project.scss";

function ProjectReact({ react, isHovered }) {
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

      <div>
        <div
          className="bg"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          {/* <img src={path + `/images/${item.bgImg}`} /> */}
          <h2>DYANI</h2>
        </div>

        <div className="left">
          <h3>no.1 [ React ] 를 이용한 WebSite</h3>
          <div className="intro sub">
            <strong>WebSite publishing</strong>
            <p>2023.01.10~2023.01.13 </p>
            <p>개인작업(100%)</p>
          </div>
          {react.map((item) => (
            <div key={item.id}>
              <h4>{item.title}</h4>

              <div className="overview sub">
                <h5>{item.menu}</h5>
                <p>{item.des1}</p>
                <p>{item.des2}</p>
                <p>{item.des3}</p>
                <p>{item.des4}</p>
                <p>{item.des5}</p>
                <p>{item.des6}</p>
                <p>{item.des7}</p>
                <p>{item.des8}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default ProjectReact;

{
  /* 
            <div
              className="stack sub"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
              <h5>{item.techStack}</h5>
              <p>{item.stack}</p>
              <p>{item.api}</p>
              <p>{item.tool}</p>
            </div>
            <div
              className="publishing sub"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
              <h5>{item.publishing} </h5>
              <p>{item.des1} </p>
              <p>{item.des2} </p>
              <p>{item.des3} </p>
              <p>{item.des4} </p>
              <p>{item.des5} </p>
              <p>{item.des6} </p>
              <p>{item.des7} </p>
              <p>{item.des8} </p>
            </div>
            <div
              className="des sub"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
              <p>{item.category} </p>
              <p>{item.category1} </p>
              <p>{item.Contribution} </p>
              <p>{item.Contribution1} </p>
            </div>
            <div
              className="des sub"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
              <p>{item.folder}</p>
              <br />
              <img src={path + `/images/${item.folderimg}`} />
            </div>
            <div
              className="aos"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
              <h4>{item.ProblemSolution}</h4>
            </div>
            <div
              className="pro sub"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
              <p>{item.pro1} </p>
              <p>{item.sol1} </p>
              <br />
              <p>{item.pro2} </p>
              <p>{item.sol2} </p>
              <br />
              <p>{item.pro3} </p>
              <p>{item.sol3} </p>
            </div>
            <h4>{item.review} </h4>
            <div
              className="last sub"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
              <p>{item.review1} </p>
            </div>{" "}
            */
}
