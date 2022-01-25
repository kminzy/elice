const content = "Welcome!";
const text = document.querySelector(".welcome");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
setInterval(typing, 300)

const fav_image = document.querySelectorAll('.fav_image');

fav_image.forEach((fav) => fav.addEventListener('mouseover', hoverEvent));
fav_image.forEach((fav) => fav.addEventListener('mouseout', hoveroutEvent));

function hoverEvent() {
  this.querySelector('.fav_image > img').classList.add('hovered_img');
  this.querySelector('.img_title').classList.add('hovered_front');
}

function hoveroutEvent() {
  this.querySelector('.fav_image > img').classList.remove('hovered_img');
  this.querySelector('.img_title').classList.remove('hovered_front');
}

const color_input = document.querySelector('.color_input');
const section = document.querySelectorAll('.section');
const section6_mid = document.querySelector('.section6_mid');

color_input.addEventListener('change', (e) => {
  section.forEach((s) => s.style.setProperty("background", `#${e.target.value}`));
  section6_mid.innerHTML = `<span>입력하신 색상 코드는 #${e.target.value} 입니다.</span>`;
});

const reset_btn = document.querySelector('.reset_btn');

reset_btn.addEventListener('click', () => {
  section.forEach((s) => s.style.setProperty("background", `#ffecb3`));
  section6_img.src = "2.png";
  section6_bubble.innerHTML = `<input type="text" class="name_input" placeholder="방문자님, 당신의 이름은 무엇인가요?">`;
  section6_mid.innerHTML = `<input type="text" class="color_input" placeholder="원하는 색상코드 여섯자리를 입력해보세요! 예) e9e9e9">`;
});

const name_input = document.querySelector('.name_input');
const section6_img = document.querySelector('.section6_img');
const section6_bubble = document.querySelector('.section6_bubble');

name_input.addEventListener('change', (e) => {
  section6_img.src = "3.png";
  section6_bubble.innerHTML = `
  <span>안녕하세요, ${e.target.value} 님!
  <br>
  아래의 입력칸을 통해 제 홈페이지 색을 변경해보세요 🎨
  </span>`;
});
