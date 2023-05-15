import React from "react";
import Row from "../../common/Row";
import Container from "../../common/Container";
import HeroImg from "../../images/hero-image.png";

const HeroSection = () => {
  return (
    <>
      <Row className={`bg-[#1e28320d] py-[80px]`}>
        <Container>
          <div className="flex items-center justify-between">
            <div className="w-[70%]">
              <h1 className="text-[74px] font-light mb-[42px]">Collections</h1>
              <h4 className="text-[30px] font-normal">
                You Can Explore And Shop Many Different Collection
              </h4>
              <h4 className="text-[30px] font-normal">
                From Various Brands Here.
              </h4>
              <button className="bg-[#1E2832] text-[#fff] text-[29px] py-[19px] px-[26px] mt-[66px]">
                <i className="fa-solid fa-bag-shopping pr-[10px]"></i> Show Now
              </button>
            </div>
            <div className="w-[30%] relative">
              <img
                src={HeroImg}
                className="max-w-[100%] h-[auto] rounded-tl-[160px] rounded-br-[160px] relative z-20"
                alt="Hero"
              />
              <div className="absolute top-[20px] left-[20px] z-10 w-[335.75px] h-[429.19px] border-[3px] border-solid border-[rgba(0,0,0,0.25)] rounded-tl-[160px] rounded-br-[160px]"></div>
            </div>
          </div>
        </Container>
      </Row>
    </>
  );
};

export default HeroSection;
