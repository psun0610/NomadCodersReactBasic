[🖱️벨로그: 토이프로젝트 설명](https://velog.io/@psun0610/React-%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-To-Do-List-Coin-Tracker-Movie-App-feat.-%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94)

노마드코더 ReactJS로 영화 웹 서비스 만들기 강의를 들으면서 조금 변형해서 간단하게 프로젝트를 완성했다.
다만 빠르게 React를 익히기 위해 만들어 본 것이라서 UI는 전혀 신경쓰지 않아 엉망진창인 점 양해바란다.

> 🖱️프로젝트 Github Pages 배포
> https://psun0610.github.io/NomadCodersReactBasic/

# 개요

React의 기본 기능들을 다시 한번 짚어보면서 기반을 다지고 싶어서 시작했다.
기본적으로 JavaScript의 querySelector()에서 시작하여 ReactDOM.createRoot()를 거치고 최종적으로 JSX를 사용하여 효과적으로 React를 작성하는 방법까지 배우며 원리를 더 쉽게 이해할 수 있는 시간이었다.

특히, 두루뭉실하게 알고 있던 memo()에 대해 공부할 수 있는 계기가 되었다. [🖱️React.memo()로 성능 최적화하기, 주의점](https://velog.io/@psun0610/React-React.memo%EB%A1%9C-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%A3%BC%EC%9D%98%EC%A0%90)

# 프로젝트 설명

이 간단한 토이 프로젝트는 **To-Do List**, **Coin Tracker**, **Movie App**으로 이루어져 있다.

## 1. Nav 바

이 3가지는 화면 상단의 Nav바를 통해 전환할 수 있다.
![](https://velog.velcdn.com/images/psun0610/post/85af8101-33ae-485e-a4f0-1fb9b195648f/image.png)

처음에는 To-Do List가 Default 값이기 때문에 다음과 같이 보여진다.
![](https://velog.velcdn.com/images/psun0610/post/ae90965b-bb74-4b80-9ee4-02499b1d73b1/image.png)

네비게이션 전환을 위해서 코드는 다음과 같이 작성했다.
option들을 객체 배열 안에 두고, 이를 map을 이용하여 화면에 뿌려주었다.
![](https://velog.velcdn.com/images/psun0610/post/6587a5a5-9b41-4191-9933-7cebc17b71c4/image.png)

## 2. To-Do List

To-Do List에는 작성할 input과 추가 버튼이 있다.
또한 추가할 때마다 최근에 추가한 요소가 위로 오게 되며, 개수도 바뀐다.
![](https://velog.velcdn.com/images/psun0610/post/a03dfcf8-d961-44b5-aa6b-e2631219bec1/image.png)
![](https://velog.velcdn.com/images/psun0610/post/a6941368-801e-47cf-8a1e-1a0b0e22c628/image.png)

To-Do List의 중요한 점은 Coin Tracker와 Movie app을 눌렀다가 **다시 돌아와도 작성한 그대로 남아있는 것**이다.

처음에는 현재 input의 상태값인 `toDo`와, 작성된`toDo`들의 리스트인 `toDos`를 모두 `ToDoList` 컴포넌트에 두었다. 이렇게 되면 다른 앱으로 이동하였다가 다시 To-Do List를 틀었을 때 리렌더링 되면서 모든 상태가 원상복구되었다.

그래서 부모 컴포넌트가 자식의 상태를 컨트롤할 수 있도록 부모인 `Home` 컴포넌트로 `toDos`상태를 옮겼다.
![](https://velog.velcdn.com/images/psun0610/post/3a7bc3a9-522b-4a82-8648-8a58f51418b8/image.png)
`toDos`는 부모에게로부터 `props`로 전달받아 사용하게 하여, `nav`가 전환되어도 상태가 변하지 않게 할 수 있었다.
![](https://velog.velcdn.com/images/psun0610/post/42fd8688-9eea-474c-8c5f-3f6b60fc1ec2/image.png)

## 3. Coin Tracker

Coin Tracker은 coin시세를 api로부터 받아와서 내가 가진 달러로 해당 코인을 얼마나 살 수 있는지 계산하는 간단한 앱이다.

먼저, api로부터 받아오는 데 걸리는 시간동안 `loading`이라는 문구를 띄우고, 다 받아오면 Coin Tracker를 보여준다.

Coin의 개수(2000)가 나와있다. input에 얼마를 가지고 있는지 숫자를 작성한 후 계산 버튼을 누르면 된다.
![](https://velog.velcdn.com/images/psun0610/post/18f5e2fe-c4ad-48fc-9fa0-c7e9718d8321/image.png)

다음과 같이 결과가 나오게 된다.
![](https://velog.velcdn.com/images/psun0610/post/57972780-000b-4450-bf3a-b49b3be7a445/image.png)

상태가 변화해도 api를 재호출하지 않게 `useEffect`를 사용했다. 또한 모든 데이터를 받아오면 `coin`에 데이터를 넣고, `loading`도 `false`로 바꿔준다.
![](https://velog.velcdn.com/images/psun0610/post/b13e8a86-153e-4cb4-9e02-b67047d83504/image.png)

input에 들어온 값(`money`)과 선택한 코인의 값(`select`)를 이용하여 계산 후 `result`에 저장한다.
![](https://velog.velcdn.com/images/psun0610/post/39085bf7-8cf0-403e-bb5e-fc4f9ea918b7/image.png)

![](https://velog.velcdn.com/images/psun0610/post/99d831bf-7599-41ee-9645-c1ece101886d/image.png)

## 4. Movie App

마지막으로 영화 api를 통해 영화 정보를 가져오고 간단하게 뿌려주는 Movie app이다.
![](https://velog.velcdn.com/images/psun0610/post/74220d7f-3500-480d-a0e3-11d4e77ea0d0/image.png)

Coin Tracker와 마찬가지로 `loading` 상태가 있고, 로딩이 끝나면 영화 데이터를 보여준다.
이때는 `fetch`에 `async await` 문법을 사용해 보았다.
![](https://velog.velcdn.com/images/psun0610/post/db68fd3f-abf5-4a69-b6c2-053d9d5124c2/image.png)

영화 데이터들은 `Movie`라는 컴포넌트로 따로 뺐다. 간단한 정보들을 보여주게 했고, `propTypes`도 지정해보았다.
![](https://velog.velcdn.com/images/psun0610/post/7fc6fa47-d464-4564-8f50-373f96803881/image.png)

### React-router-dom

영화를 클릭하면 더 세부적인 영화 정보를 보여주기 위해 `react-router-dom`을 설치했다.
나는 github pages로 배포하기 위해서 path에 `${process.env.PUBLIC_URL}`을 추가하였다. 이것을 추가하지 않으면 `no routes matched '/repo-이름'` 이라는 에러메시지를 볼 수 있다.
![](https://velog.velcdn.com/images/psun0610/post/5e8a1753-e5be-4975-93e0-f4897f78c728/image.png)

movie의 세부사항을 보여줄 `Detail` 컴포넌트에서는 `usParams()`를 이용하여 parameter를 불러오고 이를 이용해 세부사항을 보여줬다.
![](https://velog.velcdn.com/images/psun0610/post/22534adc-d7b3-4b6d-bf74-2197300f7728/image.png)

# 결론

CSS도 작성하지 않아서 아주 초라하지만.. 간단하게 React를 복습해보고 강의를 들으면서 React의 전반적인 이해가 더 잘 되었고 자신감이 생겼다. 노마드코더의 강의는 냅다 사용방법부터 알려주는 것이 아니라 기본 원리부터 설명해줘서 너무 좋았다.
다음은 Styled Component와 Recoil 혹은 Redux를 사용하여 프로젝트를 만들어 볼 것이다. 이상.
