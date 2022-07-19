import styled from "styled-components";

export const JobChoiceBox = styled.div`
  position: relative;
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 10px;
`;

export const SystemMessage = styled.div`
  height: 35px;
  width: 547px;
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 20px;
  padding-right: 10px;

  &::before {
    content: "";
    position: relative;
    background-color: transparent;
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 0px solid transparent;
    border-right: 15px solid ${(props) => props.theme.mainColor};
    left: -10.5px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(2, 80px);
  grid-gap: 5px;
  margin-left: 21px;
`;

export const GridChildren = styled.div`
  border: 1px solid #905dfb;
  border-radius: 10px;
  color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoOrName = styled(GridChildren)<{
  isLogoActive?: true | false;
}>`
  color: ${(props) => (props.isLogoActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isLogoActive === true ? props.theme.mainColor : "#fff"};
`;

export const Package = styled(GridChildren)<{
  isPackageActive?: true | false;
}>`
  color: ${(props) => (props.isPackageActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isPackageActive === true ? props.theme.mainColor : "#fff"};
`;

export const Detail = styled(GridChildren)<{
  isDetailActive?: true | false;
}>`
  color: ${(props) => (props.isDetailActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isDetailActive === true ? props.theme.mainColor : "#fff"};
`;

export const Video = styled(GridChildren)<{
  isVideoActive?: true | false;
}>`
  color: ${(props) => (props.isVideoActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isVideoActive === true ? props.theme.mainColor : "#fff"};
`;

export const Product = styled(GridChildren)<{
  isProductActive?: true | false;
}>`
  color: ${(props) => (props.isProductActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isProductActive === true ? props.theme.mainColor : "#fff"};
`;
export const Poster = styled(GridChildren)<{
  isPosterActive?: true | false;
}>`
  color: ${(props) => (props.isPosterActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isPosterActive === true ? props.theme.mainColor : "#fff"};
`;
export const Landing = styled(GridChildren)<{
  isLandingActive?: true | false;
}>`
  color: ${(props) => (props.isLandingActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isLandingActive === true ? props.theme.mainColor : "#fff"};
`;
export const Etc = styled(GridChildren)<{
  isEtcActive?: true | false;
}>`
  color: ${(props) => (props.isEtcActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isEtcActive === true ? props.theme.mainColor : "#fff"};
`;

export const NextStepButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 440px;
  height: 30px;
  background-color: #717171;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
