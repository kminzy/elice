import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");

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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Header;
