import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import React from "react";



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <App />

  <Toaster
    position="top-right"
    reverseOrder={false}
    toastOptions={{
      duration: 3000,

      style: {
        background: "#0f172a",
        color: "#fff",
        border: "1px solid #3b82f6",
      },

      success: {
        iconTheme: {
          primary: "#22c55e",
          secondary: "#fff",
        },
      },

      error: {
        iconTheme: {
          primary: "#ef4444",
          secondary: "#fff",
        },
      },
    }}
  />
</React.StrictMode>
);
