import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="p-2 dark:bg-black bg-[#ecf8f9] font-sans text-lg text-center">
      © Copyright {new Date().getFullYear()} Prasastia Resume
      </div>
    </Fragment>
  );
};

export default Footer;
