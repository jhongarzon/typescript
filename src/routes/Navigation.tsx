import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { routes } from "./routes";

import logo from "../assets/react.svg";
import { Suspense } from "react";
export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo}></img>
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
