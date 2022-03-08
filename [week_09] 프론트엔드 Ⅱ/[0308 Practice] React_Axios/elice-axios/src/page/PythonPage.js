import React, { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";
import axios from "axios";

const initCode = `print("Hello world")`;

function PythonPage() {
  const [code, setCode] = useState(initCode);

  const [result, setResult] = useState("실행 결과");

  useEffect(() => {
    console.log(code);
  }, [code]);

  const handleRun = async () => {
    setResult("실행중...");

    const response = await axios.post(
      "https://elice-api-test.herokuapp.com/python",
      {
        code: code,
      },
      {
        headers: { "x-api-key": localStorage["auth"] },
      }
    );
    const { message, status } = response.data;
    if (status === "fail") setResult(message);
    else setResult(message.join("\n"));
  };

  return (
    <div>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.python)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
      <button onClick={handleRun}>실행</button>
      <textarea
        value={result}
        disabled
        style={{ width: "100%", height: "300px" }}
      ></textarea>
    </div>
  );
}

export default PythonPage;
