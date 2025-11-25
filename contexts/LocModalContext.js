// context/ModalContext.js

import { createContext, useContext, useState } from "react";

const LocModalContext = createContext();

export const LocModalProvider = ({ children }) => {
  const [showLocModal, setShowLocModal] = useState(false);
 const [activeModalMenu, setActiveModalMenu] = useState('gift-card');
  const openLocModal = () => setShowLocModal(true);
  const closeLocModal = () => setShowLocModal(false);
  const setModalMenuType=(menuType)=> setActiveModalMenu(menuType);

  return (
    <LocModalContext.Provider
      value={{ showLocModal,activeModalMenu,setModalMenuType, openLocModal, closeLocModal}}
    >
      {children}
    </LocModalContext.Provider>
  );
};

// Custom hook for easy use
export const useLocModal = () => useContext(LocModalContext);
