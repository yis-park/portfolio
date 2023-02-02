import { Route, Routes } from "react-router-dom";

import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import GoUp from "./components/main/GoUp";
import Join from "./components/main/Join";
import NotFoundPage from "./components/main/NotFoundPage";
// style
import "./assets/style/style.scss";
import MainIntro from "./components/main/MainIntro";
import MainAspiration from "./components/main/MainAspiration";
import MainProject from "./components/main/MainProject";
import MainSkill from "./components/main/MainSkill";
import MainContact from "./components/main/MainContact";
import ProjectContainer from "./components/project/ProjectContainer";
import ProjectReact from "./components/project/ProjectReact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainIntro" element={<MainIntro />} />
        <Route path="/aspiration" element={<MainAspiration />} />

        <Route path="/mainProject">
          <Route index element={<MainProject />} />
          <Route path=":p1" element={<ProjectContainer />} />
          <Route path=":p2" element={<ProjectReact />} />
        </Route>

        <Route path="/skill" element={<MainSkill />} />
        <Route path="/contact" element={<MainContact />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* <Route path="/join" element={<Join />} /> */}
      </Routes>
      <GoUp />
      <Footer />
    </>
  );
}

export default App;
