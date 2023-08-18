"use client";
import Aos from "aos";
import React, { useEffect } from "react";

const AosComponent = ({ data, duration = "500", children }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos={data} data-aos-duration={duration}>
      {children}
    </div>
  );
};

export default AosComponent;
