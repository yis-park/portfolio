import "../style/mainSkill.scss";

function MainSkill() {
  return (
    <article className="skill main">
      <div data-aos="fade-up">
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
            <li>웹표준 & 웹접근성을 준수하는 마크업 사용</li>
            <li>웹 사이트 구축 및 디자인 가능</li>
            <li>lex & grid & positon 등을 이용한 레이아웃 구현</li>
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
            <li>ES6+ 기본 문법에 대한 이해</li>
            <li>map, filter, forEach, reduce등 고차함수에 대한 이해</li>
            <li>마우스이벤트, 폼 이벤트등 이벤트 메소드 구현 </li>
            <li>
              setTimeout, setInterval, Async/Await 등 비동기 처리에 대한 이해
            </li>
            <li>앱키를 이용한 Open API 데이터 사용 가능</li>
            <li>Node.js 사용으로 js 런타임 실행</li>
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
            <li>DOM 관리와 상태 변화 관리 최소화</li>
            <li>Components 분리, 관리 가능</li>
            <li>Context API, Redux Toolkit으로 전역 상태 관리 가능</li>
            <li>
              useState, useEffect 등의 함수형 컴포넌트 (React Hook) 을 이용한
              동적 사이트 구현
            </li>
            <li>Styled-Components, SCSS를 이용한 스타일 구현</li>
            <li>React-router-dom을 이용한 컴포넌트 이동</li>
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
            <li>UI/UX 디자인 제작</li>
            <li>일러스트 제작(아이콘)</li>
          </ul>
        </div>
        <div
          className="flex"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <h4>Figma</h4>
          <ul>
            <li>앱 웹 프로토타입 제작</li>
            <li>UI/UX 디자인 제작</li>
            <li>와이어프레임 제작</li>
            <li>프로토타입 구현 및 제작</li>
          </ul>
        </div>
      </div>

      <div
        className="explanation"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <h3>OTHER;</h3>
        <div className="flex">
          <h4>Git&Github</h4>
          <ul>
            <li>레파지토리 관리</li>
            <li>Git 명령어 활용</li>
            <li>Git Bash & VScode 사용</li>
            <li>프로젝트 버전 관리</li>
            <li>작업물 공유 및 협업</li>
          </ul>
        </div>
        <div
          className="flex"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <h4>Firebase</h4>
          <ul>
            <li>백엔드 관리자와의 협업을 위해 간단한 기능 숙지</li>
            <li>인증을 통해 실시간 데이터베이스 저장</li>
            <li>데이터 생성 추가 (회원가입 페이지)</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default MainSkill;
