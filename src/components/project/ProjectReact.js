import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/project.scss";
import imgfolder from "./images/projectReactFolder.png";

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
          <div className="project-bg"></div> <h2>{item.title}</h2>
          <div className="left">
            <h3>
              {item.no}
              {item.subTitle}
            </h3>
            <strong>{item.des} </strong>
            <p>{item.period} </p>
            <p>{item.Development}</p>

            <h4>{item.overView}</h4>
            <h5>{item.goal}</h5>
            <p>{item.goal1}</p>
            <p>{item.goal2}</p>

            <div className="stack">
              <h5>{item.techStack}</h5>
              <p>{item.stack}</p>
              <p>{item.tool}</p>
            </div>

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
        </div>
      ))}
      <p>웹사이트 유형</p>
      <p>1920px</p>
      <p>기여도</p>
      <p>100%</p>
      <p>디렉토리 구조</p>
      <img src={imgfolder} />
      <button onClick={goTo}>HOME</button>
    </article>
  );
}

export default ProjectReact;
