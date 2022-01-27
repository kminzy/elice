const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const B = A.map((el) => el * 2);

console.log(A);
console.log(B);

const C = A.map((v, i) => {
  if (i % 2 == 0) return v * 2;
  else return v;
  console.log(v, i); // v = 배열의 값, i = 배열의 인덱스,
});

console.log(C);

let D = [[1,2,3], [4,5,6], [7,8,9]]; // 2차원 배열의 형태일 때
// let E = D.map(v => v); // 얕은 복사, D값 변경되면 E값도 변경된다
let E = D.map(v => v.map(w => w)); // 깊은 복사, D값 변경되어도 E값은 변동없다
D[0][0] =10;
console.log(D);
console.log(E);

let F = ['1','2','3','4','5','6','7','8','9','10'];
console.log(F.map(el => parseInt(el)));

let G = ['Elice', 'Timer', 'A', 'B'];
console.log(G.map((v, i) => {
  return {
    name: v,
    idx: i,
  }
})); // 각 요소들을 별도의 key를 달아서 객체 형태로 반환하게 된다.

// map과 forEach의 차이는, forEach는 아무것도 리턴하지 않는다. 단지 Array 요소를 '호출'할 뿐.
// map은 기존의 배열을 이용해서 새로운 array를 생성한다.

let H = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(H.filter(v => v % 2 == 0)); // filter 또한 map 처럼 조건에 맞춰 새로운 array를 '반환'한다.

let I = ['Elice', 'Timer', 'A', 'B', 'C', 'D'];
console.log(I.filter(v => v !== 'A')); // filter를 이용한 특정 요소 삭제 가능

let J = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(J.reduce((a, b) => a + b, 10)); // reduce는 무조건 2개의 인자를 가져와서 수행. 10은 초기값, 즉 10+(1+2+3+...+10)이 된다.

let K = "Hello, world";
console.log(K.split(",").map(v => v + "!!!")); // 문자열을 , 기준으로 나눈 후 각 요소에 변경사항을 준다.

let str = "<h1>안녕하세요</h1><div>반갑습니다</div>";
console.log(str.split('</h1>'));
console.log(str.split('</h1>').map((tag, i) => {
  if (i == 0) return tag.split(">")[1];
  else return tag.split(">")[1].split("<")[0];
}));