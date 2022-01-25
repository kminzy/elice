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

addEventListener의 목적은 함수를 실행하는 것이 아니라, `브라우저에게 함수를 전달`하는 것이므로 괄호 없이 함수의 이름만 명시해주어야 한다.

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

</br></br>

## 3. 자바스크립트 코드의 실행
- 자바스크립트 엔진은 코드가 없어도 실행 환경(컨텍스트)을 초기화 한다.
- 스코프(scope): 코드가 현재 실행되는 환경, 맥락(context)
- **this 포인터**, **스코프에 저장된 변수들**, **스코프 체인** 등이 환경에 포함된다.
### 3-1. this 포인터
- this 포인터의 경우, 글로벌 스코프에서는 `window`를 가리킨다.
- 객체의 메서드의 경우, 메서드 환경의 this는 `해당 객체`를 가리키게 된다.
- 하지만 this가 가리키는 것은 환경에 따라 변할 수 있다.
### 3-2. 실행 컨텍스트(Execution context)
- 실행 컨텍스트 혹은 실행 맥락은, 자바스크립트가 실행되는 환경.
- 코드에서 참조하는 변수, 객체(함수 포함), this 등에 대한 레퍼런스가 있다.
- 실행 컨텍스트는 전역에서 시작해, 함수가 호출될 때 스택에 쌓이게 된다.
- 자바스크립트가 실행될 때와 모든 함수의 호출이 끝난 후 마지막 스코프 체인에는 `전역 실행 컨텍스트(Global Execution Context)`가 만들어진다.
- 함수가 실행될 때 `함수 실행 컨텍스트(Function Execution Context)`가 만들어져서 callstack에 들어간다.

</br></br>

## 4. dynamic binding
함수가 호출되는 상황은 크게 4가지가 있다.
1. 함수 호출: 함수를 직접 호출
    - myFunc()
2. 메서드 호출: 객체의 메서드 호출
    - o.method()
3. 생성자 호출: 생성자 함수 호출
    - ```js
      function Person() {
        this.name = 'abc';
      }

      const p = new Person();
      ```
4. 간접 호출: call, apply, bind 등 function 객체의 메서드로 함수를 간접 호출
    - f.call(null, a)
5. 그 외 콜백 함수의 호출이 있다.
    - 콜백함수는 특정 동작 이후 불려지는 함수이다.
    - 보통 다른 함수의 인자로 보내지는 함수를 의미한다.

이렇듯 함수는 다양한 상황(환경)에서 호출될 수 있다. 함수의 호출 환경에 따라 this는 동적으로 세팅된다.

이렇게 this가 환경에 따라 바뀌는 것을 *동적 바인딩(dynamic binding)* 이라 한다.

</br></br>

## 5. 화살표함수와 일반 함수의 this
- 화살표 함수의 this: 호출된 함수를 둘러싼 실행 컨텍스트를 가리킨다. 함수가 호출될 떄의 환경, 즉, 화살표 함수가 선언될 때의 this값을 가리키게 된다.
    - bind, call 등을 이용해서 this를 바꾸려고 해도 바뀌지 않는다.
    - setTimeout 등 this가 바뀌는 상황에서 유용하다.
- 일반 함수의 this: 새롭게 생성된 실행 컨텍스트를 가리킨다.