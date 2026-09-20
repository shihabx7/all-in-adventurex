const isNotExpired = (dateObj) => {
  // 1. Create a Date object for the current day and clear the time components
  if (dateObj == null) {
    return true;
  }
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  // 2. Parse the expiration string into a Date object
  const expirationDate = new Date(dateObj);

  // 3. Compare timestamps. If current date is strictly greater, it has expired.
  if (currentDate < expirationDate) {
    return true;
  }
  return false;
};

export const jobPositionCardList = async (jobList) => {
 // console.log("recv -", jobList.length);
  let retArr = [];
  for (let i = 0; i < jobList.length; i++) {
    if (jobList[i].attributes.isActive) {
      console.log("active -", i);
      if (jobList[i].attributes.isActiveAllLocation) {
   //     console.log("active all-", i);
        let obj = {
          positionName:
            jobList[i].attributes.positionName.data.attributes.positionName,
          schedule: jobList[i].attributes.schedule,
          workPlace: jobList[i].attributes.workPlace,
          jobType: jobList[i].attributes.jobType,
          openingFor: jobList[i].attributes.openingFor,
          description: jobList[i].attributes.description,
          jobLocation: "All Location",
          locationSlug: "all",
        };
        retArr.push(obj);
      } else {
   //     console.log("active loc -", i);
        for (let j = 0; j < jobList[i].attributes.jobLocations.length; j++) {
          let obj = {
            positionName:
              jobList[i].attributes.positionName.data.attributes.positionName,
            schedule: jobList[i].attributes.schedule,
            workPlace: jobList[i].attributes.workPlace,
            jobType: jobList[i].attributes.jobType,
            openingFor: jobList[i].attributes.jobLocations[j].positionOpenFor
              ? jobList[i].attributes.jobLocations[j].positionOpenFor
              : jobList[i].attributes.openingFor,
            description: jobList[i].attributes.description,
            jobLocation:
              jobList[i].attributes.jobLocations[j].location.data.attributes
                .locationName,
            locationSlug:
              jobList[i].attributes.jobLocations[j].location.data.attributes
                .slug,
            mall: jobList[i].attributes.jobLocations[j].location.data.attributes
              .locationInfo.mall,
          };
          retArr.push(obj);
        }
      }
    }
  }
  //console.log("return -", retArr.length);
  return retArr;
};

export const jobPositionList = async (listArr) => {
  let retArr = [];

  for (let i = 0; i < listArr.length; i++) {
    let obj = {
      id: i + 1,
      positionName: listArr[i].attributes.positionName,
      slug: listArr[i].attributes.Slug,
    };
    retArr.push(obj);
  }
  return retArr;
};

const smdt = [
  {
    id: 3,
    attributes: {
      schedule: "Full-Time",
      workPlace: "On-Site",
      jobType: "Management",
      openingFor: 3,
      expireDate: null,
      isActive: true,
      description:
        "<p>Since 2014, All In Adventures has connected families, friends, coworkers, and students through live interactive experiences. From mystery escapes to game show challenges and more, we’ve expanded to 20+ locations nationwide — all built on one idea: shared fun makes lasting memories.</p><p>As a Store Operations Lead, you set the tone for every guest and every teammate who walks through the door.&nbsp;<strong>Your mission?&nbsp;</strong>Keep the energy high, the details sharp, and the fun flowing. You’ll guide and develop your team, oversee daily operations, and make sure every guest leaves with a smile (and a story worth telling).</p><h3><strong>WHEN YOU BECOME ONE OF OUR STORE LEADERS, YOU:&nbsp;</strong></h3><ul><li><strong>Roll Out the Red Carpet:&nbsp;</strong>Greet guests with genuine enthusiasm and make them feel instantly welcomed</li><li><strong>Set the Stage:&nbsp;</strong>Guide players into their adventure with clear waiver/safety instructions, energy, and confidence</li><li><strong>Keep the Energy Alive:&nbsp;</strong>Check in on gameplay, deliver clever hints (not answers) when needed, and cheer on guests as they conquer challenges</li><li><strong>Celebrate Big (and Small) Wins:&nbsp;</strong>Offer and snap keepsake photos, encourage high-fives, and make every group leave smiling</li><li><strong>Flip the Room Fast:&nbsp;</strong>Restage themed mystery rooms quickly and accurately – so every group starts fresh</li><li><strong>Be the Calm in the Chaos:&nbsp;</strong>Adapt between slower days and fast-paced rushes, always keeping a cool head and positive attitude</li><li><strong>Deliver Guest-First Service:&nbsp;</strong>Listen carefully to guest feedback, resolve concerns with urgency, and always go above and beyond</li><li><strong>Support the Team:&nbsp;</strong>Collaborate with coworkers, jump in where needed, and help keep the entire escape room looking ready-to-go</li><li><strong>Make a Contribution:&nbsp;</strong>Help drive the scorecard and achieve 3 “Rs” (Revenue, Reviews &amp; Responsibilities)</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>2 - 3 years of leadership or supervisory experience</li><li>Strong customer/guest service skills (you’re approachable, respectful, and upbeat)</li><li>Sharp eye for detail with solid organizational and problem-solving skills</li><li>Adapt between slower days and fast-paced rushes, always keeping a cool head and positive attitude</li><li>An ownership mentality and a positive “all in” attitude</li><li>Ability to work a flexible schedule (including days, nights, weekends, and holidays)</li><li>Able to lift up to 50 lbs and complete daily opening/closing tasks</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>Fun, casual, family-friendly workplace</li><li>Competitive base salary + quarterly bonus potential</li><li>Paid training and fun recognition incentives for your team</li><li>Benefits package (medical option, dental, vision, PTO, holidays)</li><li>Career growth opportunities (multi-unit management potential)</li><li>Work-life balance: 40 – 44 hours/week, typically 8-hour shifts between 11am – 8pm or 9pm</li><li>A company that encourages individuality and celebrates fellow game nerds and puzzle-solvers!</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p>",
      createdAt: "2026-09-20T14:24:47.806Z",
      updatedAt: "2026-09-20T14:50:08.530Z",
      publishedAt: "2026-09-20T14:50:08.503Z",
      isActiveAllLocation: true,
      positionName: {
        data: {
          id: 4,
          attributes: {
            positionName: "Store Manager",
            Slug: "store-manager",
            createdAt: "2026-09-20T14:22:38.701Z",
            updatedAt: "2026-09-20T14:22:41.254Z",
            publishedAt: "2026-09-20T14:22:41.249Z",
          },
        },
      },
      jobLocations: [
        {
          id: 7,
          expireDate: null,
          positionOpenFor: 2,
          location: {
            data: {
              id: 15,
              attributes: {
                createdAt: "2024-01-24T13:43:51.080Z",
                updatedAt: "2026-09-15T13:16:13.442Z",
                publishedAt: "2024-08-04T23:49:43.273Z",
                locationName: "N. Attleborough, MA",
                slug: "n-attleborough-ma",
                priority: 27,
                isPublished: true,
                locationInfo: {
                  id: 15,
                  cityName: "North Attleborough",
                  state: "Massachusetts, MA",
                  address: "Escape the Mystery Room 999 S Washington St W213",
                  zip: "02760",
                  phone: "+1 508-258-9467",
                  mall: "Emerald Square Mall",
                  managerEmail: "mgr110@allinadventures.com",
                  storeEmail: "store110@allinadventures.com",
                  avgReview: 4.8,
                  guestServed: "28K+",
                  fivestarId: "8b631dac8b8e4614b1479de58de8fd00",
                  storeNo: 110,
                  raveReviews: "1470+",
                  guestCapacity: "2-80",
                  catering: "YES",
                  privateEvents: "YES",
                  parking: " Emerald Square Mall Parking",
                  wheelChairAccessibility: true,
                  ageRange: "6+",
                  locationDescription:
                    "<p>Our customers come from many surrounding cities, including Auburn, Boston, New Bedford and many more!</p>",
                  direction:
                    "<p>Our store is on the 2nd floor near the main Macy's store (not Macy's Men's store). Best entrance is the mall entrance next to the bus stop on the lower floor of the rear parking garage. (Non-mall entrances may have different hours.)</p>",
                  acceptedPayments:
                    "<p>We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>",
                  text: "+1 508-258-9452",
                },
              },
            },
          },
        },
        {
          id: 8,
          expireDate: null,
          positionOpenFor: 1,
          location: {
            data: {
              id: 25,
              attributes: {
                createdAt: "2024-01-24T13:43:51.080Z",
                updatedAt: "2026-09-16T09:25:09.616Z",
                publishedAt: "2024-08-04T23:51:18.138Z",
                locationName: "Roanoke, VA",
                slug: "roanoke-va",
                priority: 71,
                isPublished: true,
                locationInfo: {
                  id: 25,
                  cityName: "Roanoke",
                  state: "Virginia, VA",
                  address:
                    "All In Adventures Escape Rooms 4802 Valley View Blvd NW Space LD 150",
                  zip: "24012",
                  phone: "+1 540-227-0518",
                  mall: "Valley View Mall",
                  managerEmail: "mgr129@allinadventures.com",
                  storeEmail: "store129@allinadventures.com",
                  avgReview: 4.8,
                  guestServed: "41K+",
                  fivestarId: "80da445abe054678b64f5c03def262f0",
                  storeNo: 129,
                  raveReviews: "2780+",
                  guestCapacity: "2-70",
                  catering: "YES",
                  privateEvents: "YES",
                  parking: "Valley View Mall Parking",
                  wheelChairAccessibility: true,
                  ageRange: "6+",
                  locationDescription:
                    "<p>Our customers come from many surrounding cities, including Blacksburg, Christiansburg, Salem and many more!</p>",
                  direction:
                    "<p>We are inside the mall beside Sears and the food court.</p>",
                  acceptedPayments:
                    "<p>We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>",
                  text: "+1 540-227-0644",
                },
              },
            },
          },
        },
        {
          id: 9,
          expireDate: null,
          positionOpenFor: 1,
          location: {
            data: {
              id: 2,
              attributes: {
                createdAt: "2024-01-24T13:43:51.080Z",
                updatedAt: "2026-09-20T07:09:54.258Z",
                publishedAt: "2024-01-24T14:51:28.412Z",
                locationName: "Albany, NY",
                slug: "albany-ny",
                priority: 1,
                isPublished: true,
                locationInfo: {
                  id: 2,
                  cityName: "Albany",
                  state: "New York, NY",
                  address:
                    "All In Adventures Escape Rooms 1 Crossgates Mall Rd D212",
                  zip: "12203",
                  phone: "+1 518-217-5061",
                  mall: "Crossgates Mall",
                  managerEmail: "mgr103@allinadventures.com",
                  storeEmail: "store103@allinadventures.com",
                  avgReview: 4.8,
                  guestServed: "71k+",
                  fivestarId: "4fc2ae1b62734a6e8d9e85cbd613ca0f",
                  storeNo: 103,
                  raveReviews: "4300+",
                  guestCapacity: "2-35",
                  catering: "YES",
                  privateEvents: "YES",
                  parking: "Crossgates Mall Parking ",
                  wheelChairAccessibility: true,
                  ageRange: "6+",
                  locationDescription:
                    "<p>Our customers come from many surrounding cities, including Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield and many more!</p>",
                  direction:
                    "<p>Use the second floor entrance near JCPenney and we are located right across from Banana Republic and next to ZARA.</p>",
                  acceptedPayments:
                    "<p>We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>",
                  text: "+1 518-217-2672",
                },
              },
            },
          },
        },
      ],
    },
  },
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
  {
    id: 1,
    attributes: {
      schedule: "Full-Time",
      workPlace: "On-Site",
      jobType: "Guest Experience",
      openingFor: 1,
      expireDate: "2026-10-28",
      isActive: true,
      description:
        '<p>Since 2014, All In Adventures has connected families, friends, coworkers, and students through live interactive experiences. We are looking for an energetic, goal-driven&nbsp;<strong>Sales Lead</strong> to take our store growth to the next level - offering a career step up from our Game Master role without any administrative or staff management duties.</p><h3><strong>WHEN YOU BECOME OUR SALES LEAD, YOU:</strong></h3><ul><li><strong>Close Inbound Leads:&nbsp;</strong>Actively respond to and convert inbound phone calls, web inquiries, and emails for corporate team-building events, birthday parties, and large group bookings.&nbsp;&nbsp;</li><li><strong>Hunt for Outbound Sales:&nbsp;</strong>Prospect local businesses, schools, community organizations, and event planners to build new relationships and generate outbound leads.&nbsp;&nbsp;</li><li><strong>Rally the Team:</strong> Inspire, motivate, and champion sales initiatives across the store team, focusing heavily on member sign-ups for our Rewards program and on-floor upselling.&nbsp;&nbsp;</li><li><strong>Drive the 3 Rs:</strong> Focus on hitting key store metrics across Revenue, Reviews &amp; Rewards enrollment, and maintaining store Responsibilities.&nbsp;&nbsp;</li><li><strong>Lead by Example:</strong> Model confident upselling techniques and customer service excellence on the floor.&nbsp;&nbsp;</li><li><strong>Support Daily Operations:</strong> Jump in as a Game Master to greet guests, run rooms, or handle resets whenever extra support is needed on shift.customer/employee interaction.</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>1+ years of experience in retail sales, customer service, or hospitality (Game Master experience is a strong plus).&nbsp;&nbsp;</li><li>Proven track record or passion for upselling, outbound outreach, and closing sales leads.&nbsp;&nbsp;</li><li>Outstanding communication skills, both written and verbal, with a persuasive phone and in-person presence.&nbsp;&nbsp;</li><li>High energy, self-starter mentality, and a positive "All In" attitude.&nbsp;&nbsp;</li><li>Flexibility to work varied shifts including days, nights, weekends, and holidays as required.&nbsp;&nbsp;</li><li>High School diploma (or GED) and successful completion of a background screen.&nbsp;</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>A fun, casual, family-friendly environment (where quirkiness, costumes, and humor are a plus!)</li><li>Work-Life Balance! (Typical 4-hour work shifts between the hours of 11am – 8p or 9pm)</li><li>Career growth opportunities, competitive wages, a 90-day pay incentive and paid quarterly bonuses</li><li>A workplace that values authenticity, teamwork, and guest-centered hospitality</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p><p><i>The above statements are intended to describe the general nature and level of work being performed by individuals assigned to this job. They are not intended to be an exhaustive list of all responsibilities, duties and skills required of personnel so classified in this position.&nbsp; Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.</i></p>',
      createdAt: "2026-09-20T14:11:40.382Z",
      updatedAt: "2026-09-20T14:18:04.938Z",
      publishedAt: "2026-09-20T14:17:46.340Z",
      isActiveAllLocation: false,
      positionName: {
        data: {
          id: 1,
          attributes: {
            positionName: "Sales Lead",
            Slug: "sales-lead",
            createdAt: "2026-09-20T14:08:41.745Z",
            updatedAt: "2026-09-20T14:14:36.543Z",
            publishedAt: "2026-09-20T14:08:48.975Z",
          },
        },
      },
      jobLocations: [
        {
          id: 1,
          expireDate: null,
          positionOpenFor: 1,
          location: {
            data: {
              id: 2,
              attributes: {
                createdAt: "2024-01-24T13:43:51.080Z",
                updatedAt: "2026-09-20T07:09:54.258Z",
                publishedAt: "2024-01-24T14:51:28.412Z",
                locationName: "Albany, NY",
                slug: "albany-ny",
                priority: 1,
                isPublished: true,
                locationInfo: {
                  id: 2,
                  cityName: "Albany",
                  state: "New York, NY",
                  address:
                    "All In Adventures Escape Rooms 1 Crossgates Mall Rd D212",
                  zip: "12203",
                  phone: "+1 518-217-5061",
                  mall: "Crossgates Mall",
                  managerEmail: "mgr103@allinadventures.com",
                  storeEmail: "store103@allinadventures.com",
                  avgReview: 4.8,
                  guestServed: "71k+",
                  fivestarId: "4fc2ae1b62734a6e8d9e85cbd613ca0f",
                  storeNo: 103,
                  raveReviews: "4300+",
                  guestCapacity: "2-35",
                  catering: "YES",
                  privateEvents: "YES",
                  parking: "Crossgates Mall Parking ",
                  wheelChairAccessibility: true,
                  ageRange: "6+",
                  locationDescription:
                    "<p>Our customers come from many surrounding cities, including Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield and many more!</p>",
                  direction:
                    "<p>Use the second floor entrance near JCPenney and we are located right across from Banana Republic and next to ZARA.</p>",
                  acceptedPayments:
                    "<p>We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>",
                  text: "+1 518-217-2672",
                },
              },
            },
          },
        },
        {
          id: 2,
          expireDate: null,
          positionOpenFor: null,
          location: {
            data: {
              id: 20,
              attributes: {
                createdAt: "2024-01-24T13:43:51.080Z",
                updatedAt: "2026-09-15T13:21:38.499Z",
                publishedAt: "2024-08-04T23:50:45.528Z",
                locationName: "Bowie, MD",
                slug: "bowie-md",
                priority: 51,
                isPublished: true,
                locationInfo: {
                  id: 20,
                  cityName: "Bowie",
                  state: "Maryland, MD",
                  address: "All In Adventures Escape Rooms 15421 Emerald Way",
                  zip: "20716",
                  phone: "+1 240-203-9291",
                  mall: "Bowie Town Center",
                  managerEmail: "mgr145@allinadventures.com",
                  storeEmail: "store145@allinadventures.com",
                  avgReview: 4.8,
                  guestServed: "38K+",
                  fivestarId: "c291a32e29f54d8dbafe05d862bc3f2c",
                  storeNo: 145,
                  raveReviews: "3130+",
                  guestCapacity: "2-49",
                  catering: "YES",
                  privateEvents: "YES",
                  parking: "Bowie Town Center Parking",
                  wheelChairAccessibility: true,
                  ageRange: "6+",
                  locationDescription:
                    "<p>Our customers come from many surrounding cities, including Glenn Dale, Crofton, Greenbelt, South Laurel, Mitchellville, New Carrollton, Odenton, Beltsville, Laurel, East Riverdale, College Park, Kettering, Largo, Hyattsville, Severn and many more!</p>",
                  direction:
                    "<p>Our store is located across from GNC and directly next to Gold USA.</p>",
                  acceptedPayments:
                    "<p>We accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>",
                  text: "+1 240-203-8815",
                },
              },
            },
          },
        },
        {
          id: 3,
          expireDate: null,
          positionOpenFor: 4,
          location: {
            data: {
              id: 13,
              attributes: {
                createdAt: "2024-01-24T13:43:51.080Z",
                updatedAt: "2026-09-15T13:07:28.061Z",
                publishedAt: "2024-08-04T23:49:14.570Z",
                locationName: "Holyoke, MA",
                slug: "holyoke-ma",
                priority: 22,
                isPublished: true,
                locationInfo: {
                  id: 13,
                  cityName: "Holyoke",
                  state: "Massachusetts, MA",
                  address:
                    "All In Adventures Escape Rooms 50 Holyoke St Space F292",
                  zip: "1040",
                  phone: "+1 413-200-0476",
                  mall: "Holyoke Mall",
                  managerEmail: "mgr114@allinadventures.com",
                  storeEmail: "store114@allinadventures.com",
                  avgReview: 4.6,
                  guestServed: "8K+",
                  fivestarId: "0c3dbc2e3a7340ba9f598fd150cc38f8",
                  storeNo: 114,
                  raveReviews: "910+",
                  guestCapacity: "2-70",
                  catering: "YES",
                  privateEvents: "YES",
                  parking: "Holyoke Mall Parking",
                  wheelChairAccessibility: true,
                  ageRange: "6+",
                  locationDescription:
                    "<p>Our customers come from many surrounding cities, including Worcester, Williamsburg, Chesterfield, Easthampton and many more!</p>",
                  direction:
                    "<p>Our store is located on the 1st floor across from Gap and Hobby Lobby. The best entrance is to the left of Round 1.</p>",
                  acceptedPayments:
                    "<p>We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>",
                  text: "+1 413-200-8452",
                },
              },
            },
          },
        },
      ],
    },
  },
];

const frts = [
  {
    positionName: "Store Manager",
    schedule: "Full-Time",
    workPlace: "On-Site",
    jobType: "Management",
    openingFor: 3,
    description:
      "<p>Since 2014, All In Adventures has connected families, friends, coworkers, and students through live interactive experiences. From mystery escapes to game show challenges and more, we’ve expanded to 20+ locations nationwide — all built on one idea: shared fun makes lasting memories.</p><p>As a Store Operations Lead, you set the tone for every guest and every teammate who walks through the door.&nbsp;<strong>Your mission?&nbsp;</strong>Keep the energy high, the details sharp, and the fun flowing. You’ll guide and develop your team, oversee daily operations, and make sure every guest leaves with a smile (and a story worth telling).</p><h3><strong>WHEN YOU BECOME ONE OF OUR STORE LEADERS, YOU:&nbsp;</strong></h3><ul><li><strong>Roll Out the Red Carpet:&nbsp;</strong>Greet guests with genuine enthusiasm and make them feel instantly welcomed</li><li><strong>Set the Stage:&nbsp;</strong>Guide players into their adventure with clear waiver/safety instructions, energy, and confidence</li><li><strong>Keep the Energy Alive:&nbsp;</strong>Check in on gameplay, deliver clever hints (not answers) when needed, and cheer on guests as they conquer challenges</li><li><strong>Celebrate Big (and Small) Wins:&nbsp;</strong>Offer and snap keepsake photos, encourage high-fives, and make every group leave smiling</li><li><strong>Flip the Room Fast:&nbsp;</strong>Restage themed mystery rooms quickly and accurately – so every group starts fresh</li><li><strong>Be the Calm in the Chaos:&nbsp;</strong>Adapt between slower days and fast-paced rushes, always keeping a cool head and positive attitude</li><li><strong>Deliver Guest-First Service:&nbsp;</strong>Listen carefully to guest feedback, resolve concerns with urgency, and always go above and beyond</li><li><strong>Support the Team:&nbsp;</strong>Collaborate with coworkers, jump in where needed, and help keep the entire escape room looking ready-to-go</li><li><strong>Make a Contribution:&nbsp;</strong>Help drive the scorecard and achieve 3 “Rs” (Revenue, Reviews &amp; Responsibilities)</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>2 - 3 years of leadership or supervisory experience</li><li>Strong customer/guest service skills (you’re approachable, respectful, and upbeat)</li><li>Sharp eye for detail with solid organizational and problem-solving skills</li><li>Adapt between slower days and fast-paced rushes, always keeping a cool head and positive attitude</li><li>An ownership mentality and a positive “all in” attitude</li><li>Ability to work a flexible schedule (including days, nights, weekends, and holidays)</li><li>Able to lift up to 50 lbs and complete daily opening/closing tasks</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>Fun, casual, family-friendly workplace</li><li>Competitive base salary + quarterly bonus potential</li><li>Paid training and fun recognition incentives for your team</li><li>Benefits package (medical option, dental, vision, PTO, holidays)</li><li>Career growth opportunities (multi-unit management potential)</li><li>Work-life balance: 40 – 44 hours/week, typically 8-hour shifts between 11am – 8pm or 9pm</li><li>A company that encourages individuality and celebrates fellow game nerds and puzzle-solvers!</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p>",
    jobLocation: "All Location",
    locationSlug: "all",
  },
  {
    positionName: "Game Master",
    schedule: "Part-Time",
    workPlace: "On-Site",
    jobType: "Guest Experience",
    openingFor: 3,
    description:
      '<p>When people ask us what we do as a company, we simply reply by saying "we connect people through shared, interactive fun".&nbsp;</p><h3><strong>WHEN YOU BECOME ONE OF OUR TEAM MEMBERS, YOU:&nbsp;</strong></h3><ul><li><strong>Roll Out the Red Carpet:&nbsp;</strong>Greet guests with genuine enthusiasm and make them feel instantly welcomed</li><li><strong>Set the Stage:&nbsp;</strong>Guide players into their adventure with clear waiver/safety instructions, energy, and confidence</li><li><strong>Keep the Energy Alive:&nbsp;</strong>Check in on gameplay, deliver clever hints (not answers) when needed, and cheer on guests as they conquer challenges</li><li><strong>Celebrate Big (and Small) Wins:&nbsp;</strong>Offer and snap keepsake photos, encourage high-fives, and make every group leave smiling</li><li><strong>Flip the Room Fast:&nbsp;</strong>Restage themed mystery rooms quickly and accurately – so every group starts fresh</li><li><strong>Be the Calm in the Chaos:&nbsp;</strong>Adapt between slower days and fast-paced rushes, always keeping a cool head and positive attitude</li><li><strong>Deliver Guest-First Service:&nbsp;</strong>Listen carefully to guest feedback, resolve concerns with urgency, and always go above and beyond</li><li><strong>Support the Team:&nbsp;</strong>Collaborate with coworkers, jump in where needed, and help keep the entire escape room looking ready-to-go</li><li><strong>Make a Contribution:&nbsp;</strong>Help drive the scorecard and achieve 3 “Rs” (Revenue, Reviews &amp; Responsibilities)</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>High School diploma (or GED)</li><li>A natural people-person with good communication skills</li><li>Previous guest or customer service experience</li><li>Attention to detail and an “All In” attitude</li><li>Flexibility to work days, nights, weekends, and holidays</li><li>Physical ability to reset rooms (lift up to 50 lbs) and keep pace with operations</li><li>Must successfully pass a professional background screen</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>A fun, casual, family-friendly environment (where quirkiness, costumes, and humor are a plus!)</li><li>Work-Life Balance! (Typical 4-hour work shifts between the hours of 11am – 8p or 9pm)</li><li>Career growth opportunities, competitive wages, a 90-day pay incentive and paid quarterly bonuses</li><li>A workplace that values authenticity, teamwork, and guest-centered hospitality</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p>',
    jobLocation: "Kingston, MA",
    locationSlug: "kingston-ma",
  },
  {
    positionName: "Game Master",
    schedule: "Part-Time",
    workPlace: "On-Site",
    jobType: "Guest Experience",
    openingFor: 1,
    description:
      '<p>When people ask us what we do as a company, we simply reply by saying "we connect people through shared, interactive fun".&nbsp;</p><h3><strong>WHEN YOU BECOME ONE OF OUR TEAM MEMBERS, YOU:&nbsp;</strong></h3><ul><li><strong>Roll Out the Red Carpet:&nbsp;</strong>Greet guests with genuine enthusiasm and make them feel instantly welcomed</li><li><strong>Set the Stage:&nbsp;</strong>Guide players into their adventure with clear waiver/safety instructions, energy, and confidence</li><li><strong>Keep the Energy Alive:&nbsp;</strong>Check in on gameplay, deliver clever hints (not answers) when needed, and cheer on guests as they conquer challenges</li><li><strong>Celebrate Big (and Small) Wins:&nbsp;</strong>Offer and snap keepsake photos, encourage high-fives, and make every group leave smiling</li><li><strong>Flip the Room Fast:&nbsp;</strong>Restage themed mystery rooms quickly and accurately – so every group starts fresh</li><li><strong>Be the Calm in the Chaos:&nbsp;</strong>Adapt between slower days and fast-paced rushes, always keeping a cool head and positive attitude</li><li><strong>Deliver Guest-First Service:&nbsp;</strong>Listen carefully to guest feedback, resolve concerns with urgency, and always go above and beyond</li><li><strong>Support the Team:&nbsp;</strong>Collaborate with coworkers, jump in where needed, and help keep the entire escape room looking ready-to-go</li><li><strong>Make a Contribution:&nbsp;</strong>Help drive the scorecard and achieve 3 “Rs” (Revenue, Reviews &amp; Responsibilities)</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>High School diploma (or GED)</li><li>A natural people-person with good communication skills</li><li>Previous guest or customer service experience</li><li>Attention to detail and an “All In” attitude</li><li>Flexibility to work days, nights, weekends, and holidays</li><li>Physical ability to reset rooms (lift up to 50 lbs) and keep pace with operations</li><li>Must successfully pass a professional background screen</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>A fun, casual, family-friendly environment (where quirkiness, costumes, and humor are a plus!)</li><li>Work-Life Balance! (Typical 4-hour work shifts between the hours of 11am – 8p or 9pm)</li><li>Career growth opportunities, competitive wages, a 90-day pay incentive and paid quarterly bonuses</li><li>A workplace that values authenticity, teamwork, and guest-centered hospitality</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p>',
    jobLocation: "Milford, CT",
    locationSlug: "milford-ct",
  },
  {
    positionName: "Game Master",
    schedule: "Part-Time",
    workPlace: "On-Site",
    jobType: "Guest Experience",
    openingFor: 5,
    description:
      '<p>When people ask us what we do as a company, we simply reply by saying "we connect people through shared, interactive fun".&nbsp;</p><h3><strong>WHEN YOU BECOME ONE OF OUR TEAM MEMBERS, YOU:&nbsp;</strong></h3><ul><li><strong>Roll Out the Red Carpet:&nbsp;</strong>Greet guests with genuine enthusiasm and make them feel instantly welcomed</li><li><strong>Set the Stage:&nbsp;</strong>Guide players into their adventure with clear waiver/safety instructions, energy, and confidence</li><li><strong>Keep the Energy Alive:&nbsp;</strong>Check in on gameplay, deliver clever hints (not answers) when needed, and cheer on guests as they conquer challenges</li><li><strong>Celebrate Big (and Small) Wins:&nbsp;</strong>Offer and snap keepsake photos, encourage high-fives, and make every group leave smiling</li><li><strong>Flip the Room Fast:&nbsp;</strong>Restage themed mystery rooms quickly and accurately – so every group starts fresh</li><li><strong>Be the Calm in the Chaos:&nbsp;</strong>Adapt between slower days and fast-paced rushes, always keeping a cool head and positive attitude</li><li><strong>Deliver Guest-First Service:&nbsp;</strong>Listen carefully to guest feedback, resolve concerns with urgency, and always go above and beyond</li><li><strong>Support the Team:&nbsp;</strong>Collaborate with coworkers, jump in where needed, and help keep the entire escape room looking ready-to-go</li><li><strong>Make a Contribution:&nbsp;</strong>Help drive the scorecard and achieve 3 “Rs” (Revenue, Reviews &amp; Responsibilities)</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>High School diploma (or GED)</li><li>A natural people-person with good communication skills</li><li>Previous guest or customer service experience</li><li>Attention to detail and an “All In” attitude</li><li>Flexibility to work days, nights, weekends, and holidays</li><li>Physical ability to reset rooms (lift up to 50 lbs) and keep pace with operations</li><li>Must successfully pass a professional background screen</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>A fun, casual, family-friendly environment (where quirkiness, costumes, and humor are a plus!)</li><li>Work-Life Balance! (Typical 4-hour work shifts between the hours of 11am – 8p or 9pm)</li><li>Career growth opportunities, competitive wages, a 90-day pay incentive and paid quarterly bonuses</li><li>A workplace that values authenticity, teamwork, and guest-centered hospitality</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p>',
    jobLocation: "Raleigh, NC",
    locationSlug: "raleigh-nc",
  },
  {
    positionName: "Sales Lead",
    schedule: "Full-Time",
    workPlace: "On-Site",
    jobType: "Guest Experience",
    openingFor: 1,
    description:
      '<p>Since 2014, All In Adventures has connected families, friends, coworkers, and students through live interactive experiences. We are looking for an energetic, goal-driven&nbsp;<strong>Sales Lead</strong> to take our store growth to the next level - offering a career step up from our Game Master role without any administrative or staff management duties.</p><h3><strong>WHEN YOU BECOME OUR SALES LEAD, YOU:</strong></h3><ul><li><strong>Close Inbound Leads:&nbsp;</strong>Actively respond to and convert inbound phone calls, web inquiries, and emails for corporate team-building events, birthday parties, and large group bookings.&nbsp;&nbsp;</li><li><strong>Hunt for Outbound Sales:&nbsp;</strong>Prospect local businesses, schools, community organizations, and event planners to build new relationships and generate outbound leads.&nbsp;&nbsp;</li><li><strong>Rally the Team:</strong> Inspire, motivate, and champion sales initiatives across the store team, focusing heavily on member sign-ups for our Rewards program and on-floor upselling.&nbsp;&nbsp;</li><li><strong>Drive the 3 Rs:</strong> Focus on hitting key store metrics across Revenue, Reviews &amp; Rewards enrollment, and maintaining store Responsibilities.&nbsp;&nbsp;</li><li><strong>Lead by Example:</strong> Model confident upselling techniques and customer service excellence on the floor.&nbsp;&nbsp;</li><li><strong>Support Daily Operations:</strong> Jump in as a Game Master to greet guests, run rooms, or handle resets whenever extra support is needed on shift.customer/employee interaction.</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>1+ years of experience in retail sales, customer service, or hospitality (Game Master experience is a strong plus).&nbsp;&nbsp;</li><li>Proven track record or passion for upselling, outbound outreach, and closing sales leads.&nbsp;&nbsp;</li><li>Outstanding communication skills, both written and verbal, with a persuasive phone and in-person presence.&nbsp;&nbsp;</li><li>High energy, self-starter mentality, and a positive "All In" attitude.&nbsp;&nbsp;</li><li>Flexibility to work varied shifts including days, nights, weekends, and holidays as required.&nbsp;&nbsp;</li><li>High School diploma (or GED) and successful completion of a background screen.&nbsp;</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>A fun, casual, family-friendly environment (where quirkiness, costumes, and humor are a plus!)</li><li>Work-Life Balance! (Typical 4-hour work shifts between the hours of 11am – 8p or 9pm)</li><li>Career growth opportunities, competitive wages, a 90-day pay incentive and paid quarterly bonuses</li><li>A workplace that values authenticity, teamwork, and guest-centered hospitality</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p><p><i>The above statements are intended to describe the general nature and level of work being performed by individuals assigned to this job. They are not intended to be an exhaustive list of all responsibilities, duties and skills required of personnel so classified in this position.&nbsp; Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.</i></p>',
    jobLocation: "Albany, NY",
    locationSlug: "albany-ny",
  },
  {
    positionName: "Sales Lead",
    schedule: "Full-Time",
    workPlace: "On-Site",
    jobType: "Guest Experience",
    openingFor: 1,
    description:
      '<p>Since 2014, All In Adventures has connected families, friends, coworkers, and students through live interactive experiences. We are looking for an energetic, goal-driven&nbsp;<strong>Sales Lead</strong> to take our store growth to the next level - offering a career step up from our Game Master role without any administrative or staff management duties.</p><h3><strong>WHEN YOU BECOME OUR SALES LEAD, YOU:</strong></h3><ul><li><strong>Close Inbound Leads:&nbsp;</strong>Actively respond to and convert inbound phone calls, web inquiries, and emails for corporate team-building events, birthday parties, and large group bookings.&nbsp;&nbsp;</li><li><strong>Hunt for Outbound Sales:&nbsp;</strong>Prospect local businesses, schools, community organizations, and event planners to build new relationships and generate outbound leads.&nbsp;&nbsp;</li><li><strong>Rally the Team:</strong> Inspire, motivate, and champion sales initiatives across the store team, focusing heavily on member sign-ups for our Rewards program and on-floor upselling.&nbsp;&nbsp;</li><li><strong>Drive the 3 Rs:</strong> Focus on hitting key store metrics across Revenue, Reviews &amp; Rewards enrollment, and maintaining store Responsibilities.&nbsp;&nbsp;</li><li><strong>Lead by Example:</strong> Model confident upselling techniques and customer service excellence on the floor.&nbsp;&nbsp;</li><li><strong>Support Daily Operations:</strong> Jump in as a Game Master to greet guests, run rooms, or handle resets whenever extra support is needed on shift.customer/employee interaction.</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>1+ years of experience in retail sales, customer service, or hospitality (Game Master experience is a strong plus).&nbsp;&nbsp;</li><li>Proven track record or passion for upselling, outbound outreach, and closing sales leads.&nbsp;&nbsp;</li><li>Outstanding communication skills, both written and verbal, with a persuasive phone and in-person presence.&nbsp;&nbsp;</li><li>High energy, self-starter mentality, and a positive "All In" attitude.&nbsp;&nbsp;</li><li>Flexibility to work varied shifts including days, nights, weekends, and holidays as required.&nbsp;&nbsp;</li><li>High School diploma (or GED) and successful completion of a background screen.&nbsp;</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>A fun, casual, family-friendly environment (where quirkiness, costumes, and humor are a plus!)</li><li>Work-Life Balance! (Typical 4-hour work shifts between the hours of 11am – 8p or 9pm)</li><li>Career growth opportunities, competitive wages, a 90-day pay incentive and paid quarterly bonuses</li><li>A workplace that values authenticity, teamwork, and guest-centered hospitality</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p><p><i>The above statements are intended to describe the general nature and level of work being performed by individuals assigned to this job. They are not intended to be an exhaustive list of all responsibilities, duties and skills required of personnel so classified in this position.&nbsp; Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.</i></p>',
    jobLocation: "Bowie, MD",
    locationSlug: "bowie-md",
  },
  {
    positionName: "Sales Lead",
    schedule: "Full-Time",
    workPlace: "On-Site",
    jobType: "Guest Experience",
    openingFor: 4,
    description:
      '<p>Since 2014, All In Adventures has connected families, friends, coworkers, and students through live interactive experiences. We are looking for an energetic, goal-driven&nbsp;<strong>Sales Lead</strong> to take our store growth to the next level - offering a career step up from our Game Master role without any administrative or staff management duties.</p><h3><strong>WHEN YOU BECOME OUR SALES LEAD, YOU:</strong></h3><ul><li><strong>Close Inbound Leads:&nbsp;</strong>Actively respond to and convert inbound phone calls, web inquiries, and emails for corporate team-building events, birthday parties, and large group bookings.&nbsp;&nbsp;</li><li><strong>Hunt for Outbound Sales:&nbsp;</strong>Prospect local businesses, schools, community organizations, and event planners to build new relationships and generate outbound leads.&nbsp;&nbsp;</li><li><strong>Rally the Team:</strong> Inspire, motivate, and champion sales initiatives across the store team, focusing heavily on member sign-ups for our Rewards program and on-floor upselling.&nbsp;&nbsp;</li><li><strong>Drive the 3 Rs:</strong> Focus on hitting key store metrics across Revenue, Reviews &amp; Rewards enrollment, and maintaining store Responsibilities.&nbsp;&nbsp;</li><li><strong>Lead by Example:</strong> Model confident upselling techniques and customer service excellence on the floor.&nbsp;&nbsp;</li><li><strong>Support Daily Operations:</strong> Jump in as a Game Master to greet guests, run rooms, or handle resets whenever extra support is needed on shift.customer/employee interaction.</li></ul><h3><strong>WHAT WE’RE LOOKING FOR:</strong></h3><ul><li>1+ years of experience in retail sales, customer service, or hospitality (Game Master experience is a strong plus).&nbsp;&nbsp;</li><li>Proven track record or passion for upselling, outbound outreach, and closing sales leads.&nbsp;&nbsp;</li><li>Outstanding communication skills, both written and verbal, with a persuasive phone and in-person presence.&nbsp;&nbsp;</li><li>High energy, self-starter mentality, and a positive "All In" attitude.&nbsp;&nbsp;</li><li>Flexibility to work varied shifts including days, nights, weekends, and holidays as required.&nbsp;&nbsp;</li><li>High School diploma (or GED) and successful completion of a background screen.&nbsp;</li></ul><h3><strong>WHY YOU’LL LOVE IT HERE:</strong></h3><ul><li>A fun, casual, family-friendly environment (where quirkiness, costumes, and humor are a plus!)</li><li>Work-Life Balance! (Typical 4-hour work shifts between the hours of 11am – 8p or 9pm)</li><li>Career growth opportunities, competitive wages, a 90-day pay incentive and paid quarterly bonuses</li><li>A workplace that values authenticity, teamwork, and guest-centered hospitality</li></ul><h3><strong>READY TO GO ALL IN?</strong></h3><p><i><strong>Don’t let the clock run out on this opportunity. Apply by uploading your resume for immediate consideration today!</strong></i></p><p><i>The above statements are intended to describe the general nature and level of work being performed by individuals assigned to this job. They are not intended to be an exhaustive list of all responsibilities, duties and skills required of personnel so classified in this position.&nbsp; Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.</i></p>',
    jobLocation: "Holyoke, MA",
    locationSlug: "holyoke-ma",
  },
];

const lst = [
  {
    id: 3,
    attributes: {
      positionName: "Game Master",
      Slug: "game-master",
      createdAt: "2026-09-20T14:12:00.528Z",
      updatedAt: "2026-09-20T14:12:22.887Z",
      publishedAt: "2026-09-20T14:12:22.883Z",
    },
  },
  {
    id: 1,
    attributes: {
      positionName: "Sales Lead",
      Slug: "sales-lead",
      createdAt: "2026-09-20T14:08:41.745Z",
      updatedAt: "2026-09-20T14:14:36.543Z",
      publishedAt: "2026-09-20T14:08:48.975Z",
    },
  },
  {
    id: 2,
    attributes: {
      positionName: "Part-Time Assistant Manager",
      Slug: "part-time-assistant-manager",
      createdAt: "2026-09-20T14:09:20.349Z",
      updatedAt: "2026-09-20T14:22:10.985Z",
      publishedAt: "2026-09-20T14:22:10.978Z",
    },
  },
  {
    id: 4,
    attributes: {
      positionName: "Store Manager",
      Slug: "store-manager",
      createdAt: "2026-09-20T14:22:38.701Z",
      updatedAt: "2026-09-20T14:22:41.254Z",
      publishedAt: "2026-09-20T14:22:41.249Z",
    },
  },
];
