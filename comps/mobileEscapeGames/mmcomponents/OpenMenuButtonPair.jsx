export default function OpenMenuButtonPair({
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
}) {
  // ========================show modal menu containg all location booking links
  const showEventBookingMenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(true);
    setShowMobileEecapeMenu(true);
  };
  const showMobileMysteryBookingMenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(false);
    setShowMobileEecapeMenu(true);
  };

  // ========================show modal menu containg all location booking links

  return (
    <>
      <button
        onClick={() => showMobileMysteryBookingMenu()}
        className="w-[288px] xm:w-[316px] sm:w-[330px]  md:w-[220px] lg:w-[234px] px-3 md:px-6 py-[12px] md:py-3  block text-white border-2 border-red-600 hover:border-red-700 rounded-full text-center font-semibold md:text-lg bg-red-600 hover:bg-red-700"
      >
        BOOK NOW
      </button>
      <button
        onClick={(e) => showEventBookingMenu(e)}
        className="w-[288px] xm:w-[316px] sm:w-[330px] md:w-[220px] lg:w-[234px] px-3 md:px-6 py-[12px] md:py-3 text-center  block text-white border-2 border-red-600 hover:border-red-700  rounded-full font-semibold md:text-lg bg-transparent hover:bg-red-700 "
      >
        GET A QUOTE
      </button>
    </>
  );
}
