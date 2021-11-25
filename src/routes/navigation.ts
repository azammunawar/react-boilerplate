import React from "react";
import { Home } from "pages/home/home";
import { About } from "pages/about/about";
import { Users } from "pages/users/users";
interface routes {
  path: string;
  component: any;
  exact: boolean;
  isPublic?: boolean;
}
const routes: Array<routes> = [
  { path: "/about", component: About, exact: true },
  { path: "/users", component: Users, exact: true, isPublic: true },
  { path: "/", component: Home, exact: true, isPublic: true },
];
export default routes;
