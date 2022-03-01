import "./App.css";

function HeaderTag() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>WELCOME</h2>
      Hello, React!!!
    </article>
  );
}

function App() {
  return (
    <div>
      <HeaderTag></HeaderTag>
      <Nav />
      <Article />
    </div>
  );
}

export default App;
