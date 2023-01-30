import { Route, Routes } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import logo from "./logo.svg";
// import "./App.css";

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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainIntro" element={<MainIntro />} />
        <Route path="/aspiration" element={<MainAspiration />} />
        <Route path="/mainProject" element={<MainProject />} />
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
