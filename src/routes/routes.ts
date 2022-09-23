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
const ShoppingPage = lazy(
  () => import("../02-component-patterns/pages/ShoppingPage")
);

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
  {
    to: "/shopping",
    path: "shopping",
    Component: ShoppingPage,
    name: "Shopping",
  },
];
