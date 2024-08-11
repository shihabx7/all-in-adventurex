import { useState, useEffect } from "react";

const LocationMap = ({ mapInfo }) => {
  const mapUrl =
    mapInfo.apiUrl +
    mapInfo.apiKey +
    "&center=" +
    mapInfo.latitude +
    "," +
    mapInfo.longitude +
    "&zoom=12&q=place_id:" +
    mapInfo.googlePlaceId;

  return (
    <div className="w-full h-full">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
      ></iframe>
    </div>
  );
};

export default LocationMap;
