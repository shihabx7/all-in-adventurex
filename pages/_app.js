import "../styles/globals.css";
import "../styles/aia-v2.css";
import "../styles/aia-res.css";
import { fetchLocationListData } from "../lib/dataFatcher/locationDataFetcher";
import { SiteDataProvider } from "../contexts/SiteDataContext";
import ModalMenu from "../comps/v2/layouts/layoutComps/ModalMenu";


function MyApp({ Component, pageProps, locationListData }) {
  return (
    <SiteDataProvider allLocationList={locationListData}>
      <ModalMenu/>
      <Component {...pageProps} />
    </SiteDataProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  try {
    // Fetch location data  to stor in context
    const locationListData = await fetchLocationListData();
    //console.log("store location data in context");
    //console.log(locationListData);
    return {
      locationListData,
      pageProps: {},
    };
  } catch (error) {
    console.error("Failed to load initial location data:", error);
    return {
      locationListData: [],
      pageProps: {},
    };
  }
};

export default MyApp;
