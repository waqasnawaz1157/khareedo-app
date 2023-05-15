import React from "react";

const Row = ({ className, children }) => {
  return (
    <>
      <div className={`w-full ${className}`}>{children}</div>
    </>
  );
};

export default Row;
