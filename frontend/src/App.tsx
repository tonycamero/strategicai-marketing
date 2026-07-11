import React from "react";
import { Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import { routes } from "./routes";

function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
