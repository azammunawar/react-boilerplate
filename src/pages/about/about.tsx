import React, { Component, useContext, useEffect } from "react";
import { useStoreContext } from "store";
import { observer } from "mobx-react";

const About: React.FC = observer(() => {
  const {
    session: { isUser, updateUser },
  } = useStoreContext();

  return (
    <div>
      <div
        onClick={() => {
          updateUser();
        }}
      >
        {isUser ? "ture" : "false"}
        about page added now
      </div>
    </div>
  );
});
export default About;
