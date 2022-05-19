import React from "react";
import styled from "styled-components";
import linkImg from "../assets/logoImage/link.svg";

interface ContentProps {
  content: {
    title: string;
    firstContent: string;
    secondContent: string;
    thirdContent: string;
    workMenttion: string;
    bgColor: string;
  };
}

const Container = styled.div`
  height: 370px;
  width: 50%;
  max-width: 373px;
`;

const Title = styled.h2`
  background-color: #fff;
  padding: 10px;
  font-size: 22px;
  color: #717171;
  font-family: "Inter";
`;

const ListContainer = styled.ul`
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background-color: #fafafa;
  height: 100%;
  position: relative;
`;

const List = styled.li`
  padding: 15px 0;
  font-size: 15px;
  font-family: "Inter";
  color: #717171;
  position: relative;

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

const LinkImage = styled.img.attrs({ src: linkImg })`
  position: absolute;
  right: 2%;
  width: 15px;
  height: 15px;
`;

const StartBtnContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56%;
  display: flex;
  justify-content: center;
`;

const RemoveBtn = styled.button`
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

const MoveBtn = styled.button`
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
`;

const Document = ({ content }: ContentProps) => {
  return (
    <Container>
      <Title>{content.title}</Title>
      <ListContainer>
        <List>
          <a href="#">
            <span style={{ marginRight: "5px" }}>1</span> {content.firstContent}
            <p></p>
          </a>
          <LinkImage></LinkImage>
        </List>
        <List>
          <a href="#">
            <span style={{ marginRight: "5px" }}>2 </span>
            {content.secondContent}
            <p></p>
          </a>
          <LinkImage></LinkImage>
        </List>
        <List>
          <a href="#">
            <span style={{ marginRight: "5px" }}>3</span>
            {content.thirdContent}
            <p></p>
          </a>
          <LinkImage></LinkImage>
        </List>
        {content.title === "제안서" ? (
          <StartBtnContainer>
            <RemoveBtn>삭제하기</RemoveBtn>
          </StartBtnContainer>
        ) : null}
      </ListContainer>
      <MoveBtn style={{ backgroundColor: content.bgColor }}>
        {content.workMenttion}
      </MoveBtn>
    </Container>
  );
};

export default Document;
