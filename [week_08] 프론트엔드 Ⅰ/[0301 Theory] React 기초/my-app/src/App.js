import "./App.css";
import { useState } from "react";

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

function Nav(props) {
  function clickHandler(event) {
    event.preventDefault();
    props.onChangeMode(event.target.id);
  }
  let lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={"/read/" + t.id} id={t.id} onClick={clickHandler}>
          {t.title}
        </a>
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

function App() {
  console.log("APP render");
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
  // let mode = "WELCOME";
  const [mode, setMode] = useState("READ"); // ! READ state를 바꿀 땐 setMode를 쓰고, READ state를 읽을 땐 mode를 쓴다.
  const [id, setId] = useState(null);
  function onChangeModeHeader() {
    setMode("WELCOME");
  }
  function onChangeModeNav(selectedId) {
    setMode("READ");
    setId(selectedId);
  }
  let articleTag = "";
  if (mode === "WELCOME") {
    articleTag = <Article title="Welcome" body="Hello, React 🎉" />;
  } else if (mode === "READ") {
    articleTag = <Article title="READ" body="Hello, READ 📖" />;
  }

  return (
    <div>
      <HeaderTag title="React" onChangeMode={onChangeModeHeader}></HeaderTag>
      <Nav topics={topics} onChangeMode={onChangeModeNav} />
      {articleTag}
    </div>
  );
}

export default App;
