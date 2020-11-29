import React, { useState } from "react";

const STATUS = {
  HOVERED: "hover",
  NORMAL: "",
};

const Link = ({ page, children }) => {
  const [className, setClassName] = useState("test");

  const onMouseEnter = () => {
    setClassName(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setClassName(STATUS.NORMAL);
  };

  return (
    <a
      className={className}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
