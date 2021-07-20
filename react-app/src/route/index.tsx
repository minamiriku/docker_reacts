import Top from "../pages/Top";
import UseState from "../pages/Hooks/useState";

export const ROUTE = [
  { name: "Top", exact: true, path: "/", display: true, component: Top },
  {
    name: "useState",
    exact: true,
    path: "/useState",
    display: true,
    component: UseState,
  },
];
