import { useNavigate } from "react-router-dom";
import "../style/notFoundPage.scss";

function NotFoundPage(props) {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };
  return (
    <div className="notFound">
      <h2>페이지를 찾을 수 없습니다.</h2>
      <button onClick={goTo}>돌아가기</button>
    </div>
  );
}

export default NotFoundPage;
