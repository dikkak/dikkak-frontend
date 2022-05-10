import React from "react";
import styled from "styled-components";
import instagram from "../assets/mainPageImage/instagram.png";
import facebook from "../assets/mainPageImage/facebook.png";

interface FooterProps {
  bgColor: string;
}

const FooterWrapper = styled.div<FooterProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 350px;
  margin-top: 20em;
  padding: 3em 10em;
  background-color: ${(props) => props.bgColor};
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  height: 100%;
`;
const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
`;
const FooterLeftFirst = styled.div`
  display: flex;
  p {
    margin-right: 5em;
    font-weight: bold;
  }
`;
const FooterLeftSecond = styled(FooterLeftFirst)`
  flex-direction: column;
  margin-top: 5em;
  color: #7c7c7c;
  div {
    display: flex;
    p {
      margin-right: 3em;
      line-height: 2em;
    }
  }
`;
const FooterLeftThird = styled(FooterLeftFirst)`
  flex-direction: column;
  margin-top: 3em;
  color: #7c7c7c;
  p {
    line-height: 1.5em;
  }
`;
const FooterRight = styled.div`
  display: flex;
  img {
    width: 30px;
    height: 30px;
    margin-right: 1.5em;
    justify-content: center;
  }
`;

const Footer = ({ bgColor }: FooterProps) => {
  return (
    <FooterWrapper bgColor={bgColor}>
      <FooterContainer>
        <FooterLeft>
          <FooterLeftFirst>
            <p>이용약관</p>
            <p>개인정보 처리방침</p>
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
