import React, { lazy } from "react";
import loadable from "@loadable/component";

const Home = loadable(() => import("pages/home/home"));
const About = loadable(() => import("pages/about/about"));
const Users = loadable(() => import("pages/users/users"));

interface routes {
  path: string;
  component: any;
  exact: boolean;
  isPublic?: boolean;
}

const routes: Array<routes> = [
  { path: "/about", component: About, exact: true, isPublic: true },
  { path: "/users", component: Users, exact: true, isPublic: true },
  { path: "/", component: Home, exact: true, isPublic: true },
];
export default routes;
