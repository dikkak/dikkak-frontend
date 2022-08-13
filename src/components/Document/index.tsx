import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
  const onMoveButtonClick = () => {
    if (content.type === "CLIENT") {
      navigate("/workspace_client");
    }
  };
  return (
    <Container>
      <Title>{content.title}</Title>
      <ListContainer>
        {content.contents &&
          content.contents.map((content, index) => (
            <List key={content.id}>
              <Link to={`/proposal/${content.id}`}>
                <span style={{ marginRight: "5px" }}>{index + 1}</span>{" "}
                {content.title}
                <p></p>
              </Link>
              {isDelete ? (
                <InputBox
                  type="checkbox"
                  onChange={() => onChange(content.id)}
                />
              ) : (
                <LinkImage />
              )}
            </List>
          ))}
        {(content.title === "제안서" || content.title === "완료된 작업") &&
        content.contents &&
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
        <MoveBtn
          onClick={onMoveButtonClick}
          style={{ backgroundColor: content.bgColor }}
        >
          {content.workMenttion}
        </MoveBtn>
      )}
    </Container>
  );
};

export default Document;
