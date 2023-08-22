"use client";

import { createContext, useContext, useState } from "react";

let GlobalContext = createContext();

const Context = ({ children }) => {
  let [searchResult, setSearchResult] = useState([]);

  const contextValue = { searchResult, setSearchResult };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

const CustomContext = () => {
  return useContext(GlobalContext);
};

export default Context;
export { CustomContext };
