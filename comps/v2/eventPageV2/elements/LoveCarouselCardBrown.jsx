export default function LoveCarouselCardBrown({ item }) {
  return (
    <div className="love-carousel-card bg-[#EBDBB2] h-full flex flex-col space-y-8 rounded-[16px] p-3 xl:p-5 overflow-hidden -rotate-2">
      <div className="rev-txt">
        <img
          className="max-w-[120px]"
          src={"/assets/event-page-v2/five-star-rating-icon.svg"}
        ></img>
        <p className="lg:text-sm xl:text-base text-[#374151] mt-5">
          {item.review}
        </p>
      </div>
      <div className="rev-author">
        <p className="text-sm text-[#374151] ">{item.authorName}</p>
        <p className="text-sm text-[#494949] mt-1">{item.city}</p>
      </div>
    </div>
  );
}
