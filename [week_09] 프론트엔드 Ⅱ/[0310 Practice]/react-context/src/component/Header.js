import { useState, useContext, useEffect } from "react";
import { StateContext } from "../App";

function Header() {
  // const [search, setSearch] = useState("");

  const { value, setValue } = useContext(StateContext);

  useEffect(() => {
    console.log(value);
  }, [value]);

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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Header;
