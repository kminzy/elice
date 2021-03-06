# 5주차 배운 내용 정리

## key words
`Asynchronous` `AJAX` `JSON` `Promise``Async``Await`

<br><br>

## Promise
### 정리 1
- **Promise는 비동기를 동기처럼 실행되게 하기 위해서 사용한다 ! ! !** (즉, Promise 자체가 비동기를 위해 사용하는 것이 아님)

- 인터넷에서 정보를 가져온다 (시간걸림) 요청 있고 결과 있음 => 프로미스

- Promise는 new Promise로 만든다.

- Promise 함수는 콜백 함수를 입력받는다. (executor)

- 그 콜백 함수는 2개의 파라미터가 있다. (resolve, reject)

- 첫 번째 파라미터는 성공할 때 호출할 함수이다. (resolve)

- 첫 번쨰 파라미터 함수는 return값을 입력받는다. ex) resolve('success');
```js
let timer = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve('success');
  }, 1000);
});

console.log(timer); // Promise{<fulfilled>: 'success'}

timer.then(function(time) {
  console.log('time:' + time); // time:success
});
```
```js
function timer(){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve('success');
    }, 1000);
});
}

timer().then(function(time) {
  console.log('time:' + time); // time:success
});
```

### 정리 2
- fetch는 통신을 하며, 어떤 Resource를 넣어주면 Promise를 리턴한다.

- promise는 `then`을 호출하면 된다.

- then에는 `콜백 함수`를 넣어준다.

- 그 콜백 함수는 이 작업이 `성공`했을 때 호출될 것이다.

- 그 함수의 `첫번째 파라미터`에는 데이터가 들어가 있다.

- then은 `두개의 파라미터`가 있다.

- 첫번째 파라미터는 `성공`할 때 실행될 것이다.

- 두번째 파라미터는 `실패`할 때 실행될 것이다.

- 두번째 함수의 첫번째 파라미터에는 `실패한 이유`가 들어있을 것이다.

![Promise](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTVLRX%2FbtrsRPDbZsu%2FCIgmX6P7Mz3ymA9BELeEVK%2Fimg.png)

- Response 객체

![Promise](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvNJUj%2FbtrsQpLyKeD%2FzfbbWI4vd79r0UJCml7N5k%2Fimg.png)

- .json(): Promise 리턴

```js
fetch('http://localhost:3000/topics/1')
    .then(function (response){
        return response.json();
    })
    .then(function(data) {
        console.log('data:', data);
    });
```

<br>

### fetch가 비동기가 아니라면?
```js
const data = fetch('~~~');
```
데이터가 크다면 끝날 때까지 무한히 기다려야 한다.

JS는 싱글스레드 언어라서 한번에 한가지 일밖에 못하므로, 기다리는동안 프로그램이 죽는다.

따라서 우리는 언제 응답이 올지 보장할 수 없다.

**=> 이러한 현상을 해결하기 위해 비동기를 사용한다!**

이외에도, 서버와의 통신을 하거나 분산되는 일을 할 때 많이 사용한다.

### 비동기를 사용할 때의 문제점

<br>

### Promise 예제
`resolve`가 있어야 끝나는 시점을 **정확히** 알 수 있다.

```js
function promiseTest() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello"), 2000);
  })
}
console.log("1");
promiseTest().then((data) => console.log(data));
console.log("2");
```
결과: 1 -> 2 -> (2초 뒤) Hello 

=> setTimeout에 의해 2초뒤에 Hello값이 생성되고, 이 작업이 완료된 후에 then 안의 console.log 작업이 실행된다.

```js
function promiseTest(num) {
  return new Promise((resolve, reject) => {
    if (num === 5) resolve("Success");
    else reject("Fail");
  });
}

promiseTest(5).then(v => console.log(v)); // Success
promiseTest(10).then(v => console.log(v)).catch((v2) => console.log(v2)); // Fail, reject는 catch메서드 안의 콜백함수를 실행 => 예외처리 가능!
```

<br><br>

## async / await
.then 과 await는 같은 기능을 하는데, 가독성을 높이기 위해 await를 쓰는 것!
async 내부에서 promise 결과를 처리할때만 await를 사용
```js
async function run() { // async 함수는 Promise를 리턴한다.
    console.time('timer');
    let time = await timer(1000); // await 뒤의 함수가 끝날 때까지 기다려라 -> 리턴값을 time에 넣어준다.
    console.log('time:' + time);
    time = await timer(time + 1000);
    console.log('time:' + time);
    time = await timer(time + 1000);
    console.log('time:' + time);
    console.timeEnd('timer');
  }

console.log('start');
run(); // 비동기 처리 되므로, 마지막에 실행된다.
console.log('end');
```