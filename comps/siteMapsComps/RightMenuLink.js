import AllBlogsLink from "./AllBlogsLink";
import CareersLink from "./CareersLink";
import AllBlogCategoryLink from "./AllBlogCategoryLink";
const RightMenuLink = (props) => {
  return (
    <div className={"left-static-map"}>
      <ul className="site-map-link-group list-disc">
        <li className="my-2">
          <a
            href={"/testimonials"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Testimonials
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/gallery"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Customer Gallery
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/pricing"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Pricing
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/deals-coupons"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Deals and Coupons
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/unlimited-play-pass"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Unlimited Play Pass
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/blog"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Blog
          </a>
          {props.blogCategoryList ? (
            <AllBlogCategoryLink blogCategoryList={props.blogCategoryList} />
          ) : (
            <></>
          )}
          {props.blogLinkList ? (
            <AllBlogsLink blogLinkList={props.blogLinkList} />
          ) : (
            <></>
          )}
        </li>
        <li className="my-2">
          <a
            href={"/faqs"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Faq
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/about"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            About Us
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/what-is-an-escape-room"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            What Is An Escape Room
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/answers"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Answers
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/careers"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Careers
          </a>
          {props.blogLinkList ? (
            <CareersLink careersLinkList={props.careersLinkList} />
          ) : (
            <></>
          )}
        </li>
        <li className="my-2">
          <a
            href={"/volunteering"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Volunteering
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/franchise"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Become a Franchise Owner
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/franchise-contact"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Franchise Contact
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/corporate-contact"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Corporate Contact
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/privacy-policy"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Privacy Policy
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/terms-of-services"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Terms of services
          </a>
        </li>
        <li className="my-2">
          <a
            href={"/job-application-disclaimer-policy"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Job Application Disclaimer Policy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RightMenuLink;
