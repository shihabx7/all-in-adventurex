const StaticSubmenu = () => {
  return (
    <div className="submenu-content text-light-gold md:text-lg">
      <div className="submenu-item ">
        <a
          href="/gift-cards"
          className="flex items-center space-x-2 md:space-x-3"
        >
          <span className="sub-link-txt">Gift Cards</span>
          <span>
            <img
              className="max-w-[26px] md:max-w-[28px]"
              src="/assets/gift-images/hero/gift-card-icon-for-title.svg"
              alt=" All in Adventures gift card icon showcasing a vibrant design, symbolizing adventure and excitement in gift-giving."
            ></img>
          </span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/unlimited-play-pass" className="flex items-center">
          <span className="sub-link-txt">Unlimited Play Pass</span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/pricing" className="flex items-center">
          <span className="sub-link-txt">Pricing</span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/deals-coupons" className="flex items-center">
          <span className="sub-link-txt">Deals and Coupons</span>
        </a>
      </div>

      <div className="submenu-item">
        <a href="/testimonials" className="flex items-center">
          <span className="sub-link-txt">Testimonials</span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/gallery" className="flex items-center">
          <span className="sub-link-txt">Customer Gallery</span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/blog" className="flex items-center">
          <span className="sub-link-txt">Blog</span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/faqs" className="flex items-center">
          <span className="sub-link-txt">FAQs</span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/about" className="flex items-center">
          <span className="sub-link-txt">About Us</span>
        </a>
      </div>

      <div className="submenu-item">
        <a href="/what-is-an-escape-room" className="flex items-center">
          <span className="sub-link-txt">What is an Escape Room</span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/careers" className="flex items-center">
          <span className="sub-link-txt">Careers</span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/volunteering" className="flex items-center">
          <span className="sub-link-txt">Volunteering</span>
        </a>
      </div>
      <div className="submenu-item">
        <a href="/franchise" className="flex items-center">
          <span className="sub-link-txt">Become a Franchise Owner</span>
        </a>
      </div>

      <div className="submenu-item">
        <a href="/corporate-contact" className="flex items-center">
          <span className="sub-link-txt">Contact Us</span>
        </a>
      </div>
    </div>
  );
};

export default StaticSubmenu;
