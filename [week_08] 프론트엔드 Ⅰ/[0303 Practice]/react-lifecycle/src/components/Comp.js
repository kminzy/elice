import { useEffect } from "react";

export function Comp() {
  useEffect(() => {
    console.log("첫째 마운트");

    return () => {
      // 언마운트 시점.
      console.log("첫째 언마운트..");
    };
  }, []);

  return <h1>첫째</h1>;
}
export function Comp2() {
  useEffect(() => {
    console.log("둘째 마운트");

    return () => {
      // 언마운트 시점.
      console.log("둘째 언마운트..");
    };
  }, []);

  return <h1>둘째</h1>;
}
