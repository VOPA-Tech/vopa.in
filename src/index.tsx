import React from "react";
import ReactDOM from "react-dom/client";
import "./StoryBlockConfig/storyBlockConfig";
import "./i18n";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<App />);

// Optional: For performance monitoring
reportWebVitals();
