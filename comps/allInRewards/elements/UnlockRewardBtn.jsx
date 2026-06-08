import { useSiteData } from "../../../contexts/SiteDataContext";
export default function UnlockRewardBtn() {
  const { openModalMenu, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType("all-in-rewards");
    openModalMenu();
  };
  return (
    <button
      onClick={(e) => showLocModal()}
      className="block w-full py-3 rounded-full uppercase text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-lg"
    >
      Unlock Your Rewards
    </button>
  );
}
