import axios from "axios";
import { useState, useEffect } from "react";

function LoginForm() {
  const [user, setUser] = useState({
    id: "",
    pw: "",
  }); // state => setState 할 때 덮어씌우게 되므로 얕은 복사를 해줘야 한다.

  const [loginInfo, setLoginInfo] = useState({
    status: "none",
  });

  useEffect(() => {
    console.log(user);
  }, [user]); // user라는 변수가 실제로 변할 때마다 동작

  // React => CSR => SPA => 페이지 변환이 일어나면 안된다.
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://elice-api-test.herokuapp.com/login", user)
      .then((response) => {
        console.log(response.data);
        setLoginInfo(response.data);

        const { status, message, token } = response.data;
        if (status === "succ") {
          alert("로그인 성공");
          localStorage["auth"] = token;
        } else {
          alert(message);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>로그인 상태 : {loginInfo.status}</p>
      <p>메시지 상태 : {loginInfo.message}</p>
      <p>받아온 토큰 값 : {loginInfo.token}</p>
      <label>아이디</label>
      <input
        type="text"
        value={user.id}
        onChange={(e) => {
          setUser({ ...user, id: e.target.value });
        }}
      />
      <label>비밀번호</label>
      <input
        type="password"
        value={user.pw}
        onChange={(e) => {
          setUser({ ...user, pw: e.target.value });
        }}
      />
      <input type="submit" value="로그인" />
    </form>
  );
}

function LoginPage() {
  return <div>{localStorage["auth"] ? "이미 로그인 했음" : <LoginForm />}</div>;
}

export default LoginPage;
