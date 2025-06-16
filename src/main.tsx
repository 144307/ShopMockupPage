import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { store } from "./store.ts";
import { Provider } from "react-redux";
// import { StrictMode } from "react";
import { BrowserRouter } from "react-router";

import "./styles/reset.css";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);
