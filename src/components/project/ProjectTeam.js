import { useNavigate, useParams } from "react-router-dom";

function ProjectTeam(props) {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/");
  };
  return (
    <div>
      <h3>[javascript] teamproject</h3>
      <button onClick={goTo}>이전</button>
    </div>
  );
}

export default ProjectTeam;
