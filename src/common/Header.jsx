import React from "react";
import Row from "./Row";
import Container from "./Container";
import squareIconGroup from "../images/square-icon-group.png";

const Header = () => {
  return (
    <>
      {/* Header */}
      <Row className={`py-[25px] bg-[#1e28320d]`}>
        <Container>
          <div className="flex items-center justify-between md:flex-wrap">
            <div className="w-[30%] text-left">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="w-[40%] flex items-center justify-center">
              <img
                src={squareIconGroup}
                className="max-w-[100%] h-[15px]"
                alt="Square Icons"
              />
              <h1 className="px-[10px] text-[22px] uppercase">Khareedo</h1>
              <img
                src={squareIconGroup}
                className="max-w-[100%] h-[15px]"
                alt="Square Icons"
              />
            </div>
            <div className="w-[30%] text-right">
              <span className="mr-[25px]">
                <i className="fa-solid fa-user pr-[10px]"></i> Account
              </span>
              <span>
                <i className="fa-solid fa-bag-shopping pr-[10px]"></i> Shopping
              </span>
            </div>
          </div>
        </Container>
      </Row>
    </>
  );
};

export default Header;
