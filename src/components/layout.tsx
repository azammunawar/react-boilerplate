import React, { useEffect } from "react";
import { StoreContext } from "store/index";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

const Layout: React.FC = observer(() => {
  const {
    session: { isUser },
  } = React.useContext(StoreContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isUser) {
      navigate("/");
    }
  }, [isUser]);

  return <div></div>;
});

export default Layout;
