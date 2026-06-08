export default function LoveCarouselCardDark({ item }) {
  return (
    <div className="love-carousel-card-dk bg-[#423109] h-full flex flex-col space-y-8 rounded-[16px] p-3 xl:p-5 overflow-hidden rotate-2">
      <div className="rev-txt">
        <img
          className="max-w-[120px]"
          src={"/assets/event-page-v2/five-star-rating-icon.svg"}
        ></img>
        <p className="lg:text-sm xl:text-base text-[#ebebeb] mt-5">
          {item.review}
        </p>
      </div>
      <div className="rev-author">
        <p className="text-sm text-[#CCCCCC] ">{item.authorName}</p>
        <p className="text-sm text-[#9C9C9C] mt-1">{item.city}</p>
      </div>
    </div>
  );
}
