import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <div className="content">
      {children}

      <Script src="/custom.js"></Script>
    </div>
  );
};

export default Layout;
