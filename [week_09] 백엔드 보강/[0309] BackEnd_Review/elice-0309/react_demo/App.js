import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const handleLogin = () => {
    axios
      .post(
        "http://localhost:3001/auth/login",
        {
          username: "elice",
          password: "1234",
        },
        {
          headers: {},
        }
      )
      .then((response) => {
        setToken(response.data.token);
        alert("로그인 성공");
      });
  };

  const handleUser = () => {
    axios
      .get("http://localhost:3001/api/user", {
        headers: {
          "x-api-key": token,
        },
      })
      .then((v) => {
        setData(v.data);
      });
  };

  return (
    <div className="App">
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleUser}>유저</button>

      {data && data.map((v) => <p>{v.username}</p>)}
    </div>
  );
}

export default App;
