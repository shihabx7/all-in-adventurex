import Image from "next/image";
export default function ContactInfoCard(props) {
  return (
    <div className="contact-info-card flex flex-col md:flex-row md:justify-between space-y-5 zm:space-y-6 md:space-y-0 md:space-x-2 lg:space-x-3">
      <div className="img-col w-full md:w-[49%] lg:w-[48.5%]">
        <div className="w-full aspect-[8/5] relative">
          <Image
            src={
              props.cardData.mallImage
                ? props.cardData.mallImage.url
                : "/assets/location-v2/card/albany-ny-crossgates-mall.webp"
            }
            alt={
              props.cardData.mallImage
                ? props.cardData.mallImage.alt
                : "/assets/location-v2/card/albany-ny-crossgates-mall.webp"
            }
            width={
              props.cardData.mallImage ? props.cardData.mallImage.width : 1000
            }
            height={
              props.cardData.mallImage ? props.cardData.mallImage.height : 625
            }
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </div>
      </div>
      <div className="img-col w-full md:w-[49%] lg:w-[48.5%]">
        <div className="w-full aspect-[8/5] relative">
          <Image
            src={
              props.cardData.storeImage
                ? props.cardData.storeImage.url
                : "/assets/location-v2/card/albany-ny-crossgates-mall.webp"
            }
            alt={
              props.cardData.storeImage
                ? props.cardData.storeImage.alt
                : "/assets/location-v2/card/albany-ny-crossgates-mall.webp"
            }
            width={
              props.cardData.storeImage ? props.cardData.storeImage.width : 1000
            }
            height={
              props.cardData.storeImage ? props.cardData.storeImage.height : 625
            }
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </div>
      </div>
    </div>
  );
}
