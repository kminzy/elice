import "./App.css";

function Nav(props) {
  console.log(props);
  let lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={"/read/" + t.id}>{t.title}</a>
      </li>
    );
    // 목록을 반복문으로 동적으로 생성할 때, 목록의 가장 바깥쪽 태그에 key값이라는 prop을 만들어주도록 약속되어 있다.
    //그 목록 내에서 유일하게 식별할 수 있는 식별자를 사용하면 된다.
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
}

function HeaderTag({ title, onChangeMode }) {
  function clickHandler(event) {
    event.preventDefault();
    onChangeMode();
  }
  return (
    <header>
      <h1>
        <a href="/" onClick={clickHandler}>
          {title}
        </a>
      </h1>
    </header>
  );
}

function App() {
  let topics = [
    {
      id: 1,
      title: "html",
      body: "html is...",
    },
    {
      id: 2,
      title: "css",
      body: "css is...",
    },
    {
      id: 3,
      title: "js",
      body: "js is...",
    },
  ];
  function onChangeModeHeader() {
    console.log("본문아 홈페이지로 바뀌어라!");
  }
  return (
    <div>
      <HeaderTag title="React" onChangeMode={onChangeModeHeader}></HeaderTag>
      <Nav topics={topics} onChangeMode="" />
      <Article title="Welcome" body="Hello, React 🎉" />
    </div>
  );
}

export default App;
