import Head from "next/head";
import React from "react";
import ProfileIcon from "../../../public/favicon.ico";

const Layout = ({ title = "Veerbal Singh", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Add title icon */}
        <link rel="icon" href={ProfileIcon.src} />
      </Head>
      {children}
    </>
  );
};

export default Layout;
