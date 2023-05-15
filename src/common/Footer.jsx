import React from "react";
import Row from "./Row";
import Container from "./Container";
import PaymentIcons from "../images/icons-payment.png";

const Footer = () => {
  return (
    <>
      <Row className={`py-[20px] bg-[#1E2832]`}>
        <Container>
          <div className="flex items-center justify-between">
            <div className="w-[30%]">
              <p className="text-white">Copyright © 2023 Khareedo</p>
            </div>
            <div className="w-[40%] h-[24px] flex items-center justify-center">
              <img
                src={PaymentIcons}
                className="w-[283px]"
                alt="Payment Icons"
              />
            </div>
            <div className="w-[30%] text-right">
              <span className="text-white">
                Scroll To Top <i className="fa-solid fa-arrow-up-long"></i>
              </span>
            </div>
          </div>
        </Container>
      </Row>
    </>
  );
};

export default Footer;
