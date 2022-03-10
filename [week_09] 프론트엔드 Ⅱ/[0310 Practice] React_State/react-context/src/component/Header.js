import { useState, useContext, useEffect } from "react";
import { textState } from "../atom/textState";
import { useRecoilState } from "recoil";

function Header() {
  // const [search, setSearch] = useState("");

  //const { value, setValue } = useContext(StateContext);

  const [text, setText] = useRecoilState(textState);

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        background: "skyblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        style={{
          height: "30px",
        }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Header;
