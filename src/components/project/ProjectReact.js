import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectReact() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };
  return (
    <article className="sub-project">
      <div className="project-bg">
        <h3>DYAMI</h3>
      </div>
      <h3>[ React ] WebSite</h3>

      <button onClick={goTo}>이전</button>
    </article>
  );
}

export default ProjectReact;
