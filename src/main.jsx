import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./Context/ThemeContext";
import { ModalProvider } from "./context/ModalContext";
import { PinProvider } from "./context/PinContext";
import { BrowserRouter } from "react-router-dom";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ModalProvider>
          <PinProvider>
            <App />
          </PinProvider>
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
