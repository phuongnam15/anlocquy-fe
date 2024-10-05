"use client";

import { createContext, useContext, useState } from "react";

const menuSemiCircleContext = createContext();

export const MenuSemiCircleContextProvider = ({ children }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <menuSemiCircleContext.Provider value={{ isShowMenu, setIsShowMenu }}>
      {children}
    </menuSemiCircleContext.Provider>
  );
};

export function useMenuSemiCircleContext() {
    return useContext(menuSemiCircleContext);
}

