# 3주차 배운 내용 정리

## 1. addEventListener
JavaScript EventTarget의 addEventListener() 메서드는 지정한 이벤트가 대상에 전달될 때마다 `호출할 함수를 설정`한다.

이 때 주의할 것은, addEventListener에 전달되는 인자이다.

우선 첫 번째 인자로는 click, mouseover 등의 해당 event를 명시해준다.

그리고 두 번째 인자같은 경우, 이벤트 발생 시 실행될 함수를 명시해준다.

그래서 위의 내용에 따라 addEventListener를 사용해 본다면

```js
classname.addEventListener('click', changeColor);
```
와 같은 형태로 사용할 수 있다. 그런데 이 때,

```js
classname.addEventListener('click', changeColor());
```
와 같은 형태로 작성하면 안된다. 이렇게 작성하면 JS 파일을 읽어내려가는 순간 changeColor()라는 함수가 실행될 것이다.

addEventListener의 목적은 함수를 실행하는 것이 아니라, 브라우저에게 함수를 전달하는 것이므로 괄호 없이 함수의 이름만 명시해주어야 한다.

그러면 두 번째 인자인 콜백 함수에 파라미터를 넘겨야 할 때는 어떻게 해야 할까?

이 때는 `화살표 함수`를 사용하면 가능하다.

```js
classname.addEventListener('click', (e) => {
  changeColor(e);
});
```

위와 같이 작성해주면, 이벤트 객체(e)를 화살표 함수 내부에서 전달해주고 콜백 함수에도 이것을 전달해줄 수 있다.

</br></br>

## 2. 유사 배열
JS에서 DOM 객체로 어떤 요소들을 가져올 때, 여러개를 가져오게 되면 반환 시 유사배열이 된다.

예를 들어,
```js
arr = documentgetElementsByClassName("classname");
```
로 classname이라는 클래스를 가진 어떤 요소들을 가져온다면, 이 때 arr는 유사배열이다.

그래서 arr. 으로 사용 가능한 메서드들을 확인해보면, 진짜 배열보다는 사용할 수 있는 메서드가 적다.

이 유사배열을 진짜 배열로 변환해 주려면, 다음과 같이 Array.from()을 사용해주면 된다.

```js
real_arr = Array.from(arr);
```

그러면 정상적인 배열에서 사용할 수 있는 map 등의 메서드를 사용할 수 있게 된다.

```js
real_arr.map(v => v.innerText);
```