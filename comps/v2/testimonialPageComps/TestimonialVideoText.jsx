import { RiExternalLinkLine } from "react-icons/ri";
export default function TestimonialVideoText({
  controls,
  setControls,
  itemIndex,
  reviewData,
}) {
  const shortViewStyle =
    "w-full h-[44%] absolute bottom-0 left-0 rounded-b-[16px] bg-gradient-to-t from-[rgba(0,0,0,0.98)] to-[rgba(0,0,0,0.01)]  transition-all duration-200 ease-out";
  const fullViewStyle =
    "w-full h-full absolute bottom-0 left-0 rounded-[16px] bg-gradient-to-t from-[rgba(0,0,0,0.5)] from-40% via-[rgba(0,0,0,0.7)] via-80% to-[rgba(0,0,0,0.8)] to-10% transition-all duration-350 ease-in";
  const fullContent =
    "h-full flex flex-col justify-between space-y-8 px-4 pt-4 pb-6 rounded-[16px]";
  const shortContent =
    "h-full flex flex-col justify-end space-y-8 px-4 pt-4 pb-6 rounded-[16px]";

  const toggoleText = (e, index) => {
    e.preventDefault();

    if (controls.currentIndex !== index) {
      if (controls.currentVideo !== null && controls.isPlaying) {
        controls.currentVideo.current.pause();
        controls.currentVideo.current.time = 0;
        setControls({
          ...controls,
          currentVideo: null,
          isPlaying: false,
          currentIndex: index,
          isShowFull: true,
        });
      } else {
        setControls({ ...controls, currentIndex: index, isShowFull: true });
      }
    } else {
      if (controls.isShowFull) {
        setControls({ ...controls, isShowFull: false });
      } else {
        setControls({ ...controls, isShowFull: true });
      }
    }
  };
  return (
    <div
      id={"rev-item-" + itemIndex}
      className={
        controls.isShowFull && controls.currentIndex == itemIndex
          ? fullViewStyle
          : shortViewStyle
      }
    >
      <div
        className={
          controls.isShowFull && controls.currentIndex == itemIndex
            ? fullContent
            : shortContent
        }
      >
        <div
          className={
            controls.isShowFull && controls.currentIndex == itemIndex
              ? "grow overflow-y-auto"
              : "content"
          }
        >
          {(!controls.isShowFull || controls.currentIndex !== itemIndex) && (
            <p className="short-text text-[#eeeeee] ">
              {reviewData.shortReview}{" "}
            </p>
          )}
          {controls.isShowFull && controls.currentIndex == itemIndex && (
            <p className="full-text text-[#eeeeee] ">{reviewData.review}</p>
          )}
        </div>
        <div className="testi-meta flex justify-between items-center mt-6">
          <div>
            <button
              id={"rev-item-" + itemIndex}
              onClick={(e) => {
                toggoleText(e, itemIndex);
              }}
              className="hover:bg-[#101010] border-2 rounded border-[#bfbfbf] hover:border-[#e0bf62] text-[#d9d9d9]  hover:text-[#e0bf62] text-sm py-1 px-6"
            >
              {controls.isShowFull && controls.currentIndex == itemIndex
                ? "Close"
                : "Full Review"}
            </button>
          </div>
          {/*
            <div className="ex-link td">
              <a
                className="text-[#d9d9d9] text-sm w-full hover:text-[#e0bf62] flex flex-nowrap justify-end items-center space-x-1"
                href={reviewData.reviewUrl ? reviewData.reviewUrl : "#link"}
              >
                <span>See Originals </span>
                <span>
                  <RiExternalLinkLine />
                </span>
              </a>
            </div>*/}
        </div>
      </div>
    </div>
  );
}
