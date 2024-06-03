import "../style/mainIntro.scss";
import imglogo from "../../assets/images/scroll-down.jpg";
import "aos/dist/aos.css";

function MainIntro() {
  return (
    <article
      className="intro main"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-center"
    >
      <h1>Slow and steady</h1>
      <h3>Front-end Developer</h3>
      <h3>YiSeul-Park</h3>
      <h3>Port Folio</h3>

      <div className="scrolldown">
        <img src={imglogo} alt="scrolldown" />
        <h4>Folio-24</h4>
      </div>
    </article>
  );
}

export default MainIntro;
