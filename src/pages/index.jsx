import React from "react";

// just render when it be used
const Home = React.lazy(() => import("./Home"));
const Search = React.lazy(() => import("./Search"));
const Login = React.lazy(() => import("./Auth/Login"));
const Register = React.lazy(() => import("./Auth/Register"));
const Audio = React.lazy(() => import("./Home"));

const PAGES = {
  home: Home,
  login: Login,
  search: Search,
  register: Register,
  audio: Audio,
};

export default PAGES;
