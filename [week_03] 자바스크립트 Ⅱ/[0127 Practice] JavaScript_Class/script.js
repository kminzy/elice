// 자바스크립트는 함수, 객체 등의 어떤 형태든 간에 변수 안에 들어갈 수 있다.
// 변수로 선언된 함수를 변경할 수도 있다!
const add = function(a, b) {
  return a + b;
}

let func2 = function func2() {
  console.log('hello world 2');
}

function func1() {
  console.log('hello world 1');
  func2();
}

func2 = function func2() {
  console.log('changed 🤪');
}

// 함수를 인자로 전달 또한 가능하다!
function callbackTest(func) {
  func();
}

callbackTest(() => console.log('hello'));
// func = () => console.log('hello')

// this
function A() {
  // 일반 함수에서의 this는 window
  console.log(this); // window 
}
A();

let opt = {
  name: "Elice",
  test() {
    console.log(this);
  }
}
opt.test(); // {name: 'Elice', test: ƒ} 객체에서의 this는 자기 자신
// +) 클래스에서의 this 또한 자기 자신이다.


let Math2 = {
  PI: 3.14,
  E: 2.71,
  abs(n) {
    return n > 0 ? n : (n * -1);
  }
}
console.log(Math2.E);
console.log(Math2.abs(-5));


// JavaScript 클래스
class Champion {
  constructor(name) {
    this.name = name;
    console.log(`소환사 협곡에 ${this.name}(이)가 등장했습니다.`);
  }
  Q() {
    console.log(`${this.name} 챔피언이 Q 스킬 시전`);
  }
  W() {
    console.log(`${this.name} 챔피언이 W 스킬 시전`);
  }
}
// 이 둘의 this는 서로 다르다! 각각의 this가 생성되었다.
let Ari = new Champion('아리');
let Amumu = new Champion('아무무');
Ari.Q();
Amumu.W();

let date = new Date();

class Time {
  constructor() {
    this.date = new Date();
  }

  getTimeStr() {
    return `${this.date.getHours()}시 ${this.date.getMinutes()}분`;
  }
}

let time = new Time();
console.log(time.getTimeStr());
