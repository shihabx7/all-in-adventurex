const StoreContactMap = (props) => {
  return (
    <div className="emb-map w-full  h-[400px] md:h-[440px] lg:h-[540px]">
      <LocationMap mapInfo={props.mapInfo} />
    </div>
  );
};
