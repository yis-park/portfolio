import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import Join from "./components/main/Join";
import NotFoundPage from "./components/main/NotFoundPage";
// style
import "./assets/style/style.scss";

import ProjectContainer from "./components/project/ProjectContainer";
import ProjectReact from "./components/project/ProjectReact";
import ProjectTeam from "./components/project/ProjectTeam";

import axios from "axios";
import ProjectTeam2 from "./components/project/ProjectTeam2";
import ProjectGraphic from "./components/project/ProjectGraphic";

// json 파일 가져오기
function App() {
  const [react, setReact] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const projectDataList = await axios.get("./DB/projectData.json");
      setReact(projectDataList.data.ReactData);
      setTeam(projectDataList.data.jsData);
    };
    getData();
  }, []);

  // 마우스 커서
  const [coods, setCoods] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoods({ x: e.clientX, y: e.clientY });
  };
  const style1 = {
    left: coods.x,
    top: coods.y,
    width: "50px",
    height: "50px",
    position: "fixed",
    borderRadius: "50%",
    zIndex: -9,
    backgroundColor: "#85f28530",
    transform: "translate(-50%, -50%)",
  };
  const style2 = {
    left: coods.x,
    top: coods.y,
    width: "80px",
    height: "80px",
    border: "1px solid #153",
    position: "fixed",
    borderRadius: "50%",
    zIndex: -9,
    transform: "translate(-50%, -50%)",
  };

  const [hover, setHover] = useState(false);
  const isHovered = (boo) => {
    setHover(boo);
  };
  useEffect(() => {
    return isHovered();
  }, []);

  return (
    <div onMouseMove={handleMouseMove}>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/projectContainer" element={<ProjectContainer />} /> */}
        <Route
          path="/projectReact"
          element={<ProjectReact react={react} isHovered={isHovered} />}
        />
        <Route
          path="/projectTeam"
          element={<ProjectTeam team={team} isHovered={isHovered} />}
        />
        <Route path="/projectTeam2" element={<ProjectTeam2 />} />
        <Route path="/projectGraphic" element={<ProjectGraphic />} />
      </Routes>
      <Footer />
      <div className="mouse" style={hover ? style1 : style2}></div>
    </div>
  );
}

export default App;
{
  /* <Route path="*" element={<NotFoundPage />} /> */
}
{
  /* <Route path="/join" element={<Join />} /> */
}
