import "../style/mainSkill.scss";
import skillDataContex from "../../assets/DB/skillData";

import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiAmazonaws,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiVite,
  SiElectron,
  SiMui,
} from "react-icons/si";

function MainSkill() {
  return (
    <article
      className=" main skill "
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <h2>Skill</h2>

      {/* {skillDataContex.map((item) => (
        <div key={item.id} className="explanation">
          <h3>{item.title}</h3>
          <div className="flex">
            <h4>{item.name1}</h4>
            <ul>
              {item.descriptions.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
        </div>
      ))} */}
      <div className="skillFlex">
        <div className="skillFlexDiv">
          <div
            className="projectReact  border skillBox"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <h3>F/E</h3> <br />
            <div style={{ display: "flex", gap: 30, marginBottom: 80 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiJavascript color="#F4CE14" />
                </h3>
                <p style={{ marginLeft: 3 }}>JavaScript</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiTypescript color="#0F67B1" />
                </h3>
                <p style={{ marginLeft: 3 }}>Typescript</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiHtml5 color="#FF7F3E" />
                </h3>
                heml5
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiCss3 color="#0F67B1" />
                </h3>
                css3
              </div>
            </div>
            <div style={{ display: "flex", gap: 30, marginBottom: 80 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiReact color="#3FA2F6" />
                </h3>
                <p style={{ marginLeft: 3 }}>React</p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiElectron color="#0F67B1" />
                </h3>
                <p style={{ marginLeft: 3 }}>Electron</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiVite color="#AF47D2" />
                </h3>
                <p style={{ marginLeft: 3 }}>Vite</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiMui color="#050C9C" />
                </h3>
                <p style={{ marginLeft: 3 }}>MUI</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 30, marginBottom: 80 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiSass color="#FF4191" />
                </h3>
                <p style={{ marginLeft: 3 }}>sass</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiStyledcomponents color="#AF47D2" />
                </h3>
                <p style={{ marginLeft: 3 }}>Styled Components</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiTailwindcss color="#3FA2F6" />
                </h3>
                <p style={{ marginLeft: 3 }}>tailwindcss</p>
              </div>
            </div>
          </div>
          <div
            className="projectReact  border skillBox"
            // data-aos="fade-up"
            // data-aos-easing="ease-in-out"
            // data-aos-anchor-placement="top-bottom"
          >
            <h3>Deployment</h3> <br />
            <div style={{ display: "flex", gap: 30, marginBottom: 80 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiAmazonaws color="#FF7F3E" />
                </h3>
                <p style={{ marginLeft: 3 }}>AWS</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiDocker color="#3FA2F6" />
                </h3>
                <p style={{ marginLeft: 3 }}>Docker</p>
              </div>
            </div>
            <br />
            <br />
            <h3>OTHER</h3> <br />
            <div style={{ display: "flex", gap: 30, marginBottom: 80 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiFigma color="#AF47D2" />
                </h3>
                <p style={{ marginLeft: 3 }}>Figma</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiGit color="#000" />
                </h3>
                <p style={{ marginLeft: 3 }}>Git</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ width: "auto" }}>
                  <SiGithub color="#000" />
                </h3>
                <p style={{ marginLeft: 3 }}>Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MainSkill;
