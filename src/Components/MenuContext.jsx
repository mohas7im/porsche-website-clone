import { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);


  const openLeftSlide = () => {
    setIsShowMenu(true);
  };
  const closeLeftSlide = () => {
    setIsShowMenu(false);
  };

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    bodyElement.style.overflowY = isShowMenu ? "hidden" : "auto";

    return () => {
      bodyElement.style.overflowY = "auto";
    };
  }, [isShowMenu]);

  return (
    <MenuContext.Provider
      value={{
        openLeftSlide,
        closeLeftSlide,
        isShowMenu,
        setIsShowMenu,
     
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
