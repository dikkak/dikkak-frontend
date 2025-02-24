import styled from "styled-components";
import linkImg from "../../assets/logoImage/link.svg";

export const Container = styled.div`
  height: 370px;
  width: 50%;
  max-width: 373px;
  @media screen and (max-width: 500px) {
    width: 85%;
    margin-bottom: 200px;
    &:first-child {
      margin-top: 50px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h2`
  background-color: #fff;
  padding: 10px;
  font-size: 22px;
  color: #717171;
  font-family: "Inter";
`;

export const ListContainer = styled.div`
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background-color: #fafafa;
  height: 100%;
  position: relative;
`;

export const ListInnerContainer = styled.ul`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
`;

export const List = styled.li`
  padding: 15px 0;
  font-size: 15px;
  font-family: "Inter";
  color: #717171;
  position: relative;
  overflow-y: scroll;

  a {
    color: inherit;
    width: 100%;
    font-size: 15px;
    line-height: 18px;
    & p {
      position: absolute;
      height: 1px;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 10px;
      width: 97%;
      background-color: #c4c4c4;
    }
  }
`;

export const InputBox = styled.input<{ isMatched: boolean }>`
  display: ${(props) => (props.isMatched ? "none" : "inline")};
  position: absolute;
  right: 2%;
  width: 15px;
  height: 15px;
`;

export const LinkImage = styled.img.attrs({ src: linkImg })`
  position: absolute;
  right: 2%;
  width: 15px;
  height: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const StartBtnContainer = styled.div`
  position: absolute;
  width: 95%;
  padding: 0 10px;
  bottom: 15px;
  left: 10px;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const RemoveBtn = styled.button`
  position: absolute;
  width: 98%;
  color: #fff;
  background-color: #717171;
  border: 0;
  cursor: pointer;
  font-size: 15px;
  font-family: Noto Sans KR;
  padding: 10px 0;
  border-radius: 5px;
  bottom: 0;
  font-weight: 700;
`;

export const MoveBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.mainColor};
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  font-family: Noto Sans KR;
  font-weight: 700;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
