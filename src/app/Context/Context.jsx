"use client";

import { createContext, useContext, useState } from "react";

let GlobalContext = createContext();

const Context = ({ children }) => {
  let [searchResult, setSearchResult] = useState([]);
  let [loading, setLoading] = useState(false);

  const contextValue = { searchResult, setSearchResult, loading, setLoading };

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
