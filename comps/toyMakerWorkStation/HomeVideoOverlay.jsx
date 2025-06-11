export default function HomeVideoOverlay() {
  return (
    <div>
      <img
        className="hidden md:block w-full h-full object-cover lg:object-cover object-center"
        src={"/assets/toymakers-workshop/home/home-video-bg-mask.png"}
        alt={"toymaker home section bg"}
      ></img>
      <img
        className=" md:hidden w-full h-full object-cover lg:object-cover object-center"
        src={"/assets/toymakers-workshop/home/home-vid-mask-m.png"}
        alt={"toymaker home section bg"}
      ></img>
    </div>
  );
}
