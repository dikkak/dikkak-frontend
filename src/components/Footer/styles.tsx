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
  p {
    margin-right: 5em;
    font-weight: bold;
  }
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
`;
export const FooterLeftThird = styled(FooterLeftFirst)`
  flex-direction: column;
  margin-top: 3em;
  color: #7c7c7c;
  p {
    line-height: 1.5em;
  }
`;
export const FooterRight = styled.div`
  display: flex;
  img {
    width: 30px;
    height: 30px;
    margin-right: 1.5em;
    justify-content: center;
  }
`;
