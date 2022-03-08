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
