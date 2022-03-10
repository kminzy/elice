import "./App.css";
const themeDefault = {
  border: "10px solid blue",
  color: "red",
};

function App() {
  return (
    <div style={{ border: themeDefault.border }}>
      <h1>Root</h1>
      <Child1 border={themeDefault.border} />
    </div>
  );
}

function Child1(props) {
  return (
    <div style={{ border: props.border }}>
      <h1>1</h1>
      <Child2 border={props.border} />
    </div>
  );
}

function Child2(props) {
  return (
    <div style={{ border: props.border }}>
      <h1>2</h1>
      <Child3 border={props.border} />
    </div>
  );
}

function Child3(props) {
  return (
    <div style={{ border: props.border }}>
      <h1>3</h1>
    </div>
  );
}

export default App;
