import React from "react";
import { Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import { routes } from "./routes";

function App() {
  const standaloneRoutes = routes.filter((route) => route.shell === false);
  const shellRoutes = routes.filter((route) => route.shell !== false);

  return (
    <Routes>
      {standaloneRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route element={<Shell />}>
        {shellRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
