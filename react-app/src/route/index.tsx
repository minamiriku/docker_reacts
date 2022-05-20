import Top from "pages/Top";
import UseState from "pages/Hooks/useState";
import UseEffect from "pages/Hooks/useEffect";
import UseContext from "pages/Hooks/useContext";
import Redux from "pages/Redux";
import Recoil from "pages/Recoil";
import ReactHookForm from "pages/ReactHookForm";
import NotFound from "pages/NotFound";

export const ROUTE = [
  { name: "Top", exact: true, path: "/", display: true, component: Top },
  {
    name: "useState",
    exact: true,
    path: "/useState",
    display: true,
    component: UseState,
  },
  {
    name: "useEffect",
    exact: true,
    path: "/useEffect",
    display: true,
    component: UseEffect,
  },
  {
    name: "useContext",
    exact: true,
    path: "/useContext",
    display: true,
    component: UseContext,
  },
  {
    name: "Redux",
    exact: true,
    path: "/redux",
    display: true,
    component: Redux,
  },
  {
    name: "Recoil",
    exact: true,
    path: "/recoil",
    display: true,
    component: Recoil,
  },
  {
    name: "React-Hook-Form",
    exact: true,
    path: "/reactHookForm",
    display: true,
    component: ReactHookForm,
  },
  {
    name: "NotFound",
    exact: false,
    path: "",
    display: true,
    component: NotFound,
  },
];
