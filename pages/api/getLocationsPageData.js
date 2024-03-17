import { getALlActivityList } from "./getAllActivityList";
import { getAllEventList } from "./getAllEventList";
import { getVirtualGameSlug } from "./VirtualGames/getVirtualGameSlug";

export const getLocationsPageData = () => {
  const data = {
    activitylistSlug: getALlActivityList(),
    eventlistSlug: getAllEventList(),
    virtualgameSlug: getVirtualGameSlug(),

    states: [
      //========================================== ============1 Ny Satate
      {
        id: 1,
        state: "NY",
        state_name: "NEW YORK",
        cities: [
          {
            id: 1,
            city: "Albany",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield and many more!",
            entry_guid:
              "Use the 2nd floor mall entrance between the J.C.Penney and Qlz, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",

            payment_options:
              "We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            address: "All In Adventures Escape Rooms 1 Crossgates Mall Rd D212",
            zip: "12203",
            fivestar: "2000+",
            total_rev: "1603",
            avg_rev: "4.7",
            player_escaped: "40K+",
            phone: "+1 518-240-8243",
            b_uid: "4fc2ae1b62734a6e8d9e85cbd613ca0f",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-albany-ny-crossgates-mall-hero.jpg",
            mall: "Crossgates Mall",
            alt: "allinadventures-escape-room-albany-ny-crossgates-mall-hero",
            slug: "albany-ny",
            email: "store103@allinadventures.com",
            mgremail: "mgr103@allinadventures.com",
            position: { lat: 42.68864732142058, lng: -73.84926834853168 },
            place_id: "ChIJuxg7Xc503okRxZ1LxvkZ8nA",
            hours: [
              {
                day: "monday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],

            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "10 am",
                close: "5 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "8 pm",
              },
            ],
          },
          {
            id: 2,
            city: "Buffalo",
            publish_status: false,
            address: "Escape the Mystery Room 1 Walden Galleria",
            city_include:
              "Our customers come from many surrounding cities, including North Tonawanda, Cheektowaga, Medina, Hamburg, Amherst and many more!",
            entry_guid:
              "Our store is located on the 1st floor near Macy's, next to Foot Locker.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            zip: "14225",
            fivestar: "4600+",
            total_rev: "4279",
            avg_rev: "4.9",
            player_escaped: "92K+",
            phone: "+1 716-216-0404",
            b_uid: "544654148f8b4be487ab85731a26457d",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero.jpg",
            mall: "Walden Galleria",
            alt: "allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero",
            slug: "buffalo-ny",
            email: "store108@allinadventures.com",
            mgremail: "mgr108@allinadventures.com",
            position: { lat: 42.91374206378291, lng: -78.76334390613431 },
            place_id: "ChIJiamJ670M04kRnATe_FP3GpM",
            hours: [
              {
                day: "monday",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                day: "tuesday",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                day: "wednesday",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                day: "thursday",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                day: "friday",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                day: "saturday",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                day: "sunday",
                open: "Temporarily Closed",
                close: "-",
              },
            ],

            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "Temporarily Closed",
                close: "-",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "Temporarily Closed",
                close: "-",
              },
            ],
          },
          {
            id: 3,
            city: "Middletown",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Vernon, Newton, West Nyack, Poughkeepsie, Newburgh and many more!",
            entry_guid:
              "Our store is located on the 2nd floor. We are between H&M and American Eagle clothing stores.",
            payment_options:
              "We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            address: "Escape the Mystery Room 1 Galleria Dr Suite 211",
            slug: "middletown-ny",
            zip: "10941",
            fivestar: "1100+",
            total_rev: "716",
            avg_rev: "4.7",
            player_escaped: "44K+",
            phone: "+1 845-202-9010",
            b_uid: "c78436588d1e4a02a7b15efc3a428a18",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero.jpg",
            mall: "Galleria at Crystal Run",
            alt: "allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero",
            email: "store105@allinadventures.com",
            mgremail: "mgr105@allinadventures.com",
            position: { lat: 41.45363270695026, lng: -74.36922294740248 },
            place_id: "ChIJvbQVehktw4kR_5WQJyhK8gI",
            hours: [
              {
                day: "monday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "11 am",
                close: "5 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "8 pm",
              },
            ],
          },
          {
            id: 4,
            city: "Syracuse",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Auburn, Oneida, Oswego, New York and many more!",
            entry_guid:
              "Our store is on the 2nd floor right next to Eddie Bauer. You can use the entrance by the Cheesecake Factory.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "syracuse-ny",
            address: "Escape the Mystery Room 9090 Destiny USA Dr K201",
            zip: "13204",
            fivestar: "5000+",
            total_rev: "2798",
            avg_rev: "4.8",
            player_escaped: "193K+",
            phone: "+1 315-423-5000",
            b_uid: "57c2d1d5139042a8993b262968364733",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero.jpg",
            mall: "Destiny USA",
            alt: "allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero",
            email: "store107@allinadventures.com",
            mgremail: "mgr107@allinadventures.com",
            position: { lat: 43.06767621959459, lng: -76.17118567617027 },
            place_id: "ChIJTchRFyzy2YkRPPLmOXKooyo",
            hours: [
              {
                day: "monday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "tuesday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "wednesday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "thursday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "friday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],

            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "11 am",
                close: "5 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "11 am",
                close: "6 pm",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "9 pm",
              },
            ],
          },
          {
            id: 5,
            city: "Watertown",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Belleville, Clayton, Dexter, Oswego, Limerick and many more!",
            entry_guid:
              "Our Store is located near Hobby Lobby, across from Billy Beez.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            address:
              "Escape the Mystery Room 21182 Salmon Run Mall Loop W Suite D",
            slug: "watertown-ny",
            zip: "13601",
            fivestar: "700+",
            total_rev: "430",
            avg_rev: "4.7",
            player_escaped: "14K+",
            phone: "+1 315-965-8010",
            b_uid: "6fb541ac4d0445608e5169c95c142791",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-watertown-ny-salmon-run-mall-hero.jpg",
            mall: "Salmon Run Mall",
            alt: "allinadventures-escape-room-watertown-ny-salmon-run-mall-hero",
            email: "store106@allinadventures.com",
            mgremail: "mgr106@allinadventures.com",
            position: { lat: 43.97782274724525, lng: -75.95355323380164 },
            place_id: "ChIJK0nCOylu2IkRxxYIjtbUQqQ",
            hours: [
              {
                day: "monday",
                open: "1 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "1 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "1 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "1 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "1 pm",
                close: "8 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "11 am",
                close: "5 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "1 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "1 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "11 am",
                close: "6 pm",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "1 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "1 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "1 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "1 pm",
                close: "8 pm",
              },
            ],
          },
          {
            id: 6,
            city: "West Nyack",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Montclair, Massapequa, White Plains, Morristown, Danbury and many more!",
            entry_guid:
              "Our store is located on the third floor three stores from bath and body works, the closest parking is located outside five star appliances. If you enter from five star appliances on the second floor come see us one floor up on level three across from five below.",
            entry_guid2:
              "Our Axe throwing store is also located on level three next to five below.",
            payment_options:
              "We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "west-nyack-ny",
            address: "Escape the Mystery Room 3681 Palisades Center Dr",
            zip: "10994",
            fivestar: "2200+ ",
            total_rev: "1317",
            avg_rev: "4.6",
            player_escaped: "47K+",
            phone: "+1 845-208-2919",
            b_uid: "08695bcfdbd0498d8cd25a03361cf80d",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-west-nyack-ny-palisades-mall-hero.jpg",
            mall: "Palisades Center",
            alt: "allinadventures-escape-room-west-nyack-ny-palisades-mall",
            email: "store101@allinadventures.com",
            mgremail: "mgr101@allinadventures.com",
            position: { lat: 41.09759245605328, lng: -73.95495644741696 },
            place_id: "ChIJiz-TgebpwokRElXoiNqtbeE",
            hours: [
              {
                day: "monday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "7 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "11 am",
                close: "7 pm",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "8 pm",
              },
            ],
          },
          {
            id: 7,
            city: "Poughkeepsie",
            city_include:
              "Our customers come from many surrounding cities, including Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield and many more!",
            publish_status: true,
            entry_guid: "Upstairs from 110 Grill.",
            payment_options:
              "We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "poughkeepsie-ny",
            address: "All In Adventures Escape Rooms 2001 South Rd Space C205",
            zip: "12601",
            fivestar: "500+",
            total_rev: "361",
            avg_rev: "4.8",
            player_escaped: "11K+",
            phone: "+1 845-218-0002",
            b_uid: "4839a23169024bc8932f64b6d1f2c504",
            coverimg:
              "/assets/mapcard/Poughkeepsie-ny-poughkeepsie-galleria.jpg",
            mall: "Poughkeepsie Galleria",
            alt: "allinadventures-escape-room-west-nyack-ny-palisades-mall",
            email: "store149@allinadventures.com",
            mgremail: "mgr149@allinadventures.com",
            position: { lat: 41.62672160776893, lng: -73.92087242001219 },
            place_id: "ChIJdaEpYZI53YkRf3OB1Cnqgz0",
            hours: [
              {
                day: "monday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "11 am",
                close: "5 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "8 pm",
              },
            ],
          },
        ],
      },
      //========================================== ============1 Ny Satate end
      //========================================== 2 NORTH CAROLINA
      {
        id: 2,
        state: "NC",
        state_name: "NORTH CAROLINA",
        cities: [
          {
            id: 1,
            city: "Raleigh",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Chapel Hill, Morrisville, Carrboro, Cary, Apex, Holly Springs, Zebulon, Wake Forest, Hillsborough, Pittsboro and many more!",
            entry_guid:
              "We are right off exit 17 on Interstate-540, and directly off of Capital Blvd. behind Best Buy. We are attached on the outside of the mall next to Barnes & Noble.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "raleigh-nc",
            address:
              "All In Adventures Escape Rooms 5959 Triangle Town Blvd Space EU 2113",
            zip: "27616",
            fivestar: "1500+",
            total_rev: "737",
            avg_rev: "4.6",
            player_escaped: "30K+",
            phone: "+1 919-205-5008",
            b_uid: "32cdb7144e66428bbc9af9393a94d362",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero.jpg",
            mall: "Triangle Town Center",
            alt: "allinadventures-escape-room-raleigh-nc-triangle-town-center-mall",
            email: "store123@allinadventures.com",
            mgremail: "mgr123@allinadventures.com",
            position: { lat: 35.86645773496303, lng: -78.57430228994644 },
            place_id: "ChIJ9YSANOJZrIkRMjidQFrtx7Q",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "10 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "12 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "8 pm",
              },
            ],
          },
        ],
      },
      //========================================== 2 NORTH CAROLINA end

      //========================================== 4 MASSACHUSETTS
      {
        id: 4,
        state: "MA",
        state_name: "MASSACHUSETTS",
        cities: [
          {
            id: 1,
            city: "Hadley",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Easthampton, Windsor Locks, Amherst, Gardner, Northampton and many more!",
            entry_guid:
              "Our store is located between Pinz and Jo~Ann Fabric, across from Body Spa and Elite Tae Kwon Do.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "hadley-ma",
            address: "All In Adventures Escape Rooms 367 Russell St A07",
            zip: "01035",
            fivestar: "600+",
            total_rev: "402",
            avg_rev: "4.8",
            player_escaped: "18K+",
            phone: "+1 413-825-9777",
            b_uid: "fd585cfcb0ae4d7f8179dd084d3c7f14",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-hadley-ma-hampshire-mall-hero.jpg",
            mall: "Hampshire Mall",
            alt: "allinadventures-escape-room-hadley-ma-hampshire-mall-hero",
            email: "store113@allinadventures.com",
            mgremail: "mgr113@allinadventures.com",
            position: { lat: 42.35706401455254, lng: -72.54730672272471 },
            place_id: "ChIJb66XXJLR5okRXo6wmC6sZck",
            hours: [
              {
                day: "monday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "sunday",
                open: "12:30 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "11 am",
                close: "5 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "8 pm",
              },
            ],
          },
          {
            id: 2,
            city: "Holyoke",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Worcester, Williamsburg, Chesterfield, Easthampton and many more!",
            entry_guid:
              "Our store is located on the 1st floor across from Gap and Hobby Lobby. The best entrance is to the left of Round 1.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "holyoke-ma",
            address: "All In Adventures Escape Rooms 50 Holyoke St Space F292",
            zip: "01040",

            fivestar: "400+",
            total_rev: "361",
            avg_rev: "4.3",
            player_escaped: "13K+",
            phone: "+1 413-200-9777",
            b_uid: "0c3dbc2e3a7340ba9f598fd150cc38f8",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-holyoke-ma-holyoke-mall-hero.jpg",
            mall: "Holyoke Mall",
            alt: "allinadventures-escape-room-holyoke-ma-holyoke-mall-hero",
            email: "store114@allinadventures.com",
            mgremail: "mgr114@allinadventures.com",
            position: { lat: 42.167288613098336, lng: -72.64114900319692 },
            place_id: "ChIJMdHbxZ_e5okR8-xIADT8zS8",
            hours: [
              {
                day: "monday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "12 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "11 am",
                close: "5 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "8 pm",
              },
            ],
          },
          {
            id: 3,
            city: "Kingston",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Boston, New Bedford, Plymouth, Falmouth, MA and many more!",
            entry_guid:
              "Our store is located around the corner from the Target entrance, across from Lenscrafters and next to Garden Essence.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "kingston-ma",
            address:
              "Escape the Mystery Room+1 Kingston Collection Way Unit B106",
            zip: "02364",

            fivestar: "500+",
            total_rev: "384",
            avg_rev: "4.6",
            player_escaped: "26K+",
            phone: "+1 781-236-4933",
            b_uid: "18babca8503848fea92d33ed8f45fa83",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero.jpg",
            mall: " Kingston Collection",
            alt: "allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero",
            email: "store102@allinadventures.com",
            mgremail: "mgr102@allinadventures.com",
            position: { lat: 41.97211058229212, lng: -70.71592925397754 },
            place_id: "ChIJy_lMjV-75IkRvfGB0RHQtIs",

            hours: [
              {
                day: "monday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "tuesday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "wednesday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "thursday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "friday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "11 am",
                close: "5 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "11 am",
                close: "9 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "9 pm",
              },
            ],
          },
          {
            id: 4,
            city: "N. Attleborough",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Auburn, Boston, New Bedford and many more!",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            entry_guid:
              "Our store is on the 2nd floor near the main Macy's store (not Macy's Men's store).",
            slug: "n-attleborough-ma",
            address: "Escape the Mystery Room 999 S Washington St W213",
            zip: "02760",

            fivestar: "500+",
            total_rev: "402",
            avg_rev: "4.7",
            player_escaped: "28K+",
            phone: "+1 508-695-3100",
            b_uid: "8b631dac8b8e4614b1479de58de8fd00",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg",
            mall: "Emerald Square Mall",
            alt: "allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero",
            email: "store110@allinadventures.com",
            mgremail: "mgr110@allinadventures.com",
            position: { lat: 41.94622582736842, lng: -71.35001918971176 },
            place_id: "ChIJhcaorIln5IkR5Vr3jcfYytk",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "11 am",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "9 pm",
              },
            ],
          },
        ],
      },
      //========================================== 4 MASSACHUSETTS end
      //========================================== 5 CONNECTICUT
      {
        id: 5,
        state: "CT",
        state_name: "CONNECTICUT",
        cities: [
          {
            id: 1,
            city: "Milford",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including New Haven, Stamford, Danbury, Middletown, and many more! ",
            entry_guid:
              "Customers can find the store fastest by entering the mall from the front or the back, near Target. You are on the lower level. Head up the main mall corridor and we are on the right, between Track 23 and Snipes.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "milford-ct",
            address:
              "All In Adventures Escape Rooms 1201 Boston Post Rd Suite 1220",
            zip: "06460",

            fivestar: "1800+",
            total_rev: "1266",
            avg_rev: "4.9",
            player_escaped: "37K+",
            phone: "+1 203-290-1916",
            b_uid: "084e7f2381b04d689960cc4161935ed7",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-milford-ct-connecticut-post-mall-hero.jpg",
            mall: "Connecticut Post Mall",
            alt: "allinadventures-escape-room-milford-ct-connecticut-post-mall",
            email: "store109@allinadventures.com",
            mgremail: "mgr109@allinadventures.com",
            position: { lat: 41.23520081289261, lng: -73.0368182474114 },
            place_id: "ChIJYUelFVd06IkRQ25xbocqD2g",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "10 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "8 pm",
              },
            ],
          },
          {
            id: 2,
            city: "Manchester",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Hartford, West Hartford, Middletown, Windsor Locks, Bristol, New Britain and many more!",
            entry_guid:
              "Our Store is located on the 2nd floor at the end across from Track 23. The best entrance is next to Maggie McFly's, use the escalator closest to the entrance.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "manchester-ct",
            address: "All In Adventures Escape Rooms 194 Buckland Hills Dr",
            zip: "06042",

            fivestar: "600+",
            total_rev: "492",
            avg_rev: "4.6",
            player_escaped: "20K+",
            phone: "+1 860-414-3606",
            b_uid: "d9626bc988b940768ee6bd60acda7340",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero.jpg",
            mall: "The Shoppes at Buckland Hills",
            alt: "allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero",
            email: "store121@allinadventures.com",
            mgremail: "mgr121@allinadventures.com",
            position: { lat: 41.807809922350096, lng: -72.5470926320471 },
            place_id: "ChIJA0sLQb5X5okRxqbdxH7ECo0",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "12 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "8 pm",
              },
            ],
          },
        ],
      },
      //========================================== 5 CONNECTICUT end
      //========================================== 3 PENNSYLVANIA
      {
        id: 3,
        state: "PA",
        state_name: "PENNSYLVANIA",
        cities: [
          {
            id: 1,
            city: "Bensalem",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Philadelphia, King of Prussia, Doylestown, Princeton, NJ and many more!",
            entry_guid: "Our store is located on the AMC Theatre wing.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "bensalem-pa",
            address:
              "All In Adventures Escape Rooms 707 Neshaminy Mall Space 672",
            zip: "19020",
            fivestar: "1300+",
            total_rev: "864",
            avg_rev: "4.7",
            player_escaped: "26K+",
            phone: "+1 267-227-1101",
            b_uid: "d32fa93689b248c28ad3c40691e2ada6",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero.jpg",
            mall: "Neshaminy Mall",
            alt: "allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero",
            email: "store130@allinadventures.com",
            mgremail: "mgr130@allinadventures.com",
            position: { lat: 40.138761912469036, lng: -74.9541422897852 },
            place_id: "ChIJ9-utS69SwYkR9IMNi45tMxg",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "8 pm",
              },
            ],
          },
        ],
      },
      //========================================== 3 PENNSYLVANIA end
      //========================================== 6 Marryland

      {
        id: 6,
        state: "MD",
        state_name: "MARYLAND",
        cities: [
          {
            id: 1,
            city: "Bowie",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Glenn Dale, Crofton, Greenbelt, South Laurel, Mitchellville, New Carrollton, Odenton, Beltsville, Laurel, East Riverdale, College Park, Kettering, Largo, Hyattsville, Severn and many more!",
            entry_guid:
              "Our store is located across from GNC and directly next to Gold USA.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "bowie-md",
            address: "All In Adventures Escape Rooms 15421 Emerald Way",
            zip: "20716",
            fivestar: "1300+",
            total_rev: "684",
            avg_rev: "4.8",
            player_escaped: "27K+",
            phone: "+1 240-245-6911",
            b_uid: "c291a32e29f54d8dbafe05d862bc3f2c",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero.jpg",
            mall: "Bowie Town Center",
            alt: "allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero",
            email: "store145@allinadventures.com",
            mgremail: "mgr145@allinadventures.com",
            position: { lat: 38.94439031588384, lng: -76.7364338744912 },
            place_id: "ChIJ-RClFGPrt4kRH4oXN7sDbIg",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "12 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "9 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "9 pm",
              },
            ],
          },
          {
            id: 2,
            city: "White Marsh",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Perry Hall, Rossville, Middle River, Overlea, Carney, Parkville, Essex, Rosedale, Towson, Joppatowne, Edgewood, Dundalk, Edgemere, Baltimore, Mays Chapel and many more!",
            entry_guid:
              "Our Store is located on the Upper Level next to JC Penny.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "white-marsh-md",
            address: "All In Adventures Escape Rooms 8200 Perry Hall Blvd",
            zip: "21236",
            fivestar: "1500+",
            total_rev: "860",
            avg_rev: "4.8",
            player_escaped: "32K+",
            phone: "+1 410-441-5955",
            b_uid: "ad62a4bc27bf471e80eb1eb90aba7cc5",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero.jpg",
            mall: "White Marsh Mall",
            alt: "allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero",
            email: "store118@allinadventures.com",
            mgremail: "mgr118@allinadventures.com",

            position: { lat: 39.37628236535558, lng: -76.46849181680405 },
            place_id: "ChIJr2ltJz0IyIkRGQ5TWpCKWLw",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "sunday",
                open: "12 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "8 pm",
              },
            ],
          },
        ],
      },
      //========================================== 6 Maryland end
      //========================================== New jarsey
      {
        id: 7,
        state: "NJ",
        state_name: "NEW JERSEY",
        cities: [
          {
            id: 1,
            city: "East Brunswick",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including South River, Sayreville, North Brunswick, New Brunswick, Highland Park, Old Bridge, Edison, Somerset, Metuchen, Fords, Perth Amboy, South Plainfield, Woodbridge, Iselin, Middlesex and many more!",
            entry_guid: "Our store is near JCPenny, across from Sketchers.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "east-brunswick-nj",
            address: "All In Adventures Escape Rooms 755 NJ-18 Space 544",
            zip: "08816",

            fivestar: "300+",
            total_rev: "142",
            avg_rev: "4.7",
            player_escaped: "7K+",
            phone: "+1 732-201-7285",
            b_uid: "981474b9a9994946afa7fcc7fdcef69d",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall-hero.jpg",
            mall: "Brunswick Square",
            alt: "aallinadventures-escape-room-east-brunswick-nj-brunswick-square-mall",
            email: "store148@allinadventures.com",
            mgremail: "mgr148@allinadventures.com",
            position: { lat: 40.424106924046534, lng: -74.38253578977378 },
            place_id: "ChIJuzAuEJHPw4kRtUbwFGpfJvs",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "2 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "2 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "2 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "saturday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "sunday",
                open: "12 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "2 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "2 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "8 pm",
              },
            ],
          },
          {
            id: 2,
            city: "Rockaway",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Andover, Dover, Livingston, Morristown, Newark, New Jersey and many more!",
            entry_guid:
              "Our store is on the lower level near the mall entrance by JC Penny.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "rockaway-nj",
            address: "Escape+the Mystery Room 301 Mt Hope Ave Suite 1001c",
            zip: "07866",

            fivestar: "1000+",
            total_rev: "402",
            avg_rev: "4.7",
            player_escaped: "24K+",
            phone: "+1 862-244-3062",
            b_uid: "f44827aa62c544f58eb5510b38f95f3c",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall-hero.jpg",
            mall: "Rockaway Townsquare",
            alt: "allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall",
            email: "store112@allinadventures.com",
            mgremail: "mgr112@allinadventures.com",
            position: { lat: 40.9072859936015, lng: -74.55351926276555 },
            place_id: "ChIJjxDceFgKw4kRgSVDKaDW5PQ",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "8 pm",
              },
            ],
          },
          {
            id: 3,
            city: "Woodbridge",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Avenel, Colonia, Fords, Iselin, Carteret, Rahway, Perth Amboy, Metuchen, Linden, Clark, Roselle, South Plainfield, Cranford, Edison, Scotch Plains and many more!",
            entry_guid:
              "Our store is in the lower level of the JCPenney & Boscov wing.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "woodbridge-nj",
            address:
              "Adventures Escape Rooms 250 Woodbridge Center Dr Suite 2285",
            zip: "07095",

            fivestar: "600+",
            total_rev: "387",
            avg_rev: "4.7",
            player_escaped: "23K+",
            phone: "+1 732-351-2772",
            b_uid: "01211af1da0c4ed3b90b346cfd6db1c8",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero.jpg",
            mall: "Woodbridge Center",
            alt: "allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero",
            email: "store128@allinadventures.com",
            mgremail: "mgr128@allinadventures.com",
            position: { lat: 40.55613745773028, lng: -74.29763677627409 },
            place_id: "ChIJIZWcZM61w4kRYU_SAUi3Ay0",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "1 pm",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "12 pm",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "12 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "8 pm",
              },
            ],
          },
        ],
      },
      //========================================== New jarsey end

      //========================================== 9 VIRGINIA
      {
        id: 9,
        state: "VA",
        state_name: "VIRGINIA",
        cities: [
          {
            id: 1,
            city: "Roanoke",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Blacksburg, Christiansburg, Salem and many more!",
            entry_guid:
              "We are inside the mall beside Sears and the food court.",
            payment_options:
              "We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "roanoke-va",
            address:
              "All In Adventures Escape Rooms 4802 Valley View Blvd NW Space LD 150",
            zip: "24012",

            fivestar: "1100+",
            total_rev: "768",
            avg_rev: "4.8",
            player_escaped: "21K+",

            phone: "+1 540-920-2253",
            b_uid: "80da445abe054678b64f5c03def262f0",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-roanoke-va-valley-view-mall-hero.jpg",
            mall: "Valley View Mall",
            alt: "allinadventures-escape-room-roanoke-va-valley-view-mall-hero",
            email: "store129@allinadventures.com",
            mgremail: "mgr129@allinadventures.com",
            position: { lat: 37.30350364111658, lng: -79.9631108 },
            place_id: "ChIJQdz7XocOTYgRR9n2TUfP6pY",
            hours: [
              {
                day: "monday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "saturday",
                open: "12 pm",
                close: "8 pm",
              },
              {
                day: "sunday",
                open: "12 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "12 pm",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "12 pm",
                close: "8 pm",
              },
            ],
          },
        ],
      },
      //========================================== 9 VIRGINIA end
      //========================================== 11 GEORGIA
      {
        id: 11,
        state: "GA",
        state_name: "GEORGIA",
        cities: [
          {
            id: 1,
            city: "Lawrenceville",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Marietta, Alpharetta, Kennesaw, Loganville, Snellville, Suwanee, Duluth, Lilburn, Sugar Hill, Buford, Norcross, Tucker, Winder, Redan, Doraville,Chamblee, Monroe and many more!",
            entry_guid:
              "Our store is directly across the Bass Pro Shop inside the mall.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "lawrenceville-ga",
            address: "Escape the Mystery Room 5900 Sugarloaf Pkwy Unit 134",
            zip: "30043",

            fivestar: "3400+",
            total_rev: "2,695",
            avg_rev: "4.9",
            player_escaped: "70K+",
            phone: "+1 678-847-5002",
            b_uid: "5cce16b28a96404d898f5d66372a3acc",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero.jpg",
            mall: "Sugarloaf Mills",
            alt: "allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero",
            email: "store100@allinadventures.com",
            mgremail: "mgr100@allinadventures.com",
            position: { lat: 33.98048073987589, lng: -84.0831118 },
            place_id: "ChIJqTscPBa99YgRuujsmSJMn54",
            hours: [
              {
                day: "monday",
                open: "10 am",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "10 am",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "10 am",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "10 am",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "10 am",
                close: "9 pm",
              },
              {
                day: "saturday",
                open: "10 am",
                close: "9 pm",
              },
              {
                day: "sunday",
                open: "11 am",
                close: "7 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "10 am",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "10 am",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "10 am",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "10 am",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "10 am",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "10 am",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "10 am",
                close: "8 pm",
              },
            ],
          },
        ],
      },
      //========================================== 11 ga end
      //========================================== 10 OHIO
      {
        id: 10,
        state: "OH",
        state_name: "OHIO",
        cities: [
          {
            id: 1,
            city: "Columbus",
            publish_status: true,
            city_include:
              "Our customers come from many surrounding cities, including Bexley, Upper Arlington, Whitehall, Lincoln Village, Gahanna, Grove City, Blacklick Estates, Worthington, Hilliard, Reynoldsburg, Dublin, Westerville, Pickerington, Pataskala, Delaware and many more!",
            entry_guid:
              "Park in between Macy's & Fieldhouse USA. We are located across from Stash House and Go! Toys & Games on the upper level.",
            payment_options:
              "We accept Cash, Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.",
            slug: "columbus-oh",
            address:
              "All In Adventures Escape Rooms 1500 Polaris Pkwy Space 2252",
            zip: "43240",

            fivestar: "1600+",
            total_rev: "1212",
            avg_rev: "4.7",
            player_escaped: "32K+",

            phone: "+1 614-839-5858",
            b_uid: "6dae166134cf48e8b54ea03a3801acfe",
            coverimg:
              "/assets/mapcard/allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero.jpg",
            mall: " Polaris Fashion Place",
            alt: "allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero",
            email: "store147@allinadventures.com",
            mgremail: "mgr147@allinadventures.com",
            position: { lat: 40.145673407245866, lng: -82.98214343068119 },
            place_id: "ChIJMfvp3Dr1OIgRWZ9B-_69coY",
            hours: [
              {
                day: "monday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "tuesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "wednesday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "thursday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "friday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "saturday",
                open: "11 am",
                close: "8 pm",
              },
              {
                day: "sunday",
                open: "12 pm",
                close: "6 pm",
              },
            ],
            holiday_hours: [
              {
                holiday_name: "New Year's Day",
                date: "01/01/2024",
                open: "12 pm",
                close: "6 pm",
              },
              {
                holiday_name: "Martin Luther King Jr. Day",
                date: "01/15/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "President's Day",
                date: "02/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Easter",
                date: "03/31/2024",
                open: "Closed",
                close: "-",
              },
              {
                holiday_name: "Memorial Day",
                date: "05/27/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Juneteenth",
                date: "06/19/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Independence Day",
                date: "07/04/2024",
                open: "11 am",
                close: "8 pm",
              },
              {
                holiday_name: "Labor Day",
                date: "09/02/2024",
                open: "11 am",
                close: "8 pm",
              },
            ],
          },
        ],
      },
      //========================================== 10 OHIO end
    ],
  };

  return data;
};
