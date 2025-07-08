import React from "react";
import "./StoryBlockConfig/storyBlockConfig";
import ReactDOM from "react-dom/client"; // 👈 Updated import
import "./i18n";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ✅ Create root for React 18/19
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // Optional: Remove <React.StrictMode> if causing issues in third-party libraries

  <App />
);

// If you want to start measuring performance in your app
reportWebVitals();
