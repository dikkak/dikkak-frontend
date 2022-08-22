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
            <p>서울시 OOO</p>
            <div>
              <p>사업자 등록 번호 : 000-00-000000</p>
              <p>대표이사 : 염정원</p>
              <p>정보보호책임자 : 염정원</p>
            </div>
          </FooterLeftSecond>
          <FooterLeftThird>
            <p>Contact</p>
            <p>dekak2022@gmail.com</p>
            <p>kakao : 디깍 플러스친구 바로가기</p>
          </FooterLeftThird>
        </FooterLeft>
        <FooterRight>
          <img style={{ cursor: "pointer" }} src={instagram} alt="instagram" />
          <img style={{ cursor: "pointer" }} src={facebook} alt="facebook" />
        </FooterRight>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
