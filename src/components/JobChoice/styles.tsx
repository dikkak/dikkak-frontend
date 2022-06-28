import styled from "styled-components";

export const JobChoiceBox = styled.div`
  position: relative;
  width: 100%;
  height: 333px;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const SystemMessage = styled.p`
  height: 35px;
  width: 289px;
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
    left: -11px;
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
`;
