import { getLocationsPageData } from "../getLocationsPageData";
import { bookingList } from "./bookingList";
import { getLocationActivitySlugList } from "./getLocationActivitySlugList";
import { getLocationEventSlugList } from "./getLocationEventSlugList";
import { getLocTotal } from "../AllDataList/getLocTotal";
import { getRedeemGames } from "../getLocationHomepageData";

export const getLocationIndGiftPageData = (locationslug) => {
  var locd = locationslug.toString().split("-");
  var locstat = locd[locd.length - 1];
  var locdx = locd.slice(0, -1).join("");

  const eventbook = locdx + ", " + locstat;

  const evbook = bookingList("", locationslug);

  var locsdata = getLocationsPageData().states;
  var locData = getLocationsPageData();
  const totalLocation = () => {
    var total = 0;

    for (var i = 0; i < locsdata.length; i++) {
      total = total + locsdata[i].cities.length;
    }

    return total;
  };
  const getLocSpec = (slug) => {
    var i = 0;
    var j = 0;
    for (i = 0; i < locData.states.length; i++) {
      for (j = 0; j < locData.states[i].cities.length; j++) {
        if (locData.states[i].cities[j].slug == slug) {
          return locData.states[i].cities[j];
        }
      }
    }
  };

  const locnameMod = (locname) => {
    var spLoc = locname.split("-");
    if (spLoc[0] == "n") {
      spLoc[0] = spLoc[0] + ".";
    }
    var st = spLoc[spLoc.length - 1].toString();
    spLoc = spLoc.slice(0, -1);
    spLoc = spLoc.join(" ");

    var ret = spLoc + ", " + st;
    return ret;
  };
  // ===============seo fields
  const capCity = (locname) => {
    var spLoc = locname.split("-");
    if (spLoc[0] == "n" || spLoc[0] == "N") {
      spLoc[0] = "North";
    }
    var st = spLoc[spLoc.length - 1].toString();
    spLoc = spLoc.slice(0, -1);
    var x;

    for (x = 0; x < spLoc.length; x++) {
      var upc = spLoc[x].charAt(0).toUpperCase();
      var nnsp = spLoc[x].substring(0, 0) + upc + spLoc[x].substring(0 + 1);
      spLoc[x] = nnsp;
    }
    spLoc = spLoc.join(" ");

    var ret = spLoc + " " + st.toUpperCase();
    return ret;
  };
  const lowCity = (locname) => {
    var spLoc = locname.split("-");
    if (spLoc[0] == "n" || spLoc[0] == "N") {
      spLoc[0] = "North";
    }

    spLoc = spLoc.join(" ");

    return spLoc;
  };

  const capMall = (mall) => {
    var mallArr = mall.split(" ");
    var appArr = ["to", "at", "in", "for", "of", "it", "a", "an"];

    var y;

    for (y = 0; y < mallArr.length; y++) {
      if (!appArr.includes(mallArr[y]) && mallArr[y] != "USA") {
        if (mallArr[y] == "usa") {
          mallArr[y] == mallArr[y].toUpperCase();
        }
        var upc = mallArr[y].charAt(0).toUpperCase();
        var nnsp =
          mallArr[y].substring(0, 0) + upc + mallArr[y].substring(0 + 1);

        mallArr[y] = nnsp;
      }
    }
    var capmall = mallArr.join(" ");

    return capmall;
  };
  // ===============seo fields end
  const giftcardData = {
    activitylist: getLocTotal(locationslug).activitylistSlug,
    eventlist: getLocTotal(locationslug).eventlistSlug,
    locationlist: getLocTotal(locationslug).locationlist,
    pagemeta: {
      title:
        "All In Adventures Gift Cards in " +
        capCity(locationslug) +
        " - Escape Rooms and More",
      description:
        "Whether it's someone's birthday, anniversary or a holiday such as Christmas - an All In Adventures Gift Card is a perfect present for any occasion.",
      keywords:
        "escape room gift cards, escape room gift card, escape room gift certificate " +
        lowCity(locationslug) +
        ", escape room gift certificates " +
        lowCity(locationslug) +
        ", escape room gift vouchers, escape room gift voucher " +
        lowCity(locationslug) +
        ", all in adventures gift cards " +
        lowCity(locationslug) +
        ", all in adventures gift card " +
        lowCity(locationslug) +
        ", mystery room gift cards, mystery room gift card",
      url: "/" + locationslug + "/gift-cards",
      metaindex: true,
      metaimg:
        "/assets/gn-mobile-hero/allinadventures-gift-cards-hero-mobile.jpg",
    },

    pagedata: {
      pagetitle: "BUY GIFT CARDS IN " + locnameMod(locationslug),
      pagesubtitle:
        "We've got your gift needs covered for birthdays, holidays, special surprises, and just about everything else in between. You'll be pleased to know that unlike a lot of other gift programs, our Gift Cards never expire! To buy or redeem Gift Cards, visit the location-specific Gift Card page to find a local store near you.",
      publish_status: getLocTotal(locationslug).publish_status,
      coverimageL:
        "/assets/gn-desktop-hero/allinadventures-gift-cards-hero-desktop.jpg",
      coverimageM:
        "/assets/gn-mobile-hero/allinadventures-gift-cards-hero-mobile.jpg",
      location_name: locnameMod(locationslug),
      locationslug: locationslug,
      mall: getLocSpec(locationslug).mall,
      totalLocations: totalLocation(),
      bookingdata: bookingList("gift-card", locationslug),
      eventbooking: {
        shortname: evbook.shortname,
        item: evbook["party-package"].item,
        flow: evbook["party-package"].flow,
        eventstatus: evbook["party-package"].eventstatus,
      },
    },
    gift_faq: [
      {
        id: 1,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "How do I purchase the Gift Cards?",
        ans: [
          " Pick your location, choose the amount you want to give, fill in details, add to the cart, and checkout. You'll get an email with the Gift Card number. For gifts, follow the email instructions. Physical cards can be purchased at your local store. (Gift Cards are redeemable only at the location where purchased)",
          '<p class="mt-2 lg:mt-3"><i><b>Note:</b> Check your spam folder if you haven&apos;t received your Gift Card(s).</i></p>',
        ],
      },
      {
        id: 2,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "How do I redeem the Gift Cards?",
        ans: [
          "Gift card holders can redeem online at <a href='https://allinadventures.com' class='text-red-600 hover:text-red-700'>allinadventures.com</a> or in-store where purchased. For assistance, contact your local store or call our customer service at <a href='tel:844-502-5546' class='text-red-600 hover:text-red-700'>844-502-5546</a>",
        ],
      },
      {
        id: 3,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "Do Gift Cards expire?",
        ans: ["Our Gift Cards never expire and last forever."],
      },
      {
        id: 4,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "Do we need to make a reservation to use a Gift Card?",
        ans: [
          "While reservations aren't required, we recommend booking in advance for your preferred experience and time slot. Walk-ins are welcome, but availability is not guaranteed.",
        ],
      },
      {
        id: 5,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "What happens if I prepay for my reservation in advance?",
        ans: [
          "For prepaid reservations, your payment will be refunded upon presenting your Gift Card at the store location.",
        ],
      },
      {
        id: 6,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "Can I get a physical Gift Card instead of an electronic one?",
        ans: ["Physical Gift Cards are available at our location."],
      },
    ],
    redeemgames: getRedeemGames(locationslug),
  };

  return giftcardData;
};

const locationGiftData = {
  "albany-ny": {},
};
