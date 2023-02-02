import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProjectReact(props) {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };
  return (
    <div>
      <h3>연결안된거같아,,,</h3>
      <button onClick={goTo}>이전</button>
    </div>
  );
}

export default ProjectReact;
