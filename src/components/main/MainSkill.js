import "../style/mainSkill.scss";

function MainSkill() {
  return (
    <article className="skill main">
      <div data-aos="fade-left">
        <h2>Skill</h2>
      </div>

      <div
        className="explanation"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <h3>WEB;</h3>

        <div
          className="flex"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <h4>
            Html5& <br />
            Css3
          </h4>
          <ul>
            <li>웹 사이트 구축 및 디자인</li>
            <li>웹표준 & 웹접근성을 준수하는 마크업</li>
            <li>flex & grid & positon를 이용한 레이아웃 구현</li>
            <li>Mediaquery를 이용한 반응형 웹 제작</li>
            <li>CSS animation을 활용한 모션 구현</li>
          </ul>
        </div>

        <div
          className="flex"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <h4>
            Jsvascripts
            <br />
            (ES6+)
          </h4>
          <ul>
            <li>javascript</li>
            <li>자바스크립트 기본 문법 이해</li>
            <li>동적 웹 사이트 구현</li>
            <li>이벤트 메소드 구현</li>
            <li>jQuery & Ajax & JSON</li>
            <li>OpenAPI 사용 가능</li>
            <li>함수 컴포넌트, useState를 이용한 웹사이트 제작JSON, fetch</li>
          </ul>
        </div>
        <div
          className="flex"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <h4>React</h4>
          <ul>
            <li>React 생성, 배포 가능</li>
            <li>Components 분리, 관리</li>
            <li>React HOOK을 이용한 동적 사이트 구현</li>
            <li>Styled-Components, SCSS를 이용한 스타일 구현</li>
            <li>React 추가 공부중</li>
          </ul>
        </div>
      </div>
      <div
        className="explanation"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <h3>DESIGN;</h3>
        <div className="flex">
          <h4>
            Photoshop & <br />
            Illustrator
          </h4>
          <ul>
            <li>웹 사이트 구축 및 디자인</li>
            <li>이미지 편집 수정 & 디자인</li>
            <li>UI/UX 디자인</li>
            <li>일러스트 제작(아이콘)</li>
          </ul>
        </div>
        <div className="flex">
          <h4>Figma</h4>
          <ul>
            <li>앱 웹 프로토타입 제작</li>
            <li>UI/UX 디자인</li>
            <li>와이어프레임 제작</li>
            <li>프로토타입 구현 및 제작</li>
          </ul>
        </div>
      </div>

      <div className="explanation">
        <h3>OTHER;</h3>
        <div
          className="flex"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <h4>Git&Github</h4>
          <ul>
            <li>레파지토리 관리</li>
            <li>Git 명령어 활용</li>
            <li>Git Bash & VScode 사용</li>
            <li>프로젝트 버전 관리</li>
            <li>작업물 공유 및 협업</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default MainSkill;
