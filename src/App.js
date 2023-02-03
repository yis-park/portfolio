import { Route, Routes } from "react-router-dom";

import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import Join from "./components/main/Join";
import NotFoundPage from "./components/main/NotFoundPage";
// style
import "./assets/style/style.scss";

import ProjectContainer from "./components/project/ProjectContainer";
import ProjectReact from "./components/project/ProjectReact";
import ProjectTeam from "./components/project/ProjectTeam";
import { useEffect, useState } from "react";
import axios from "axios";
import ProjectTeam2 from "./components/project/ProjectTeam2";
import ProjectGraphic from "./components/project/ProjectGraphic";

// json 파일 가져오기
function App() {
  const [react, setReact] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const projectData = await axios.get("./DB/projectData.json");
      setReact(projectData.data.ReactData);
    };
    getData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projectContainer" element={<ProjectContainer />} />
        <Route path="/projectReact" element={<ProjectReact />} />
        <Route path="/projectTeam" element={<ProjectTeam />} />
        <Route path="/projectTeam2" element={<ProjectTeam2 />} />
        <Route path="/projectGraphic" element={<ProjectGraphic />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* <Route path="/join" element={<Join />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
