import axios from "axios";
import { useState, useEffect } from "react";

function RegisterForm() {
  const [user, setUser] = useState({
    id: "",
    pw: "",
  }); // state => setState 할 때 덮어씌우게 되므로 얕은 복사를 해줘야 한다.

  useEffect(() => {
    console.log(user);
  }, [user]); // user라는 변수가 실제로 변할 때마다 동작

  // React => CSR => SPA => 페이지 변환이 일어나면 안된다.
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://elice-api-test.herokuapp.com/register", user)
      .then((response) => {
        const { status, message, token } = response.data;
        if (status === "succ") {
          alert("회원가입 성공");
        } else {
          alert(message);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="회원가입" />
    </form>
  );
}

function RegisterPage() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
