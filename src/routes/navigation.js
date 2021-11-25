import React from 'react';
import {Home} from "./../pages/home/home";
import {About} from "./../pages/about/about";
import {Users} from "./../pages/users/users";

export const routes = {
  auth: [{ path: "/about", component: About, exact: true }],
    public: [
      { path: "/users", component: Users, exact: true },
      { path: "/", component: Home, exact: true }
    ],
    
    unAuth: [],
  };