
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Check if HMR interface is enabled
if (module.hot) {
    // Accept hot update
    module.hot.accept();
  }
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
