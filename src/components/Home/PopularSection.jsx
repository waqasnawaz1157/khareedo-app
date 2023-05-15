import React from "react";
import Row from "../../common/Row";
import Container from "../../common/Container";
import CategoryImg1 from "../../images/image-category-1.png";
import CategoryImg2 from "../../images/item-category-2.png";
import CategoryImg3 from "../../images/item-category-3.png";
import CategoryImg4 from "../../images/item-category-4.png";
import CategoryImg5 from "../../images/item-category-5.png";

const PopularSection = () => {
  return (
    <>
      <Row className={`pt-[25px] pb-[50px]`}>
        <Container>
          <div className="relative">
            <h2 className="rotate-[270deg] text-[30px] font-normal uppercase absolute top-[250px] left-[-260px]">
              Explore New And Popular Styles
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[50%] flex items-center justify-between px-[10px]">
              <img src={CategoryImg1} alt="Category" />
            </div>
            <div className="w-[50%] flex items-center justify-between">
              <div className="flex items-center justify-between flex-wrap">
                <img
                  src={CategoryImg2}
                  className="px-[10px] pb-[20px]"
                  alt="Category"
                />
                <img src={CategoryImg3} className="px-[10px]" alt="Category" />
              </div>
              <div className="flex items-center justify-between flex-wrap">
                <img
                  src={CategoryImg4}
                  className="px-[10px] pb-[20px]"
                  alt="Category"
                />
                <img src={CategoryImg5} className="px-[10px]" alt="Category" />
              </div>
            </div>
          </div>
        </Container>
      </Row>
    </>
  );
};

export default PopularSection;
