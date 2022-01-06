import React, { lazy } from "react";
import loadable from "@loadable/component";
import Home from "pages/home/home";

// const Home = loadable(async () => import("pages/home/home"));
// const Home = React.lazy(() => import("pages/home/home"));
const About = React.lazy(() => import("pages/about/about"));
// const About = loadable(async () => import("pages/about/about"));
const Users = React.lazy(() => import("pages/users/users"));
// const Users = loadable(async () => import("pages/users/users"));

const navigation: Array<routes> = [
  { path: "/about", component: About, exact: true, isPublic: false },
  { path: "/login", component: Users, exact: true, isPublic: true },
  { path: "/", component: Home, exact: true, isPublic: false },
];
export default navigation;
