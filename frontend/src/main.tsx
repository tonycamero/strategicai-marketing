import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Shell from "./components/Shell";
import { routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          {routes.map(r => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
