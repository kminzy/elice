# 5주차 배운 내용 정리

## key words
`Asynchronous` `AJAX` `JSON` `Promise`



## Promise
fetch는 통신을 하며, 어떤 Resource를 넣어주면 Promise를 리턴한다.

promise는 then을 호출하면 된다.

then에는 콜백 함수를 넣어준다.

그 콜백 함수는 이 작업이 성공했을 때 호출될 것이다.

그 함수의 첫번째 파라미터에는 데이터가 들어가 있다.

then은 두개의 파라미터가 있다.

첫번째 파라미터는 성공할 때 실행될 것이다.

두번째 파라미터는 실패할 때 실행될 것이다.

두번째 함수의 첫번째 파라미터에는 실패한 이유가 들어있을 것이다.

![Promise](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTVLRX%2FbtrsRPDbZsu%2FCIgmX6P7Mz3ymA9BELeEVK%2Fimg.png)

Response 객체

![Promise](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvNJUj%2FbtrsQpLyKeD%2FzfbbWI4vd79r0UJCml7N5k%2Fimg.png)

.json(): Promise 리턴

```js
fetch('http://localhost:3000/topics/1')
    .then(function (response){
        return response.json();
    })
    .then(function(data) {
        console.log('data:', data);
    });
```