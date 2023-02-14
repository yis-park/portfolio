import "../style/mainSkill.scss";
import data from "../../assets/DB/skillData";

function MainSkill() {
  return (
    <article className="skill main">
      <h2>Skill</h2>

      {data.map((item) => (
        <div key={item.id} className="explanation">
          <h3>{item.title}</h3>
          <div className="flex">
            <h4>{item.name1}</h4>
            <ul>
              <li>{item.des1} </li>
              <li>{item.des2} </li>
              <li>{item.des3} </li>
              <li>{item.des4} </li>
              <li>{item.des5} </li>
              <li>{item.des6} </li>
              <li>{item.des7} </li>
              <li>{item.des8} </li>
            </ul>
          </div>
        </div>
      ))}
    </article>
  );
}

export default MainSkill;
