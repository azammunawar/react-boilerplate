import React, { useEffect } from "react";
import { StoreContext } from "store/index";
import { observer } from "mobx-react";
import { Link, useNavigate } from "react-router-dom";

const Layout: React.FC = observer(() => {
  const {
    session: { isUser },
  } = React.useContext(StoreContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (isUser) {
      navigate("/");
    }
  }, [isUser]);

  return <div>hello</div>;
});

export default Layout;
