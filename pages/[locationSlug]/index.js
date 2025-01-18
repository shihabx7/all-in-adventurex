import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  const { locationSlug } = router.query; // Access the dynamic route parameter

  const redir = async (slug) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ urlSlug: slug, slugType: "location" }),
    };
    const response = await fetch("/api/Chek/urlCheck", requestOptions);
    if (response.status !== 200) {
      router.push("/404");
    }
    console.log(response.status);
    let resData = await response.json();
    if (resData.isLocationSlug) {
      //router.push("/404");
      router.push("/locations/" + locationSlug);
    } else {
      router.push("/404");
    }
  };

  useEffect(() => {
    //await redir(locationSlug);
    router.push("/404");
  });

  return <div className="w-screen h-screen bg-[#000000]"></div>; // No need to render anything since we're redirecting
};

export default IndexPage;
