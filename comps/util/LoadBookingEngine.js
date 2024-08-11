import Script from "next/script";

const LoadBookingEngine = () => {
  return (
    <>
      <Script src={process.env.BOOKING_API_URL} />
    </>
  );
};

export default LoadBookingEngine;
