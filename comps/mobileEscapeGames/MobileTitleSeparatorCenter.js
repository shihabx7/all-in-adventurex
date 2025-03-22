const MobileTitleSeparatorCenter = (props) => {
  return (
    <div className="sep-title text-center">
      <div className="sep-container inline-block mx-auto">
        <h2
          className={
            props.textColor
              ? "text-[" +
                props.textColor +
                "] pb-2 pt-0 md:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase"
              : "dark-gold pb-2 pt-0 md:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase"
          }
        >
          {props.title}
        </h2>
        
      </div>
    </div>
  );
};
export default MobileTitleSeparatorCenter;
