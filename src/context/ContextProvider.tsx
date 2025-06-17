/**
 * ========================================================================
 * Jugrafiya GeoTemplate - [ContextProvider]
 *
 * Author: Jugrafiya (https://jugrafiya.com)
 * Developed By: Aneeqa Abrar
 * All rights reserved.
 *
 * Description: Manages shared state for the widget using React Context API.
 * Notes: Provides state and dispatch methods to all child components.
 * ========================================================================
 */

import React, { createContext, useState } from "react";

const MyContext = createContext<any>(null);

const ContextProvider = ({ children }) => {
  // Add global states
  const [state1, setState1] = useState<string>("");
  const [state2, setState2] = useState<number>(0);

  const contextValue = {
    state1,
    setState1,
    state2,
    setState2,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;
