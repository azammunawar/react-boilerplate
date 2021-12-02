import React from "react";
import { SessionStore } from "store/session.store";

export const store = {
    session: new SessionStore(),
    // pages: {
      
    // },
  };
  
  export type StoreType = typeof store;
  export const StoreContext = React.createContext({} as StoreType);
  export const useStoreContext = () => React.useContext(StoreContext);