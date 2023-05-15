import React from "react";
import Row from "../../common/Row";
import Container from "../../common/Container";
import BrandIcon from "../../images/brand-1.png";

const Brands = () => {
  return (
    <>
      <Row className={`py-[80px]`}>
        <Container>
          <div className="flex items-center justify-between">
            <img src={BrandIcon} alt="Brand Logo" />
            <img src={BrandIcon} alt="Brand Logo" />
            <img src={BrandIcon} alt="Brand Logo" />
            <img src={BrandIcon} alt="Brand Logo" />
            <img src={BrandIcon} alt="Brand Logo" />
          </div>
        </Container>
      </Row>
    </>
  );
};

export default Brands;
