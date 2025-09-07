// context/ModalContext.js

import { createContext, useContext, useState } from "react";

const LocModalContext = createContext();

export const LocModalProvider = ({ children }) => {
  const [showLocModal, setShowLocModal] = useState(false);

  const openLocModal = () => setShowLocModal(true);
  const closeLocModal = () => setShowLocModal(false);

  return (
    <LocModalContext.Provider
      value={{ showLocModal, openLocModal, closeLocModal }}
    >
      {children}
    </LocModalContext.Provider>
  );
};

// Custom hook for easy use
export const useLocModal = () => useContext(LocModalContext);
