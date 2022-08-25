import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IClientContent } from "../../pages/ClientWork";
import { IDesignerContent } from "../../pages/DesignerWork";
import {
  Container,
  InputBox,
  LinkImage,
  List,
  ListContainer,
  ListInnerContainer,
  MoveBtn,
  RemoveBtn,
  StartBtnContainer,
  Title,
} from "./styles";

interface ContentProps {
  clientContent?: IClientContent;
  designerContent?: IDesignerContent;
  onDelete?: (id: number[]) => void;
}

const Document = ({
  clientContent,
  designerContent,
  onDelete,
}: ContentProps) => {
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(false);
  const [checkedInput, setCheckedInput] = useState<number[]>([]);
  const onChange = useCallback((id: number) => {
    setCheckedInput((prev) => [...prev, id]);
  }, []);
  const onDeleteButtonClick = useCallback(() => {
    if (onDelete) onDelete(checkedInput);
    setIsDelete((prev) => !prev);
    setCheckedInput([]);
  }, [checkedInput, onDelete]);
  const onMoveButtonClick = useCallback(() => {
    if (clientContent?.type === "CLIENT") {
      navigate("/workspace_client");
    }
  }, [clientContent?.type, navigate]);
  return (
    <Container>
      <Title>
        {clientContent?.title ? clientContent.title : designerContent?.title}
      </Title>
      <ListContainer>
        <ListInnerContainer>
          {clientContent &&
            (clientContent.title === "제안서"
              ? clientContent.contents?.map((content, index) => (
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
                ))
              : clientContent.contents?.map((content, index) => (
                  <List key={content.id}>
                    <Link to={`/proposal/${content.id}`}>
                      <span style={{ marginRight: "5px" }}>{index + 1}</span>
                      <span
                        style={{ fontWeight: "900" }}
                      >{`${content.title} / `}</span>
                      <span
                        style={{ fontWeight: "900" }}
                      >{`${content.designerName}`}</span>
                      <span>{`디자이너 / ${content.coworkingStep}차 작업중`}</span>
                      <p></p>
                    </Link>
                    <LinkImage />
                  </List>
                )))}
          {designerContent &&
            (designerContent.title === "완료된 작업"
              ? designerContent.contents?.map((content, index) => (
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
                ))
              : designerContent.contents?.map((content, index) => (
                  <List key={content.id}>
                    <Link to={`/proposal/${content.id}`}>
                      <span style={{ marginRight: "5px" }}>{index + 1}</span>
                      <span
                        style={{ fontWeight: "900" }}
                      >{`${content.title} / `}</span>
                      <span
                        style={{ fontWeight: "900" }}
                      >{`${content.clientName}`}</span>
                      <span>{`클라이언트 / ${content.coworkingStep}차 작업중`}</span>
                      <p></p>
                    </Link>
                    <LinkImage />
                  </List>
                )))}
          {(clientContent?.title === "제안서" ||
            designerContent?.title === "완료된 작업") &&
          !isDelete &&
          clientContent?.contents?.length !== 0 &&
          designerContent?.contents?.length !== 0 ? (
            <StartBtnContainer>
              <RemoveBtn onClick={() => setIsDelete((prev) => !prev)}>
                삭제하기
              </RemoveBtn>
            </StartBtnContainer>
          ) : null}
        </ListInnerContainer>
      </ListContainer>
      {isDelete ? (
        <MoveBtn
          onClick={onDeleteButtonClick}
          style={{
            backgroundColor: clientContent?.bgColor
              ? clientContent.bgColor
              : designerContent?.bgColor,
          }}
        >
          삭제하기
        </MoveBtn>
      ) : (
        <MoveBtn
          onClick={onMoveButtonClick}
          style={{
            backgroundColor: clientContent?.bgColor
              ? clientContent.bgColor
              : designerContent?.bgColor,
          }}
        >
          {clientContent?.workMenttion
            ? clientContent.workMenttion
            : designerContent?.workMenttion}
        </MoveBtn>
      )}
    </Container>
  );
};

export default React.memo(Document);
