import "./App.css";

function HeaderTag({ title }) {
  return (
    <header>
      <h1>
        <a href="/">{title}</a>
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

function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
}

function App() {
  return (
    <div>
      <HeaderTag title="React" body="this is body"></HeaderTag>
      <Nav />
      <Article title="Welcome" body="Hello, React 🎉" />
    </div>
  );
}

export default App;
