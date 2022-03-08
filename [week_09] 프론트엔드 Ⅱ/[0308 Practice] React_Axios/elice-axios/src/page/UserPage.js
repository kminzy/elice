import axios from "axios";
import { useState, useEffect } from "react";

// axios.post의 두 번째 인자에는 body
// axios.get은 두 번째 인자에는 바로 header (get요청은 body가 없다.)
function UserPage() {
  const [userData, setUserData] = useState(null);

  const fetch = async () => {
    setUserData(null);
    const response = await axios.get(
      "https://elice-api-test.herokuapp.com/user",
      {
        headers: {
          "x-api-key": localStorage["auth"],
        },
      }
    );
    const { status, user } = response.data;
    if (status === "succ") {
      setUserData(user);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <button onClick={() => fetch()}>새로고침</button>
      {userData === null
        ? "Loading ..."
        : userData.map((v, i) => <p key={"user" + i}>{v}</p>)}
    </div>
  );
}

export default UserPage;
