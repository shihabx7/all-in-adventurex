import { getLocationsPageData } from "../getLocationsPageData";
import { bookingList } from "./bookingList";
import { getLocationActivitySlugList } from "./getLocationActivitySlugList";
import { getLocationEventSlugList } from "./getLocationEventSlugList";
import { getLocTotal } from "../AllDataList/getLocTotal";

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
        ques: "How to purchase your Gift Cards?",
        ans: [
          "Choose the Location. Then, select the Gift Card amount, fill out the requested details, add it to your cart, and checkout.",
          '<p class="mt-2 lg:mt-3">Once you complete your purchase, you will be sent an email with the Gift Card number. If you are giving the card as a gift, follow the directions in your confirmation email to send them through email directly to the recipient. If you prefer a physical Gift Card, please visit your local store.</p>',
          '<p class="mt-2 lg:mt-3"><span class="underline underline-offset-4 font-medium">Please note:</span> If you have not received your Gift Card(s), please check your spam folder.</p>',
        ],
      },
      {
        id: 2,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "How do I redeem the Gift Cards?",
        ans: [
          "Gift card holders can redeem the card online at www.allinadventures.com or directly in-store where the Gift Card was purchased. Contact us directly at your local store or call our customer service team at ",
          '<a href="tel:844-502-5546" class="text-red-600 hover:text-red-700">844-502-5546</a> to redeem it over the phone.',
        ],
      },
      {
        id: 3,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "Do Gift Cards expire?",
        ans: ["Our Gift Cards never expire from the day of issue."],
      },
      {
        id: 4,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "Do we need to make a reservation to use a Gift Card?",
        ans: [
          "No reservation is needed but we always suggest making a reservation beforehand to ensure you get the experience and time slot that you prefer. Walk-ins are available but availability is not guaranteed.",
        ],
      },
      {
        id: 5,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "What happens if I prepay for my reservation in advance?",
        ans: [
          "If you prepaid for your reservation, your payment will be refunded when you present your Gift Card on Location.",
        ],
      },
      {
        id: 6,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "Can I get a physical Gift Card instead of an electronic one?",
        ans: ["Physical Gift Cards can be provided at our Location."],
      },
    ],
  };

  return giftcardData;
};

const locationGiftData = {
  "albany-ny": {},
};
