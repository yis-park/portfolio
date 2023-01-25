import "../style/mainIntro.scss";
import "../../assets/images/scroll-down.jpg";

function MainIntro(props) {
  return (
    <main className="intro">
      <h1>Slow and steady</h1>
      <h3>Front-end Developer</h3>
      <h3>YiSeul-Park</h3>
      <h3>PortFolio</h3>

      <div>
        <img src="/scroll-down.jpg" alt="scrolldown" />
        <h4>Folio-23</h4>
      </div>
    </main>
  );
}

export default MainIntro;
