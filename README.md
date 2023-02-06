# 📌 Overview : 포트폴리오 작업일지   
### 📝 tech stack : React, react-router-dom, JavaScript, HTML5, CSS3   
### 🔨 Tool :  GitHub, Visual Studio Code, Figma   
### 개인 작업 100%   
### 🔔 목표:   
- 웹 표준, 웹 접근성을 준수한 시멘틱 마크업 <br>
- 가독성 있는 페이지 구성으로 잘 읽히게 제작하기<br>
- 배운 기능들을 과하지 않게 활용하기   
### 웹사이트 유형 : 1920px   
<br>

## 📃 상세 내용
###  폴더 구성:   
<img src="/pfFold1.png" width="300px" height="500px" alt="폴더구성"></img>
<img src="/pfFold.png" width="300px" height="500px" alt="폴더구성"></img>
<img src="/pfFold2.png" width="300px" height="500px" alt="폴더구성"></img><br>
### layout:
라우터 돔을 이용해 전체적인 레이아웃을 만듦<br>
큰 틀로 봤을 때 메인 페이지에서 컨텐츠가 보여지기 때문에 Main.js에 전체적인 레이아웃을 잡고 Main 컴포넌트 안에 들어가는 Project 컴포넌트를 App.js에 구성함<br>
<img src="/pflayout.png" width="500px" height="350px" alt="Main.js"></img>
<img src="/pflayout2.png" width="500px" height="350px" alt="App.js"></img><br>   
- - -
###  페이지 구성: <br>
- aos 라이브러리를 통한 fade-in 효과 구현<br>
- 마우스 커서 따라다니는 효과 구현 & 클릭해야 할 부분에서 포인터 바꿔주기<br>
- 마우스 이벤트를 이용한 hover 효과 주기<br>
- 클릭이벤트를 이용해 로고 클릭시 맨 위로 가게 하기<br>
- offsetTop 함수를 응용하여 header 네비게이션바 클릭시 해당 컴포넌트로 부드럽게 이동하기<br>
- map 함수로 Skill 부분 간단히 표현하기   
<br>
## 👏 문제점 및 해결법:   <br>
1. 마우스 커서 따라다니는 효과를 주기 위해 여러 사이트를 찾아봤는데 내가 사용할 수 있는 라이브러리와 능력으로는 구현할 수 없었다. (리액트로 페이지를 만들고 있으나 자바스크립트&타입스크립트를 이용해 만드는 방법이 많이 나왔다. 자바스크립트 형식으로 컴포넌트를 하나 만들어 사용해볼까도 생각했지만, 맞지않는 방법 같았다.
  - solution: 배운 내용을 최대한 활용해 useState와 useEffect 로 간단하게 완성시킬 수 있었다.<br>
  client값으로 마우스의 위치를 확인하고 style 값을 준 뒤, position으로 위치를 고정시켜 주었다. 또 hover시 모양이 바뀌는 효과를 주기 위해 style값을 하나 더 만들어주고, 삼항연산자로 손쉽게 클릭이벤트 효과도 줄 수 있었다.<br>
  
```javascript
 const [coods, setCoods] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoods({ x: e.clientX, y: e.clientY });
  };
``` 
```javascript
 const [hover, setHover] = useState(false);
  const isHovered = (boo) => {
    setHover(boo);
  };
  useEffect(() => {
    return isHovered();
  }, []);
```
```javascript
style={hover ? style1 : style2}
``` 

2. Skill 부분 특정 텍스트에 sitcky 효과를 주었으나, 적용되는듯 적용되지 않았다.
  - solution: 최종 Skill 컴포넌트에 적용된 방식은 map을 사용한 방식으로, 나열한 item 값들이 자동 입력된다. 그 과정에서 입력하지 않은 텍스트에 position 값이 적용되어 브라우저에서 확인할 수 없었던 것이었다. 해당 부분 해결을 위해 필요없는 텍스트를 입력하면 가독성이 떨어지는 문제가 나타나 추가 작업은 진행하지 않았다.   
  <br>

## 📃 review   
react를 배우면서 처음 작업한 결과물이다. 모두 배운 뒤 만들었으면 컴포넌트 네이밍이나 scss,css 통일 등 조금 더 완성도 있게 작업할 수 있지 않았을까 하는 아쉬움이 남는다.   html과 css는 미리 만들어 두었기에 react로  작업하는 것이 쉬울 것 같았지만, 의도한 대로 되지 않았다. 곳곳에서 문제사항이 발생했고, 해결하는 과정이 쉽지만은 않았다.  이 경험을 토대로 당장 이 포트폴리오 구성을 더 나은 구조로 작업할 수 있었다.
  
