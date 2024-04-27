import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import globalStyle from "./style/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Global styles={globalStyle} />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
