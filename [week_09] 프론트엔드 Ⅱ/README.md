# 9주차 배운 내용 정리

## key words

`useEffect`

<br><br>

## 1. useEffect

### 기본 형태

```js
useEffect(() => {}, []);
```

useEffect는 `side effect`를 처리하기 위한 Hook이다. 순수하지 않은 함수를 처리한다.

### 순수함수

➡ 언제나 같은 결과가 나오는 함수

```js
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));
```

### 비순수함수

➡ 언제나 같은 결과를 나타내지 않는 함수. 아래 예시에서는 b에 의존하고 있다.

```js
b = 2;
function add(a) {
  return a + b;
}
console.log(add(1));
b = 3;
console.log(add(1));
```

컴포넌트에서 `최초 한 번만 실행`해야 하는 로직이 있다면, useEffect를 사용한다.

<br>

## 2. e.preventDefault()

React => CSR => SPA => 페이지 변환이 일어나면 안된다.

```js
const [user, setUser] = useState({
  id: "",
  pw: "",
});

useEffect(() => {
  console.log(user);
}, [user]); // user라는 변수가 실제로 변할 때마다 동작

const handleSubmit = (e) => {
  e.preventDefault();
  ~~~
};
```

<br>

## 3. axios

- axios.post의 두 번째 인자에는 body
- axios.get은 두 번째 인자에는 바로 header (get요청은 body가 없다.)

<br>

## 4. Context

- React에서 전역적으로 상태관리를 할 때 사용
- Context는 React에서 사용하는 `유사(기능이 더 많은) 전역변수`다.

```jsx
import { createContext, useContext } from "react";

const themeDefault = {
  border: "10px solid blue",
  color: "red",
};

const themeContext = createContext(themeDefault); // 컨텍스트 생성

function Child3(props) {
  const theme = useContext(themeContext); // 컨텍스트 사용
  return (
    <div style={{ border: theme.border }}>
      <h1>3</h1>
    </div>
  );
}
```

- Context의 Provider에 value를 넣으면, 하위 컴포넌트들에게 자동 값 전달
