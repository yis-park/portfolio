import "../style/mainIntro.scss";
import imglogo from "../../assets/images/scroll-down.jpg";

function MainIntro(props) {
  return (
    <main className="intro">
      <h1>Slow and steady</h1>
      <h3>Front-end Developer</h3>
      <h3>YiSeul-Park</h3>
      <h3>Port Folio</h3>

      <div className="scrolldown">
        <img src={imglogo} alt="scrolldown" />
        <h4>Folio-23</h4>
      </div>
    </main>
  );
}

export default MainIntro;
