const UnlimitedEscapeRoomHero = (props) => {
  return (
    <div className="uer-hero  bg-black relative py-16 md:py-20 xl:py-24 3xl:py-28 px-1 overflow-hidden">
      <div className="uer-h-container max-w-7xl mx-auto ">
        <div className="uer-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center">
          <div className="uer-col w-full lg:w-1/2 order-2 lg:order-1 mt-10 md:mt-12 lg:mt-0 px-3 md:px-8 lg:px-0">
            {/* ==================section title=====================*/}
            <p className="text-[#ffffff] font-os text-[14px] rm:text-[15px] md:text-[18px] 3xl:text-[20px] font-semibold">
              MEMBERSHIP: UNLIMITED PLAY PASS
            </p>
            <h1
              className="text-[#CA9342] md:max-w-[620px]  font-bold font-os  text-2xl rm:text-[25px] sm:text-[36px] md:text-[40px] lg:text-[42px]  font-os outline-tile "
              style={{ lineHeight: 1.2 }}
            >
              PLAY UNLIMITED ESCAPE ROOMS FOR{" "}
              <span className="text-red uer-grad">JUST $79 </span>PER PERSON
            </h1>
            <p className="text-[#CA9342] text-[13px] rm:text-[14px] md:text-[15px] xl:texxt-[16px] 3xl:text-[17px] font-medium mt-1 md:mt-0">
              — VALID FOR AN ENTIRE YEAR!
            </p>

            <div className="text-slate-100 md:text-lg mt-4 md:mt-6 xl:text-lg xl:max-w-[530px]">
              Experience 9 thrilling escape room themes at our All In Adventures
              location in Albany, NY! Normally, each game is $32.99 per person,
              which totals $296.91 for all 9 games. But with our Unlimited Play
              Pass,{" "}
              <span className="text-[#CA9342]">
                you save an incredible $217.91!
              </span>
            </div>

            {/* ==================button=====================*/}
            <div className="uer-h-btn  mt-6 md:mt-6 2xl:mt-8">
              <button className=" px-5 rm:px-6 md:px-8 text-center border inline-block text-[15px] rm:text-[16px] lg:text-[18px] text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700">
                Get Your Unlimited Play Pass Today!
              </button>
            </div>
          </div>
          <div className="uer-col w-full lg:w-1/2 order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center relative">
              <img
                className="w-full"
                alt={"Unlimited escape room"}
                src={
                  "/assets/unlimited-escape-room/allinadventure-unlimited-escape-room-hero.png"
                }
              ></img>
              <div className="uer-timer w-[260px] h-[80px] md:w-[300px]  md:h-[100px] absolute left-0 right-0  bottom-[-40px] md:bottom-[-50px] mx-auto">
                <div className="uer-timer-box  px-2 pt-3 md:pt-4 pb-2 xl:pt-5 rounded-[10px] border border-1 border-[#453A23] bg-[#161616] relative">
                  <div className="text-red-600 uer-grad2  absolute top-[-16px] md:top-[-18px] xl:top-[-21px] left-0 right-0 mx-auto font-os text-[18px] md:text-[22px] xl:text-[24px] font-bold">
                    TIME LEFT
                  </div>
                  <div className="uer-timer-content w-full h-full flex justify-evenly items-center">
                    <div className="uer-timer-unit w-1/3">
                      {/* Hours */}
                      <div className="uer-timer-unit-h mx-auto bg-[#000000] border border-1 border-[#453A23] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[10px] flex justify-center items-center font-bold  text-[#CA9342] text-[20px] rm:text-[22px] md:text-[28px]">
                        22
                      </div>
                      <p className="text-[10px] rm:text-[11px] md:text-[14px] text-[#D1B06F] mt-1 text-center">
                        HOUR
                      </p>
                    </div>
                    <div className="uer-timer-unit w-1/3">
                      {/* MUNITES */}
                      <div className="uer-timer-unit-h mx-auto bg-[#000000]  border border-1 border-[#453A23] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[10px] flex justify-center items-center font-bold  text-[#CA9342] text-[20px] rm:text-[22px] md:text-[28px]">
                        16
                      </div>
                      <p className="text-[10px] rm:text-[11px] md:text-[14px] text-[#D1B06F] mt-1 text-center">
                        MUNITES
                      </p>
                    </div>
                    <div className="uer-timer-unit w-1/3">
                      {/* seconds */}
                      <div className="uer-timer-unit-h mx-auto bg-[#000000]  border border-1 border-[#453A23] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[10px] flex justify-center items-center font-bold  text-[#CA9342] text-[20px] rm:text-[22px] md:text-[28px]">
                        41
                      </div>
                      <p className="text-[10px] rm:text-[11px] md:text-[14px] text-[#D1B06F] mt-1 text-center">
                        SECEONDS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnlimitedEscapeRoomHero;
