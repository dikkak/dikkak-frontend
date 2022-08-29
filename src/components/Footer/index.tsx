import React, { useState } from "react";
import {
  FooterContainer,
  FooterP,
  FooterLeft,
  FooterLeftFirst,
  FooterLeftSecond,
  FooterLeftThird,
  FooterRight,
  FooterWrapper,
} from "./styles";
import instagram from "../../assets/mainPageImage/instagram.png";
import facebook from "../../assets/mainPageImage/facebook.png";
import { useRecoilState } from "recoil";
import { isTermsOfUseAtom, isTermsOfPersonalAtom } from "../../atoms";

interface FooterProps {
  bgColor: string;
}

const Footer = ({ bgColor }: FooterProps) => {
  const [termOfUse, setTermOfUse] = useRecoilState(isTermsOfUseAtom);
  const [termsOfPersonal, setTermsOfPersonal] = useRecoilState(
    isTermsOfPersonalAtom
  );
  return (
    <FooterWrapper bgColor={bgColor}>
      <FooterContainer>
        <FooterLeft>
          <FooterLeftFirst>
            <FooterP onClick={() => setTermOfUse((prev) => !prev)}>
              이용약관
            </FooterP>
            <FooterP onClick={() => setTermsOfPersonal((prev) => !prev)}>
              개인정보 처리방침
            </FooterP>
          </FooterLeftFirst>
          <FooterLeftSecond>
            <div>
              <p>주식회사 98점7도</p>
            </div>
            <p>서울특별시 종로구 창경궁로35길 26, 5층(혜화동)</p>
            <div>
              <p>사업자 등록 번호 : 501-81-27350</p>
              <p>대표이사 : 염정원</p>
              <p>정보보호책임자 : 염정원</p>
            </div>
          </FooterLeftSecond>
          <FooterLeftThird>
            <p>Contact</p>
            <p>support@98o7.com</p>
          </FooterLeftThird>
        </FooterLeft>
        <FooterRight>
          <a href="https://www.instagram.com/98o7do/">
            <img
              style={{ cursor: "pointer" }}
              src={instagram}
              alt="instagram"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085252114306">
            <img style={{ cursor: "pointer" }} src={facebook} alt="facebook" />
          </a>
        </FooterRight>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
