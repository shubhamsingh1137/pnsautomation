import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { routes } from "./Routes/Index";
import Layout from "./Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {routes.map((route) => {
        if (route.children) {
          // Parent route with children (like Dashboard)
          return (
            <Route key={route.id} path={route.path} element={route.element}>
              {route.children.map((child) => (
                <Route
                  key={child.id}
                  path={child.path}
                  element={child.element}
                />
              ))}
            </Route>
          );
        } else {
          // Regular route (Layout or no Layout)
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                route.Layout ? <Layout>{route.element}</Layout> : route.element
              }
            />
          );
        }
      })}
    </Routes>
  );
}

export default App;
