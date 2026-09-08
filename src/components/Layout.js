import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-transparent p-10 sm:p-4 xs:p-2 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
