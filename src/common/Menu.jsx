import React from "react";
import Row from "./Row";
import Container from "./Container";

const Menu = () => {
  return (
    <>
      <Row className={`bg-[#1e28320d]`}>
        <Container>
          <div className="flex items-center justify-between border-t border-solid border-[#e3e3e3] py-[20px]">
            <a href="">Jewelry & Accessories</a>
            <a href="">Clothing & Shoe</a>
            <a href="">Home & Living</a>
            <a href="">Wedding & Party</a>
            <a href="">Toys & Entertainment</a>
            <a href="">Art & Collectibles</a>
            <a href="">Craft Supplies & Tools</a>
          </div>
        </Container>
      </Row>
    </>
  );
};

export default Menu;
