import React, { Component, useContext } from "react";
import { StoreContext } from "store";

const About = () => {
  const {session : {user}} = useContext(StoreContext);
  return <div>about  {user.name}</div>;
};
export default About;
