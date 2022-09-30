import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeLoader from "./components/theme-loader";
import "./index.css";
import { createRoot } from "react-dom/client";
import { store, StateProvider as Provider } from "./store";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <ThemeLoader>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeLoader>
  </React.StrictMode>
);
