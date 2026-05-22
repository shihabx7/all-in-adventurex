import { useSiteData } from "../../../contexts/SiteDataContext";
export default function UnlockRewardNavBtn() {
  const { openModalMenu, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |all-in-rewards | bundle
  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType("all-in-rewards");
    openModalMenu();
  };
  return (
    <button
      onClick={(e) => showLocModal()}
      className="bg-red-600 hover:bg-red-700 uppercase text-[15px] rm:text-base md:text-lg cursor-pointer rounded font-medium text-white w-full lg:w-auto py-2 md:py-3 md:px-8 border border-red-600 hover:border-red-700 transition duration-300"
    >
      Unlock Your Rewards
    </button>
  );
}
