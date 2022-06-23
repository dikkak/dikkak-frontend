import React from "react";
import { Container, LinkImage, List, ListContainer, MoveBtn, RemoveBtn, StartBtnContainer, Title } from './styles';

interface IList {
  id: number;
  name: string;
}
interface ContentProps {
  content: {
    title: string;
    contents: IList[];
    workMenttion: string;
    bgColor: string;
  };
}

const Document = ({ content }: ContentProps) => {
  return (
    <Container>
      <Title>{content.title}</Title>
      <ListContainer>
        {
          content.contents.map(content => (
            <List key={content.id}>
              <a href='#'>
                <span style={{ marginRight: "5px" }}>{content.id}</span> {content.name}
                <p></p>
              </a>
              <LinkImage></LinkImage>
            </List>
          ))
        }
        {content.title === "제안서" || content.title === "완료된 작업" ? (
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
