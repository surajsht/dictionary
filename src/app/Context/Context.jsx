"use client";

import { createContext, useContext } from "react";

let GlobalContext = createContext();

const Context = ({ children }) => {
  return <GlobalContext.Provider> {children} </GlobalContext.Provider>;
};

const CustomContext = () => {
  return useContext(GlobalContext);
};

export default Context;
export { CustomContext };
