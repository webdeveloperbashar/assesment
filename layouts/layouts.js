import Head from "next/head";
import React from "react";

const Layouts = ({ children }) => {
  return (
    <>
      <Head>
        <title>Edvora - Front End Development Project</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="main">
        {children}
      </div>
    </>
  );
};

export default Layouts;
