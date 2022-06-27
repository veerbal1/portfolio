import React from 'react';

const Title = ({ children, className, ...props }) => {
  return (
    <h1
      className={`text-6xl font-bold ${className ? className : ''}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
