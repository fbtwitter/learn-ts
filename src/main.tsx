import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InputValueProvider } from "./context/InputContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InputValueProvider>
      <App headerText={"Dicoba apakah bisa"} />
    </InputValueProvider>
  </React.StrictMode>
);
