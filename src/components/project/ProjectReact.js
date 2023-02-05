import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/project.scss";
import imgfolder from "../../assets/images/projectReactFolder.png";

function ProjectReact({ react }) {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };
  return (
    <article className="sub-project">
      <h1>YIS PARK</h1>
      {react.map((item) => (
        <div key={item.id}>
          <div className="project-bg">
            <h2>{item.title}</h2>
          </div>

          <div className="left">
            <h3>
              {item.no}
              {item.subTitle}
            </h3>
            <div className="intro sub">
              <strong>{item.des} </strong>
              <p>{item.period} </p>
              <p>{item.Development}</p>
            </div>

            <h4>{item.overView}</h4>

            <div className="overview sub">
              <h5>{item.goal}</h5>
              <p>{item.goal1}</p>
              <p>{item.goal2}</p>
            </div>

            <div className="stack sub">
              <h5>{item.techStack}</h5>
              <p>{item.stack}</p>
              <p>{item.api}</p>
              <p>{item.tool}</p>
            </div>

            <div className="publishing sub">
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
            <div className="des sub">
              <p>{item.category} </p>
              <p>{item.category1} </p>
              <p>{item.Contribution} </p>
              <p>{item.Contribution1} </p>
            </div>
            <div className="des">
              <p>디렉토리 구조</p>
              <br />
              <img src={imgfolder} />
            </div>

            <h4>{item.ProblemSolution} </h4>
            <div className="pro sub">
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
            <div className="pro sub">
              <p>{item.review1} </p>
            </div>
          </div>
        </div>
      ))}
      <button onClick={goTo}>HOME</button>
    </article>
  );
}

export default ProjectReact;
