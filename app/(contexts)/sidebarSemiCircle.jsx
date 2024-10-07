"use client";

import { createContext, useContext, useState } from "react";

const sidebarSemiCircleContext = createContext();

export const SidebarSemiCircleContextProvider = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <sidebarSemiCircleContext.Provider value={{ isShowSidebar, setIsShowSidebar }}>
      {children}
    </sidebarSemiCircleContext.Provider>
  );
};

export function useSidebarSemiCircleContext() {
    return useContext(sidebarSemiCircleContext);
}

