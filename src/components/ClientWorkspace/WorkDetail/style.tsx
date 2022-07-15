import styled from "styled-components";

export const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  color: ${props => props.theme.subColor};
  margin-bottom: 10px;
`;

export const SystemMessage1 = styled.p`
  height: 35px;
  width: 285px;
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 10px;
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
export const SystemMessage2 = styled(SystemMessage1)`
  width: 345px;
`; 

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 160px);
  grid-template-rows: repeat(1, 80px);
  grid-gap: 5px;
  margin-left: 21px;
  margin-bottom: 20px;
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

export const Logo = styled(GridChildren)<{
  isLogoActive?: true | false;
}>`
  color: ${(props) => (props.isLogoActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isLogoActive === true ? props.theme.mainColor : "#fff"};
`;

export const Name = styled(GridChildren)<{
  isNameActive?: true | false;
}>`
  color: ${(props) => (props.isNameActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isNameActive === true ? props.theme.mainColor : "#fff"};
`;

export const Yes = styled(GridChildren)<{
  isYesActive?: true | false;
}>`
  color: ${(props) => (props.isYesActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isYesActive === true ? props.theme.mainColor : "#fff"};
`;

export const No = styled(GridChildren)<{
  isNoActive?: true | false;
}>`
  color: ${(props) => (props.isNoActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isNoActive === true ? props.theme.mainColor : "#fff"};
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
