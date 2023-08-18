"use client";
import Link from "next/link";
import React from "react";

const LinkComponent = ({ route }) => {
  const handleNavigationClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link
      href={route.redirect}
      onClick={(event) =>
        handleNavigationClick(event, route.redirect.substring(1))
      }
      className="underline decoration-wavy underline-offset-4 font-bold text-lg text-cyan-600"
    >
      {route.label}
    </Link>
  );
};

export default LinkComponent;
