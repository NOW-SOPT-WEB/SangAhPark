import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    secondary: "#343a40",
    background: "#FFC0CB",
    text: "#FFFFFF",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>
);
