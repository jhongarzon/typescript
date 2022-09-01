import { LazyPage1 } from "../01-lazyload/pages";
import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}
type JSXComponent = () => JSX.Element;
const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));
// const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
// const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
// const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
