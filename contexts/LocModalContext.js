

import { createContext, useContext, useState } from "react";

const LocModalContext = createContext(undefined);


// fetch all location list as an array


export const LocModalProvider =  ({ children,initialLocationData  }) => {
  
  const [showLocModal, setShowLocModal] = useState(false);
  const [activeModalMenu, setActiveModalMenu] = useState("bundle");
  const [locationList, setLocationList] = useState(initialLocationData || []);

  const openLocModal = () => setShowLocModal(true);
  const closeLocModal = () => setShowLocModal(false);
  const setModalMenuType = (menuType) => setActiveModalMenu(menuType);

  return (
    <LocModalContext.Provider
      value={{
        locationList,
        showLocModal,
        activeModalMenu,
        setModalMenuType,
        openLocModal,
        closeLocModal,
      }}
    >
      {children}
    </LocModalContext.Provider>
  );
};

// Custom hook for easy use
export const useLocModal = () => useContext(LocModalContext);
