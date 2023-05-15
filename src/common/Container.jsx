import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <>
      <div className={`container px-[200px] max-sm:px-[10px] ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Container;
