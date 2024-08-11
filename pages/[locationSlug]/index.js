import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  const { locationSlug } = router.query; // Access the dynamic route parameter

  useEffect(() => {
    if (locationSlug) {
      const targetUrl = `/locations/${locationSlug}`;
      router.push(targetUrl);
      // router.replace(targetUrl);
    }
  }, [locationSlug, router]);

  return <div className="w-screen h-screen bg-[#000000]"></div>; // No need to render anything since we're redirecting
};

export default IndexPage;
