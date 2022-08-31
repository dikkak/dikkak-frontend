import React from "react";
import * as S from "./styles";
import instagram from "../../assets/mainPageImage/instagram.png";
import facebook from "../../assets/mainPageImage/facebook.png";
import { useSetRecoilState } from "recoil";
import { isTermsOfUseAtom, isTermsOfPersonalAtom } from "../../atoms";

interface FooterProps {
  bgColor: string;
}

const Footer = ({ bgColor }: FooterProps) => {
  const setTermOfUse = useSetRecoilState(isTermsOfUseAtom);
  const setTermsOfPersonal = useSetRecoilState(isTermsOfPersonalAtom);
  return (
    <S.FooterWrapper bgColor={bgColor}>
      <S.FooterContainer>
        <S.FooterLeft>
          <S.FooterLeftFirst>
            <S.FooterP onClick={() => setTermOfUse((prev) => !prev)}>
              이용약관
            </S.FooterP>
            <S.FooterP onClick={() => setTermsOfPersonal((prev) => !prev)}>
              개인정보 처리방침
            </S.FooterP>
          </S.FooterLeftFirst>
          <S.FooterLeftSecond>
            <div>
              <p>주식회사 98점7도</p>
            </div>
            <p>서울특별시 종로구 창경궁로35길 26, 5층(혜화동)</p>
            <div>
              <p>사업자 등록 번호 : 501-81-27350</p>
              <p>대표이사 : 염정원</p>
              <p>정보보호책임자 : 염정원</p>
            </div>
          </S.FooterLeftSecond>
          <S.FooterLeftThird>
            <p>Contact</p>
            <p>support@98o7.com</p>
          </S.FooterLeftThird>
        </S.FooterLeft>
        <S.FooterRight>
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
        </S.FooterRight>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
