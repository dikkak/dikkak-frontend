import React from "react";
import { Container, LinkImage, List, ListContainer, MoveBtn, RemoveBtn, StartBtnContainer, Title } from './styles';

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
