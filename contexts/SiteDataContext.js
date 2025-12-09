import { createContext, useContext, useState, useEffect } from "react";

const SiteDataContext = createContext(undefined);

export const SiteDataProvider = ({
  children,
  allLocationList,
  allEscapeGameList,
  allOtherGameList,
  allEventList,
}) => {
  const [locationList, setLocationList] = useState(allLocationList || []);
  const [escapeGameList, setEscapeGameList] = useState(allEscapeGameList || []);
  const [otherGameList, setOtherGameList] = useState(allOtherGameList || []);
  const [eventList, setEventList] = useState(allEventList || []);
  const [activeLocationSlug, setActiveLocationSlug] = useState(null);
  const [activeGameSlug, setActiveGameSlug] = useState(null);
  const [showModalMenu, setShowModalMenu] = useState(false);
// location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const [activeModalMenuType, setActiveModalMenuType] = useState(null); 

  useEffect(() => {
    setShowModalMenu(false);
    setActiveModalMenuType(null);
    setActiveLocationSlug(null);
    setActiveGameSlug(null);
  }, []);
  const openModalMenu = () => setShowModalMenu(true);
  const closeModalMenu = () => setShowModalMenu(false);
  const setModalGame = (gameSlug) => setActiveGameSlug(gameSlug);
  const setActiveLocation = (locationSlug) =>
    setActiveLocationSlug(locationSlug);
  const setModalMenuType = (menuType) => setActiveModalMenuType(menuType);

  return (
    <SiteDataContext.Provider
      value={{
        locationList,
        showModalMenu,
        activeGameSlug,
        activeModalMenuType,
        setModalGame,
        setModalMenuType,
        openModalMenu,
        closeModalMenu,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

// custom hook for global site data context
export const useSiteData = () => useContext(SiteDataContext);
