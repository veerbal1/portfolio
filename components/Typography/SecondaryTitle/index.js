import React from 'react';

const SecondaryText = ({ children, className, component, ...props }) => {
  if (component) {
    // Create react component
    return React.createElement(
      component,
      {
        className: `text-md font-bold ${className ? className : ''}`,
        ...props,
      },
      children
    );
  } else {
    <h1 className={'text-base ' + className}>{children}</h1>;
  }
};

export default SecondaryText;
