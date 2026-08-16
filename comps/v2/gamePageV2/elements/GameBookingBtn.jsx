const GameBookingBtn = ({ btnType = "slim", btnLabel }) => {
  const retBtn =
    "game-booking-btn-v2 block w-full  text-center text-slate-50 hover:text-white bg-red-600 hover:bg-red-700 rounded-full font-semibold uppercase transition-all duration-300 ease-in-out ";
  const btnFat =
    "fat py-3 xl:py-4 px-6 text-[1.05rem] rm:text-[1.1rem] zm:text-[1.15rem] md:text-lg xl:text-[1.25rem] 3xl:text-[1.4rem]";
  const btnSlim =
    "slim py-2.5 xl:py-3 px-5 text-[1rem] rm:text-[1.05rem] zm:text-[1.1rem] md:text-lg xl:text-[1.15rem] 3xl:text-[1.2rem]";
  return (
    <button className={btnType === "fat" ? retBtn + btnFat : retBtn + btnSlim}>
      {btnLabel ? btnLabel : "BOOK THIS GAME"}
    </button>
  );
};
export default GameBookingBtn;
