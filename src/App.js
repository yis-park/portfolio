import { Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";

import Header from "./components/main/Header";
import Main from "./components/main/Main";
import Join from "./components/main/Join";
import NotFoundPage from "./components/main/NotFoundPage";
import Footer from "./components/main/Footer";
import GoUp from "./components/main/GoUp";
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
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainIntro" element={<MainIntro />} />
        <Route path="/aspiration" element={<MainAspiration />} />
        <Route path="/mainProject" element={<MainProject />} />
        <Route path="/skill" element={<MainSkill />} />
        <Route path="/contact" element={<MainContact />} />

        {/* <Route path="*" element={<NotFoundPage />} />
        <Route path="/join" element={<Join />} /> */}
      </Routes>

      <GoUp />
      <Footer />
    </>
  );
}

export default App;

{
  /* <header className="App-header">
        <h1>app.js</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
