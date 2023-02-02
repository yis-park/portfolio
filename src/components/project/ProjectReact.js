import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProjectReact(props) {
  const { p2 } = useParams();
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>{p2}React 웹페이지</h2>
      <button onClick={goTo}>이전</button>
    </div>
  );
}

export default ProjectReact;
