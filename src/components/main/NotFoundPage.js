import { useNavigate } from "react-router-dom";
import "../style/notFoundPage.scss";

function NotFoundPage(props) {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };
  return (
    <div className="notFound">
      <h2>Not Found Page</h2>
      <button onClick={goTo}>돌아가기</button>
    </div>
  );
}

export default NotFoundPage;
