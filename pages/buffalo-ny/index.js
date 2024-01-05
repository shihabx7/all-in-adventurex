import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LocationHomeRedirect = () => {
  const router = useRouter();
  const path = router.pathname.split("/");
  console.log(path[1]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    router.push("/locations/" + path[1]);
  }, [isLoaded]);

  return (
    <div>
      <img
        onLoad={() => setIsLoaded(true)}
        src="/assets/allinadventures-escape-room-home-hero.jpg"
      ></img>
    </div>
  );
};

export default LocationHomeRedirect;
