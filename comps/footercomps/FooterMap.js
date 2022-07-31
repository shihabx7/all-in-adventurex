import { useLoadScript } from "@react-google-maps/api";
import Mapwithinfo from './Mapwithinfo'

export default function FooterMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCYSGDPwfMMqKRb7ApqkuH3d5YsMjLiEiY" // Add your API key
  });

  return isLoaded ? <Mapwithinfo/> : null;
}
