import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ⭐ เพิ่ม
import App from "./App.jsx";

// theme (ตัวแปรสี)
import "./theme/tokens.css";
import "./theme/dark.css";

// layout
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
