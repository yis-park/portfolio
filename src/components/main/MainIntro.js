import "../style/mainIntro.scss";
import imglogo from "../../assets/images/scroll-down.jpg";
import { Fade } from "react-reveal";
import "aos/dist/aos.css";

function MainIntro(props) {
  return (
    <article
      className="intro main"
      data-aos="fade-right"
      // data-aos-offset="10"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <h1>Slow and steady</h1>
      {/* <h3>Front-end Developer</h3> */}
      <h3>Software Engineer</h3>
      <h3>YiSeul-Park</h3>
      <h3>Port Folio</h3>

      <div className="scrolldown">
        <img src={imglogo} alt="scrolldown" />
        <h4>Folio-23</h4>
      </div>
    </article>
  );
}

export default MainIntro;
