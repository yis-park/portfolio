import { Route, Routes } from "react-router-dom";

import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import GoUp from "./components/main/GoUp";
import Join from "./components/main/Join";
import NotFoundPage from "./components/main/NotFoundPage";
// style
import "./assets/style/style.scss";

import ProjectContainer from "./components/project/ProjectContainer";
import ProjectReact from "./components/project/ProjectReact";
import ProjectTeam from "./components/project/ProjectTeam";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projectContainer" element={<ProjectContainer />} />
        <Route path="/projectReact" element={<ProjectReact />} />
        <Route path="/projectTeam" element={<ProjectTeam />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* <Route path="/join" element={<Join />} /> */}
      </Routes>
      {/* <GoUp /> */}
      <Footer />
    </>
  );
}

export default App;
