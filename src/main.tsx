import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/global.css";
import "./styles/release-banners.css";
import "./styles/town-theme.css";
import "./styles/footer.css";
import "./styles/typography.css";
import "./styles/hero.css";
import "./styles/features.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
