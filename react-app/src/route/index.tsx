import Top from "pages/Top";
import UseState from "pages/Hooks/useState";
import NotFound from "pages/NotFound";

export const ROUTE = [
  { name: "Top", exact: true, path: "/top", display: true, component: Top },
  {
    name: "useState",
    exact: true,
    path: "/useState",
    display: true,
    component: UseState,
  },
  {
    name: "NotFound",
    exact: false,
    path: "",
    display: true,
    component: NotFound,
  },
];
