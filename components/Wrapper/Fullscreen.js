import React from 'react';

const Fullscreen = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white w-screen h-screen ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Fullscreen;
