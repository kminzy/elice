# 8주차 배운 내용 정리

## Keyword

- React에서 렌더링이 일어나는 시점

- props에 state 전달

- Component 만들기

  <br />

## 1. React에서 렌더링이 일어나는 시점

```
1) state 변경
2) props 변경
3) 부모 컴포넌트가 렌더링 됐을 때
```

🎈 렌더링은 곧 컴포넌트 함수가 실행되는 것이다.

```js
function OnlyProps({ data }) {
  // 이 컴포넌트는 props만 존재, props가 변경될 때 렌더링이 일어난다.
  console.log("렌더링 됐음");
  return <div>{data}입니다.</div>;
}

function Child() {
  console.log("렌더링!!");
  return <h1>자식</h1>;
}

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <Child /> {/* 자식에 전달되는 것은 없지만, 부모가 setState로 state 변경이 일어나기 때문에 자식 컴포넌트 또한 자동 재렌더링 된다. */}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}
```

조건부 렌더링

```js
function Page1() {
  return <h1>첫 번째 컴포넌트</h1>;
}
function Page2() {
  return <h1>두 번째 컴포넌트</h1>;
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show</button>
      {show === false ? <Page1 /> : <Page2 />}
    </div>
  );
}
```

  <br />

## 2. props에 state 전달

- props는 읽기 전용이고, state는 특정 상태를 변경할 때 사용한다.
  - ⭐ 읽기 전용 값인 props는 절대 바뀌면 안된다. ⭐
- 배열, 객체를 setState로 상태 변경할 때에는 꼭! `deep copy` 후 변경해야 한다.
  - ex) arr.slice(), [...arr] 등
  - 자기 자신한테 연관되는 메소드는 쓰지 말 것 ex) push
  - 👉 map, reduce, filter 등 새로운 배열을 반환하는 메소드를 사용하자
- `자식 컴포넌트에서 부모 컴포넌트 state를 바꾸려면 항상 props로 관리를 해야한다.`

  - 자식의 자식의 자식에서 증조 컴포넌트를 바꾸려면 계속 props를 전달해줘야 한다. (React의 최대 단점)
  - 이것을 해결하기 위해서는 Context, Redux 같은 전역 상태 라이브러리를 사용해야 한다.

  <br />

## 3. Component 만들기

컴포넌트는 React에서 페이지를 구성하는 최소 단위이다. `사용자 정의 태그`라고 이해하면 된다. 리액트의 각 기능들은 최대한 작게 쪼개어 각각의 컴포넌트로 구성하는 것이 좋다.

<br />

## 4. React의 Router

Route에 Element로 전달된 컴포넌트는 path의 가변 인자를 획득할 수 있다 by useParams Hook

```js
import { Link, Routes, Route, useParams } from "react-router-dom";

function Nav(props) {
  let lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <Link to={"/read/" + t.id}>{t.title}</Link>
      </li>
    );
  }

  function Read() {
  const params = useParams();
  console.log("useParams: ", params);
  return <Article title="Read" body="Hello, Read"></Article>;
}

function App() {
  console.log("App render");

  let topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];

  return (
    <>
      <Routes>
        <Route path="/read/:id" element={<Read></Read>}></Route>
      </Routes>
    </>
  );
}

```

<br />

## 5. React에서의 setState

변경하려는 데이터가 원시데이터 타입이 아닌 `객체`일 때에는, `복제`해서 변경해야 한다.

```js
a = [1, 2, 3];
b = [...a];
b.push(4);
console.log(a, b); // [1, 2, 3] [1, 2, 3, 4]
```
