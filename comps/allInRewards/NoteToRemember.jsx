import NoteBgVideo from "./elements/NoteBgVideo";
export default function NoteToRemember(props) {
  return (
    <div className="note-to-remember-section relative">
      <div className="section-bg-video w-full h-full absolute top-0 left-0">
        <NoteBgVideo />
      </div>
      <div className="section-wrapper relative bg-[#370202]/80 z-20">
        <div className="section-container max-w-7xl mx-auto py-16 md:py-20 lg:py-28 px-4">
          <div className="section-head">
            <h2 className="uppercase text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold  text-center text-[#E0BF62]">
              Important Notes <span className="text-white">to Remember</span>
            </h2>
          </div>
          <div className="content grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-12 lg:mt-16">
            {/*=====================================================================grid item 1 */}
            <div className="item-1 px-5 md:px-6 py-5 md:py-6 lg:py-8">
              <img
                src={
                  "/assets/all-in-rewards/important-note/important-notes-icon-1.svg"
                }
                alt="Important Notes Icon"
              ></img>
              <p className="lg:text-lg xl:text-[1.2rem] text-[#ADADAD] mt-4">
                All In Rewards is non-transferable and requires verified email
                access before all reward use.
              </p>
            </div>
            {/*=====================================================================grid item 2 */}
            <div className="item-2 px-5 md:px-6 py-5 md:py-6 lg:py-8 md:border-x-[1px] border-[#ffffff]/20">
              <img
                src={
                  "/assets/all-in-rewards/important-note/important-notes-icon-2.svg"
                }
                alt="Important Notes Icon"
              ></img>
              <p className="lg:text-lg xl:text-[1.2rem] text-[#ADADAD] mt-4">
                All In Rewards accounts stay active after sign up and will never
                expire for active members.
              </p>
            </div>
            {/*=====================================================================grid item 3 */}
            <div className="item-3 px-5 md:px-6 py-5 md:py-6 lg:py-8">
              <img
                src={
                  "/assets/all-in-rewards/important-note/important-notes-icon-3.svg"
                }
                alt="Important Notes Icon"
              ></img>
              <p className="lg:text-lg xl:text-[1.2rem] text-[#ADADAD] mt-4">
                Memberships work at all 20 locations, but rewards & punches may
                not transfer between stores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
