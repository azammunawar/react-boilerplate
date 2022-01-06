import React from "react";
import { useStoreContext } from "store/index";
import { observer } from "mobx-react";

const About: React.FC = observer(() => {
  const {
    session: { isUser },
  } = useStoreContext();

  return (
    <div>
      <div onClick={() => {}}>
        {/* {isUser ? "ture" : "false"} */}
        about page added now
      </div>
    </div>
  );
});
export default About;
