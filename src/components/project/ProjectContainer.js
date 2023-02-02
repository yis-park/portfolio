import { useNavigate, useParams } from "react-router-dom";

function ProjectContainer(props) {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };
  return (
    <div
      className=""
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <h3>이슬이는 호두 없으면 안대 ^_^</h3>

      {/* <div className="">
        이 포트폴리오는 다른 포트폴리오 템플릿을 사용하지 않고 html 틀부터
        디자인, 코딩 등 하나하나 직접 쌓아 올린 작업물이다. 그런 점에서 매우
        뿌듯하고 강점이 될 수 있는 부분이라고 생각한다. 다만 만들기 전엔
        부담스럽고 ‘과연 내가 할 수 있을까?’ 하는 생각이 들었던 건 사실이다.
        전공자도 아니고 컴퓨터에 대해 많은 지식이 있지 않다 보니 html, css,
        javascript,react 다 학원에서 처음 접한 용어,언어들이었기 때문에 단어들이
        익숙해 지는데에 시간이 걸렸다. 수업을 통해 배운 내용을 완벽히 이해하고
        적용했으면 더욱 좋았겠지만, 그때그때 머리에 다 넣는건 쉽지 않은
        일이었다. 주말 과제가 없는 날에는 카페에 가서 공부도 하고, 관련 서적도
        찾아보고 노력을 많이 했다. position:sticky가 특정 상황에서 제대로
        작용하지 않음 (스킬부분. overflow:hidden 있어서 안됐었음.!!) figma로
        프로토타입을 자세히 작성한다고 했는데도 막상 코딩을 해보니 어울리지 않는
        부분 발생(폰트,사이즈,행간 등)
      </div> */}
      <button onClick={goTo}>이전</button>
    </div>
  );
}

export default ProjectContainer;
