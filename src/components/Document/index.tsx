import React, { useState } from "react";
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
  const onChange = (id: number) => {
    setCheckedInput((prev) => [...prev, id]);
  };
  const onDeleteButtonClick = () => {
    if (onDelete) onDelete(checkedInput);
    setIsDelete((prev) => !prev);
    setCheckedInput([]);
  };
  const onMoveButtonClick = () => {
    if (clientContent?.type === "CLIENT") {
      navigate("/workspace_client");
    }
  };
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
                      <span>{`디자이너 / ${content.coworkingStep}차 작업중`}</span>
                      <p></p>
                    </Link>
                    <LinkImage />
                  </List>
                )))}
          {(clientContent?.title === "제안서" ||
            designerContent?.title === "완료된 작업") &&
          (clientContent?.contents || designerContent?.contents) &&
          !isDelete &&
          (clientContent?.contents?.length !== 0 ||
            designerContent?.contents?.length !== 0) ? (
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

  // return (
  //   <Container>
  //     <Title>{designerContent!.title}</Title>
  //     {designerContent && (
  //       <ListContainer>
  //         <ListInnerContainer>
  //           {designerContent.contents &&
  //             (content.title === "외주 작업실"
  //               ? content.contents.map((content, index) => (
  //                   <List key={content.id}>
  //                     <Link to={`/proposal/${content.id}`}>
  //                       <span style={{ marginRight: "5px" }}>{index + 1}</span>
  //                       <span
  //                         style={{ fontWeight: "900" }}
  //                       >{`${content.title} / `}</span>
  //                       <span
  //                         style={{ fontWeight: "900" }}
  //                       >{`${content.designerName}`}</span>
  //                       <span>{`디자이너 / ${content.coworkingStep}차 작업중`}</span>
  //                       <p></p>
  //                     </Link>
  //                     <LinkImage />
  //                   </List>
  //                 ))
  //               : content.contents.map((content, index) => (
  //                   <List key={content.id}>
  //                     <Link to={`/proposal/${content.id}`}>
  //                       <span style={{ marginRight: "5px" }}>{index + 1}</span>{" "}
  //                       {content.title}
  //                       <p></p>
  //                     </Link>
  //                     {isDelete ? (
  //                       <InputBox
  //                         type="checkbox"
  //                         onChange={() => onChange(content.id)}
  //                       />
  //                     ) : (
  //                       <LinkImage />
  //                     )}
  //                   </List>
  //                 )))}
  //           {(content.title === "제안서" || content.title === "완료된 작업") &&
  //           content.contents &&
  //           !isDelete &&
  //           content.contents.length !== 0 ? (
  //             <StartBtnContainer>
  //               <RemoveBtn onClick={() => setIsDelete((prev) => !prev)}>
  //                 삭제하기
  //               </RemoveBtn>
  //             </StartBtnContainer>
  //           ) : null}
  //         </ListInnerContainer>
  //       </ListContainer>
  //     )}
  //     {isDelete ? (
  //       <MoveBtn
  //         onClick={onDeleteButtonClick}
  //         style={{ backgroundColor: content.bgColor }}
  //       >
  //         삭제하기
  //       </MoveBtn>
  //     ) : (
  //       <MoveBtn
  //         onClick={onMoveButtonClick}
  //         style={{ backgroundColor: content.bgColor }}
  //       >
  //         {content.workMenttion}
  //       </MoveBtn>
  //     )}
  //   </Container>
  // );
};

export default Document;
