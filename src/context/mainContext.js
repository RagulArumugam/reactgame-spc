import React, { createContext, useEffect, useState } from "react";

export const mainContext = createContext({});
const MainContextProvider = ({ children }) => {
  const [score, setscore] = useState(0);
  const [option, setOption] = useState(0);
  const [coption, setCOption] = useState("");
  const flag = ["cisor", "paper", "stone"];

  useEffect(() => {
    setOption(Math.floor(Math.random() * flag.length + 1));
  }, [option]);

  return (
    <mainContext.Provider value={{ score, setscore, option, setOption }}>
      {children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
