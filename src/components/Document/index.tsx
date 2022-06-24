import React, { useState } from "react";
import { IContent } from "../../pages/DesignerWork";
import {
  Container,
  InputBox,
  LinkImage,
  List,
  ListContainer,
  MoveBtn,
  RemoveBtn,
  StartBtnContainer,
  Title,
} from "./styles";

interface ContentProps {
  content: IContent;
  onDelete?: (id: number[]) => void;
}

const Document = ({ content, onDelete }: ContentProps) => {
  const [isDelete, setIsDelete] = useState(false);
  const [checkedInput, setCheckedInput] = useState<number[]>([]);
  const onChange = (id: number) => {
    setCheckedInput((prev) => [...prev, id]);
  };
  const onDeleteButtonClick = () => {
    if (onDelete) onDelete(checkedInput);
    setIsDelete((prev) => !prev);
    setCheckedInput([]);
  };
  return (
    <Container>
      <Title>{content.title}</Title>
      <ListContainer>
        {content.contents.map((content) => (
          <List key={content.id}>
            <a href="#">
              <span style={{ marginRight: "5px" }}>{content.id}</span>{" "}
              {content.name}
              <p></p>
            </a>
            {isDelete ? (
              <InputBox type="checkbox" onChange={() => onChange(content.id)} />
            ) : (
              <LinkImage />
            )}
          </List>
        ))}
        {(content.title === "제안서" || content.title === "완료된 작업") &&
        !isDelete &&
        content.contents.length !== 0 ? (
          <StartBtnContainer>
            <RemoveBtn onClick={() => setIsDelete((prev) => !prev)}>
              삭제하기
            </RemoveBtn>
          </StartBtnContainer>
        ) : null}
      </ListContainer>
      {isDelete ? (
        <MoveBtn
          onClick={onDeleteButtonClick}
          style={{ backgroundColor: content.bgColor }}
        >
          삭제하기
        </MoveBtn>
      ) : (
        <MoveBtn style={{ backgroundColor: content.bgColor }}>
          {content.workMenttion}
        </MoveBtn>
      )}
    </Container>
  );
};

export default Document;
