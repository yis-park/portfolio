# 📌 Overview : 포트폴리오 작업일지

## **📝 tech stack : React, React Router, JavaScript, HTML5, CSS3**

## **🔨 Tool : GitHub, Visual Studio Code, Figma, notion**

### **개인 작업 100%**

### **웹사이트 유형 : 1920px**

<br />

## **🔔 목표:**

<br />

- [ ] 웹 표준, 웹 접근성을 준수한 시멘틱 마크업

- [ ] 가독성 있는 페이지 구성으로 제작하기

- [ ] 배운 기능들을 과하지 않게 활용하기

## **📃 상세 내용**

### 폴더 구성:

components 폴더 하위에 main, project, style 폴더를 만들어 관리함

![pfFold.png](https://github.com/yis-park/portfolio/blob/main/%F0%9F%93%8C%20Overview%20%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%EC%9E%91%EC%97%85%EC%9D%BC%EC%A7%80%20f5d7273b6c8e4dd98c199c7285722b73/pfFold.png?raw=true)

![pfFold2.png](https://github.com/yis-park/portfolio/blob/main/%F0%9F%93%8C%20Overview%20%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%EC%9E%91%EC%97%85%EC%9D%BC%EC%A7%80%20f5d7273b6c8e4dd98c199c7285722b73/pfFold2.png?raw=true)

### **페이지 구성:**

- aos 라이브러리를 통한 fade-in 효과 구현
- 마우스 커서 따라다니는 효과 구현 & 클릭해야 할 부분에서 포인터 바꿔주기
- 마우스 이벤트를 이용한 hover 효과 주기
- 클릭이벤트를 이용해 로고 클릭시 맨 위로 가게 하기
- offsetTop 함수를 응용하여 header 네비게이션바 클릭시 해당 컴포넌트로 부드럽게 이동하기
- map 함수로 Skill 부분 간단히 표현하기
- 해당 프로젝트 클릭 시 관련 깃허브로 바로 이동 →마크다운 문서로 상세페이지 제작하기

### **layout:**

**라우터 돔을 이용해 전체적인 레이아웃을 만듦**

메인 페이지에서 모든 컨텐츠가 보여지기 때문에 Main.js에 전체적인 레이아웃을 잡고 Main 컴포넌트 안에 들어가는 Project 컴포넌트를 App.js에 구성함

![pflayout.png](https://github.com/yis-park/portfolio/blob/main/%F0%9F%93%8C%20Overview%20%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%EC%9E%91%EC%97%85%EC%9D%BC%EC%A7%80%20f5d7273b6c8e4dd98c199c7285722b73/pflayout.png?raw=true)

![pflayout2.png](https://github.com/yis-park/portfolio/blob/main/%F0%9F%93%8C%20Overview%20%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%EC%9E%91%EC%97%85%EC%9D%BC%EC%A7%80%20f5d7273b6c8e4dd98c199c7285722b73/pflayout2.png?raw=true)
<br />
<br />

## 👏 문제점 및 해결법:

<br />

1. **마우스 커서 따라다니는 효과**를 주기 위해 여러 사이트를 찾아봤는데 내가 사용할 수 있는 라이브러리와 능력으로는 구현할 수 없었다. (리액트로 페이지를 만들고 있으나 자바스크립트&타입스크립트를 이용해 만드는 방법이 많이 나왔다.)

   자바스크립트 형식으로 컴포넌트를 하나 만들어 사용해볼까도 생각했지만, 맞지않는 방법 같았다.

   해결법 →

   배운 내용을 최대한 활용해 **useState와 useEffect** 로 간단하게 완성시킬 수 있었다.

   ```jsx
   const [coods, setCoods] = useState({ x: 0, y: 0 });
   const handleMouseMove = (e) => {
     setCoods({ x: e.clientX, y: e.clientY });
   };

   const [hover, setHover] = useState(false);
   const isHovered = (boo) => {
     setHover(boo);
   };
   useEffect(() => {
     return isHovered();
   }, []);
   ```

   client값으로 마우스의 위치를 확인하고 style 값을 준 뒤, position으로 위치를 고정시켜 주었다. 또 hover시 모양이 바뀌는 효과를 주기 위해 style값을 하나 더 만들어주고, 삼항연산자로 손쉽게 클릭이벤트 효과도 주었다.

   <br />

2. **Skill 부분 특정 텍스트에 sitcky 효과를 주었으나, 적용되는듯 적용되지 않았다.**

   ```jsx
   	(...중략)

   .div{
   overflow: hidden;
   }
   h3{
   position: sticky;
   }
   ```

   해결법 →

   처음엔 overflow:hidden 값이 적용되어 sticky가 되지 않는다는 걸 확인했다. 그래서 overflow 값을 지웠고, 잘 작동하는 것을 확인했다.

   하지만 최종 Skill 컴포넌트에 적용된 방식은 map을 사용한 방식으로, 나열한 item 값들이 자동 입력된다. 그 과정에서 입력하지 않은 텍스트에 position 값이 적용되어 브라우저에서 확인할 수 없었던 것이었다. 해당 부분 해결을 위해 필요없는 텍스트를 입력하면 가독성이 떨어지는 문제가 나타나 추가 작업은 진행하지 않았다.

<br />

## **📃 review**

<br />
이 포트폴리오는 다른 포트폴리오 탬플릿을 사용하지 않고 html 틀부터 디자인, 코딩 등 하나하나 내가 직접 쌓아 만든 작업물이다.

그렇기에 더욱 가치있고 자랑스러운 **나의 자산**이다.

수업시간에 배운 내용을 최대한 활용해 적용하려 했고 모르겠는 것들은 검색과 질문을 통해 답을 찾았다. 공식 문서(mdn, reactjs 등)에서 정의를 찾아보는 시간도 아주 유익했다.  
이렇게 직접 찾아보고 적용하고, 수정하는 과정에서 수업시간에 이해하지 못했던 것들을 이해하기도 하고, 코딩에서는 정형화 된 답이 없다는 것을 깨달을 수 있었다.

또한 figma로 와이어프레임, 프로토타입을 제작하는 과정에서 프로토타입을 자세히 작성한다고 했는데도 막상 코딩을 해보니 수정해야 할 부분들이 많이 보였다.  
폰트가 어울리지 않다던가, 폰트 사이즈가 맞지 않는 부분, 행간 조절도 필요했다.
세세한 것들은 코딩을 하며 수정하긴 했지만, 구조적인 부분을 바꾸기도 했다.
그래도 초반에 틀을 잡아놨기 때문에 더 많이 헤매지 않았다고 생각한다.  
앞으로 일을 할 때에도 바로 코딩을 하기 보단 구조적인 것들을 정리한 후에 시작해야 겠다는 생각을 했다.
