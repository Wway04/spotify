import PAGES from "../pages";

const publicRoutes = [
  { path: process.env.REACT_APP_HOME, component: PAGES.home, mainLayout: true },
  { path: process.env.REACT_APP_SEARCH, component: PAGES.search, mainLayout: false },
  { path: process.env.REACT_APP_AUDIO, component: PAGES.audio, mainLayout: true },
  { path: process.env.REACT_APP_LOGIN, component: PAGES.login, mainLayout: false },
  { path: process.env.REACT_APP_REGISTER, component: PAGES.register, mainLayout: false },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
