import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { App } from "./App";
import { StyledReset } from "./styles/reset";
import { StyledRoot } from "./styles/root";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer
      autoClose={1500}
      theme={"dark"}
    />
    <StyledReset />
    <StyledRoot />
  </React.StrictMode>
);
