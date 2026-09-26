import * as qs from "qs";
import formidable from "formidable";
import { apiUrl, apiSetting } from "../../../lib/apiSettings";
import { jobPostSearchQuery } from "../../../lib/v2/query/jobPostQuery";
import {
  jobPositionCardList,
  jobPosCardSearchByLocation,
} from "../../../lib/v2/formate/jobPostformater";

//const au='https://cdn.allinadventures.com/api/job-position-openings?populate[positionName]=*&populate[jobLocations][populate][location][populate][locationInfo]=*&populate=*&sort[0]=id:desc'

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function ProcessJobSearch(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  console.log(
    "====================job search request received................",
  );
  const form = formidable({});

  form.parse(req, async (err, fields) => {
    if (err) {
      return res.status(500).json({ message: "Error processing form payload" });
    }

    // Safely extract field values
    const schedule = Array.isArray(fields.schedule)
      ? fields.schedule[0]
      : fields.schedule;
    const location = Array.isArray(fields.location)
      ? fields.location[0]
      : fields.location;
    const position = Array.isArray(fields.position)
      ? fields.position[0]
      : fields.position;
    const workplace = Array.isArray(fields.workplace)
      ? fields.workplace[0]
      : fields.workplace;

    // Check that at least one field is provided
    if (
      !schedule?.trim() &&
      !location?.trim() &&
      !position?.trim() &&
      !workplace?.trim()
    ) {
      return res
        .status(400)
        .json({ message: "At least one search field must be filled." });
    }

    try {
      // 1. Build Strapi v3 filter object
      const dynamicFilters = {};

      // 1. Map fields directly matching your Strapi v4 attributes schema layout
      // 1. Map fields directly matching your Strapi v4 attributes schema layout
      if (schedule?.trim()) {
        dynamicFilters.schedule = { $eqi: schedule.trim() }; // Case-insensitive exact match
      }
      if (workplace?.trim()) {
        // Noted from your JSON response: field uses a capital P ('workPlace')
        dynamicFilters.workPlace = { $eqi: workplace.trim() };
      }
      if (position?.trim()) {
        // Deep relation filtering for attributes.positionName.data.attributes.positionName
        dynamicFilters.positionName = {
          positionName: { $containsi: position.trim() }, // Case-insensitive partial match
        };
      }
      if (location?.trim()) {
        const stc = location.toString().split(",");
        const rgc = stc[stc.length - 1].toUpperCase();
        dynamicFilters["$or"] = [
          {
            // Condition A: It matches the searched location name
            jobLocations: {
              location: {
                slug: { $containsi: location.trim() },
              },
            },
          },
          {
            job_regions: {
              regionShortCode: { $containsi: rgc },
            },
          },
          {
            // Condition B: The job is explicitly flagged to appear at all locations
            isActiveAllLocation: { $eq: true },
          },
        ];
      }
      const queryParams = qs.stringify(
        {
          filters: dynamicFilters,
          sort: ["id:desc"],
          populate: {
            positionName: "*",
            jobLocations: {
              populate: {
                location: {
                  populate: {
                    locationInfo: "*",
                  },
                },
              },
            },
          },
        },
        { encodeValuesOnly: true },
      );

      // 3. Construct URL. Notice we include explicit deep path populates for v3
      //const strapiUrl = `${apiUrl}job-position-openings?${queryParams}&_populate[]=positionName&_populate[]=jobLocations.location.location`;
      const strapiUrl = `${apiUrl}job-position-openings?${queryParams}`;

      console.log("====new reqUrl ===>", strapiUrl);
      const strapiResponse = await fetch(strapiUrl, apiSetting);

      // 4. Send request to Strapi v3 backend
      //const strapiResponseX = await fetch(strapiUrl, {
      //  method: 'GET',
      //  headers: {
      //    'Content-Type': 'application/json',
      //   }
      //  });

      const strapiData = await strapiResponse.json();
      const strapiDataArr = strapiData.data;
      let formatedData = [];

      if (strapiDataArr.length > 0) {
        formatedData = location
          ? jobPosCardSearchByLocation(strapiDataArr, location.trim())
          : jobPositionCardList(strapiDataArr);
      }
      const retData = { data: formatedData, massage: "fetch api seccuss" };
      //const formatedData=strapiDataArr.length>0 jobPositionCardList(strapiDataArr)

      console.log("job response data :", JSON.stringify(strapiDataArr));
      console.log(
        "----------------------job response data---------------------------------------- ",
      );
      console.log("job data formated :", JSON.stringify(formatedData));
      // In Strapi v3, the array returned is directly structural data [item, item],
      // not wrapped in { data: [...] } like in v4/v5.
      return res.status(strapiResponse.status).json(retData);
    } catch (error) {
      console.error("Strapi v3 fetching error:", error);
      return res
        .status(500)
        .json({ message: "Failed fetching data from the API endpoint." });
    }
  });
}

const resObj = {
  data: [
    {
      id: 2,
      attributes: {
        schedule: "Part-Time",
        workPlace: "On-Site",
        jobType: "Guest Experience",
        openingFor: 1,
        expireDate: "2026-11-27",
        isActive: true,
        description:
          '<p>When people ask us what we do as a company, we simply reply by saying "we connect people through shared, interactive fun".&nbsp;</p><h3><strong>WHEN YOU BECOME ONE OF OUR TEAM MEMBERS, YOU:&nbsp;</strong></h3><ul><li><strong>Roll Out the Red Carpet:&nbsp;</strong>Greet guests with genuine enthusiasm and make them feel instantly welcomed</li><li><strong>Set the Stage:&nbsp;</strong>Guide players into their adventure with clear waiver/safety instructions, energy, and confidence</li><li><strong>Keep the Energy Alive:&nbsp;</strong>Check in on gameplay, deliver clever hints (not answers) when needed, and cheer on guests as they conquer challenges</li><li><strong>Celebrate Big (and Small) Wins:&nbsp;</strong>Offer and snap keepsake photos, encourage high-fives, and make every group leave smiling</li><li><strong>Flip the Room Fast:&nbsp;</strong>Restage themed mystery rooms quickly and accurately – so every group starts fresh</li><li><strong>Be the Calm in the Chaos:&nbsp;</strong>Adapt between slower days and fast-paced rushes, always keeping a cool head and positive attitude</li><li><strong>Deliver Guest-First Service:&nbsp;</strong>Listen carefully to guest feedback, resolve concerns with urgency, and always go above and beyond</li><li><strong>Support the Team:&nbsp;</strong>Collaborate with coworkers, jump in where needed, and help keep the entire escape room looking ready-to-go</li><li><strong>Make a Contribution:&nbsp;</strong>Help drive the scorecard and achieve 3 “Rs” (Revenue, Reviews &amp; Responsibilities)</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>High School diploma (or GED)</li><li>A natural people-person with good communication skills</li><li>Previous guest or customer service experience</li><li>Attention to detail and an “All In” attitude</li><li>Flexibility to work days, nights, weekends, and holidays</li><li>Physical ability to reset rooms (lift up to 50 lbs) and keep pace with operations</li><li>Must successfully pass a professional background screen</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>A fun, casual, family-friendly environment (where quirkiness, costumes, and humor are a plus!)</li><li>Work-Life Balance! (Typical 4-hour work shifts between the hours of 11am – 8p or 9pm)</li><li>Career growth opportunities, competitive wages, a 90-day pay incentive and paid quarterly bonuses</li><li>A workplace that values authenticity, teamwork, and guest-centered hospitality</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p>',
        createdAt: "2026-09-20T14:21:07.495Z",
        updatedAt: "2026-09-20T14:21:33.907Z",
        publishedAt: "2026-09-20T14:21:33.903Z",
        isActiveAllLocation: false,
        positionName: {
          data: {
            id: 3,
            attributes: {
              positionName: "Game Master",
              Slug: "game-master",
              createdAt: "2026-09-20T14:12:00.528Z",
              updatedAt: "2026-09-20T14:12:22.887Z",
              publishedAt: "2026-09-20T14:12:22.883Z",
            },
          },
        },
        jobLocations: [
          {
            id: 4,
            expireDate: null,
            positionOpenFor: 3,
            location: {
              data: {
                id: 14,
                attributes: {
                  createdAt: "2024-01-24T13:43:51.080Z",
                  updatedAt: "2026-09-15T13:08:36.662Z",
                  publishedAt: "2024-08-04T23:49:30.363Z",
                  locationName: "Kingston, MA",
                  slug: "kingston-ma",
                  priority: 25,
                  isPublished: true,
                  locationInfo: {
                    id: 14,
                    cityName: "Kingston",
                    state: "Massachusetts, MA",
                    address:
                      "Escape the Mystery Room+1 Kingston Collection Way Unit B106",
                    zip: "02364",
                    phone: "+1 781-214-1126",
                    mall: "Kingston Collection",
                    managerEmail: "mgr102@allinadventures.com",
                    storeEmail: "store102@allinadventures.com",
                    avgReview: 4.8,
                    guestServed: "26K+",
                    fivestarId: "18babca8503848fea92d33ed8f45fa83",
                    storeNo: 102,
                    raveReviews: "1775+",
                    guestCapacity: "2-70",
                    catering: "YES",
                    privateEvents: "YES",
                    parking: " Kingston Collection Parking",
                    wheelChairAccessibility: true,
                    ageRange: "6+",
                    locationDescription:
                      "<p>Our customers come from many surrounding cities, including Boston, New Bedford, Plymouth, Falmouth, MA and many more!</p>",
                    direction:
                      "<p>Our store is located around the corner from the Target entrance, across from Lenscrafters.</p>",
                    acceptedPayments:
                      "<p>We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>",
                    text: "+1 781-214-1085",
                  },
                },
              },
            },
          },
          {
            id: 5,
            expireDate: null,
            positionOpenFor: 1,
            location: {
              data: {
                id: 16,
                attributes: {
                  createdAt: "2024-01-24T13:43:51.080Z",
                  updatedAt: "2026-09-15T13:18:20.141Z",
                  publishedAt: "2024-08-04T23:50:12.276Z",
                  locationName: "Milford, CT",
                  slug: "milford-ct",
                  priority: 31,
                  isPublished: true,
                  locationInfo: {
                    id: 16,
                    cityName: "Milford",
                    state: "Connecticut, CT",
                    address:
                      "All In Adventures Escape Rooms 1201 Boston Post Rd Suite 1220",
                    zip: "06460",
                    phone: "+1 203-200-0775",
                    mall: "Connecticut Post Mall",
                    managerEmail: "mgr109@allinadventures.com",
                    storeEmail: "store109@allinadventures.com",
                    avgReview: 4.9,
                    guestServed: "40K+",
                    fivestarId: "084e7f2381b04d689960cc4161935ed7",
                    storeNo: 109,
                    raveReviews: "3620+",
                    guestCapacity: "2-70",
                    catering: "YES",
                    privateEvents: "YES",
                    parking: "Connecticut Post Mall Parking",
                    wheelChairAccessibility: true,
                    ageRange: "6+",
                    locationDescription:
                      "<p>Our customers come from many surrounding cities, including New Haven, Stamford, Danbury, Middletown, and many more!</p>",
                    direction:
                      "<p>Customers can find the store fastest by entering the mall from the front or the back, near Target. You are on the lower level. Head up the main mall corridor and we are on the right, between Track 23 and Snipes.</p>",
                    acceptedPayments:
                      "<p>We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>",
                    text: "+1 203-200-0347",
                  },
                },
              },
            },
          },
          {
            id: 6,
            expireDate: null,
            positionOpenFor: 5,
            location: {
              data: {
                id: 11,
                attributes: {
                  createdAt: "2024-01-24T13:43:51.080Z",
                  updatedAt: "2026-09-15T13:01:29.259Z",
                  publishedAt: "2024-08-04T20:21:04.673Z",
                  locationName: "Raleigh, NC",
                  slug: "raleigh-nc",
                  priority: 11,
                  isPublished: true,
                  locationInfo: {
                    id: 11,
                    cityName: "Raleigh",
                    state: "North Carolina, NC",
                    address:
                      "All In Adventures Escape Rooms 5959 Triangle Town Blvd Space EU 2113",
                    zip: "27616",
                    phone: "+1 919-213-0849",
                    mall: "Triangle Town Center",
                    managerEmail: "mgr123@allinadventures.com",
                    storeEmail: "store123@allinadventures.com",
                    avgReview: 4.8,
                    guestServed: "18K+",
                    fivestarId: "32cdb7144e66428bbc9af9393a94d362",
                    storeNo: 123,
                    raveReviews: "4020+",
                    guestCapacity: "2-70",
                    catering: "YES",
                    privateEvents: "YES",
                    parking: "Triangle Town Center Parking ",
                    wheelChairAccessibility: true,
                    ageRange: "6+",
                    locationDescription:
                      "<p>Our customers come from many surrounding cities, including Chapel Hill, Morrisville, Carrboro, Cary, Apex, Holly Springs, Zebulon, Wake Forest, Hillsborough, Pittsboro and many more!</p>",
                    direction:
                      "<p>We are right off exit 17 on Interstate-540, and directly off of Capital Blvd. behind Best Buy. We are attached on the outside of the mall next to Barnes &amp; Noble.</p>",
                    acceptedPayments:
                      "<p>We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>",
                    text: "+1 919-213-1724",
                  },
                },
              },
            },
          },
        ],
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
};
