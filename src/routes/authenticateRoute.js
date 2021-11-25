
import React from 'react';
import {
  Redirect,
  Route,
} from "react-router-dom";
import {About} from "./../pages/about/about";

export function AuthenticRoute({key, path, component }) {
  alert();
  console.log("Component", Component);
    const auth = true;
    return <Route key={key} path={"/about"} component={About} /> 
  }