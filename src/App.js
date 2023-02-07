import { Route, Routes } from "react-router-dom";

import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
// import Join from "./components/main/Join";
// import NotFoundPage from "./components/main/NotFoundPage";
import "./assets/style/style.scss";

function App() {
  return (
    <div>
      <Main />
      <Footer />
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
