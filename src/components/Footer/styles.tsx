import styled from "styled-components";

interface FooterProps {
  bgColor: string;
}

export const FooterWrapper = styled.div<FooterProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 250px;
  margin-top: 10em;
  padding: 3em 10em;
  padding-bottom: 0;
  background-color: ${(props) => props.bgColor};

  @media screen and (max-width: 500px) {
    padding: 30px 30px;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  height: 100%;
`;
export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
`;
export const FooterLeftFirst = styled.div`
  display: flex;
`;

export const FooterP = styled.p`
  cursor: pointer;
  margin-right: 3em;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-size: 10px;
  font-weight: 900;
  color: #717171;
  text-decoration-color: #717171;
  line-height: 14px;
`;
export const FooterLeftSecond = styled(FooterLeftFirst)`
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

  @media screen and (max-width: 500px) {
    & > p {
      line-height: 19px;
    }
    & > div:last-child {
      flex-direction: column;
      & > p:first-child {
        line-height: 19px;
      }
    }
  }
`;
export const FooterLeftThird = styled(FooterLeftFirst)`
  flex-direction: column;
  margin-top: 3em;
  color: #7c7c7c;
  p {
    line-height: 1.5em;
  }
  @media screen and (max-width: 500px) {
    margin-top: 1em;
  }
`;
export const FooterRight = styled.div`
  display: flex;
  img {
    width: 30px;
    height: 30px;
    margin-right: 1.5em;
    justify-content: center;

    @media screen and (max-width: 500px) {
      width: 20px;
      height: 20px;
      margin-right: 1em;
    }
  }
`;
