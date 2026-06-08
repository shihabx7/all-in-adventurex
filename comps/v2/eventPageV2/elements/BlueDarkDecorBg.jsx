export default function BlueDarkDecorBg() {
  return (
    <div className="party-bg-decor w-full h-full relative overflow-hidden">
      {/*=============================================================================bloon*/}
      <div className="max-w-[260px] absolute top-0 left-0">
        <img
          className="max-w-full "
          src="/assets/event-page-v2/baloon-blue.png"
          alt="checkout party packages baloon"
        ></img>
      </div>
      {/*=============================================================================fastive*/}
      <div className="max-w-[340px] absolute top-0 right-0">
        <img
          className="max-w-full "
          src="/assets/event-page-v2/fastive-decor-blue.png"
          alt="checkout party packages baloon"
        ></img>
      </div>
      {/*=============================================================================birthday-gift-blue*/}
      <div className="max-w-[330px] absolute bottom-0 left-0">
        <img
          className="max-w-full "
          src="/assets/event-page-v2/birthday-gift-blue.png"
          alt="checkout party packages baloon"
        ></img>
      </div>
      {/*=============================================================================cake-outline-blue*/}
      <div className="max-w-[220px] absolute bottom-0 right-0">
        <img
          className="max-w-full rotate-[10deg]"
          src="/assets/event-page-v2/cake-outline-blue.png"
          alt="checkout party packages baloon"
        ></img>
      </div>
    </div>
  );
}
