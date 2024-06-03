import "../style/mainSkill.scss";
import skillDataContex from "../../assets/DB/skillData";

function MainSkill() {
  return (
    <article className="skill main">
      <h2>Skill</h2>

      {skillDataContex.map((item) => (
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
      ))}
    </article>
  );
}

export default MainSkill;
