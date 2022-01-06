import React from "react";
import { SessionStore } from "store/session.store";
import { setSession } from "utils/helper";

export const store = {
  session: new SessionStore(),
  // pages: {

  // },

  constructor() {
    setSession(this.session);
  },
};

export type StoreType = typeof store;
export const StoreContext = React.createContext({} as StoreType);
export const useStoreContext = () => React.useContext(StoreContext);
