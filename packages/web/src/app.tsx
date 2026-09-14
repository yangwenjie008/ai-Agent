import { createRoot } from "react-dom/client";
import React from "react";

function App() {
  return (
    <div>
      <h1>AI Agent Web</h1>
      <p>Welcome to the AI Agent web interface.</p>
    </div>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
