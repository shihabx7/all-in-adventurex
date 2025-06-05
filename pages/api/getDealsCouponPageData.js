import { apiSetting, apiUrl } from "../../lib/apiSettings";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../lib/query/navMenuQuery";
import { dealsCouponPageQuery } from "../../lib/query/singlePageQury";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";
import {
  getSinglePageMeta,
  getSinglePageData,
} from "../../lib/singlePageDataFormation";
export const getDealsCouponPageData = async () => {
  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  // fetch all activity list as an array
  const activityListRes = await fetch(allActivitiesSluglistQuery, apiSetting);
  const activityListObj = await activityListRes.json();
  const actctivityListResData = activityListObj.data;
  // fetch all event list as an array
  const eventListRes = await fetch(allEventsSluglistQuery, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;

  const totalActivities = actctivityListResData.length;
  const totalLocations = locationListData.length;
  // fetch page data

  const pegeRes = await fetch(dealsCouponPageQuery, apiSetting);
  const pegeResObj = await pegeRes.json();
  const pageResData = pegeResObj.data.attributes;

  const seoData = pageResData.seo;
  const ftImage = pageResData.pageHeroMobile.data.attributes.url;
  // fetch page data end
  const data = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: getSinglePageMeta(seoData, ftImage, "deals-coupon"),

    pageData: getSinglePageData(pageResData, totalLocations),

    faqlist: [
      {
        id: 1,
        category: "deals",
        group: "deals",
        ques: "How can I get a discount?",
        ans: [
          "<p>Glad you asked! Our absolute champion of savings is the <a href='https://allinadventures.com/unlimited-play-pass'>Unlimited Play Pass</a> - it's your golden ticket to unlocking endless fun, whether you want to play all year or just pack in a day of non-stop adventure for one unbeatable price!</p><p>But wait, there's more! We've also got a treasure trove of other awesome ways to save, like our super popular Play It Again offer, plus exclusive perks for our amazing military heroes, first responders, and mall employees. Be sure to sign up above to stay informed or ask a team member about all our current special savings when you visit!</p>",
        ],
      },
      {
        id: 2,
        category: "deals",
        group: "deals",
        ques: "How do I use my discounts?",
        ans: [
          "Many offers will have a promotional code that can be applied to your cart during the checkout process. Some promotions are only available in-store and must be applied by one of our team members. If you have any issues, please contact your local All In Adventures store for further assistance.",
        ],
      },
      {
        id: 3,
        category: "deals",
        group: "deals",
        ques: "It's my birthday! Do you have any discounts for me?",
        ans: [
          "<p>Absolutely! Hooray for birthdays! 🎉 Just let one of our team members know it's your special day when you arrive, and we'll gift you a free admission to celebrate with us! (A valid ID might be requested, just to make sure we're celebrating the right awesome person!) </p>",
        ],
      },

      {
        id: 4,
        category: "deals",
        group: "deals",
        ques: "Do you have any discounts for Military or first responders?",
        ans: [
          "<p>A huge YES! We are incredibly proud to offer a special discount to our amazing military heroes (and first responders) as our way of saying thank you for your service! Simply present a valid ID upon arrival for your booking, and we'll take care of the rest. Get ready to enjoy some well-deserved fun with us!</p>",
        ],
      },
      {
        id: 5,
        category: "deals",
        group: "deals",
        ques: "Do you have any discounts for larger groups?",
        ans: [
          "<p>Oh, you know it! We absolutely LOVE hosting groups and making your epic gatherings unforgettable! For all the details on our fantastic group rates and to spark some inspiration for your next big event, be sure to dive into our super fun events page <a href='https://allinadventures.com/events'>right here!</a></p><p>Got more questions or dreaming up a truly unique adventure? Don't hesitate to reach out to our amazing team at <a href='mailto:sales@allinadventures.com'>sales@allinadventures.com</a> - they're ready to help you plan an experience that's all in!</p>",
        ],
      },
    ],

    couponlist: [
      {
        id: 1,
        coupon_title: "FACEBOOK AND INSTAGRAM FOLLOWERS",
        coupon_desc:
          "<p>Like us on Facebook or follow us on Instagram to get $2 OFF per person in your group.</p> <p>Use the code at checkout and show proof at check-in!</p>",
        social: "show",
        coupon_offer_off: "$2",
        offer_per: "PER PERSON",
        coupon_code: "FACEBOOK",
      },
      {
        id: 2,
        coupon_title: "MALL EMPLOYEE DISCOUNT",
        coupon_desc:
          "<p>Work in the mall? Score $5 OFF per person.</p> <p>Just use the code and show your ID or nametag at check-in.</p>",

        coupon_offer_off: "$5",
        offer_per: "PER PERSON",
        coupon_code: "EMPLOYEE",
      },
      {
        id: 3,
        coupon_title: "MILITARY DISCOUNT",
        coupon_desc:
          "<p>To thank our heroes, all active and retired military receive $5 OFF per person.</p> <p>Use your exclusive code and show valid military ID when you arrive.</p>",

        coupon_offer_off: "$5",
        offer_per: "PER PERSON",
        coupon_code: "MILITARY",
      },
    ],
  };

  return data;
};
