import React from "react";

const Title = ({ children, ...props }) => {
  return (
    <h1
      className={`font-sans text-6xl font-bold ${props.className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
