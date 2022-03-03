import { useEffect } from "react";

export function Comp() {
  useEffect(() => {
    console.log("First child mount");

    return () => {
      // 언마운트 시점
      console.log("First child has unmount...");
    };
  }, []);
  return <h1>First Comp</h1>;
}

export function Comp2() {
  useEffect(() => {
    console.log("Second child mount");

    return () => {
      // 언마운트 시점
      console.log("Second child has unmount...");
    };
  }, []);
  return <h1>Second Comp</h1>;
}
