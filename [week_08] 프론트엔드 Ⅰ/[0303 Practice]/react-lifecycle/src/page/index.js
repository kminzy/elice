import Update from "../components/Update";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styled from "styled-components";

const StyleButton = styled.button`
  background: skyblue;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

function Main() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Update />
      <StyleButton onClick={notify}>Notify!</StyleButton>
      <ToastContainer />
    </div>
  );
}

export default Main;
