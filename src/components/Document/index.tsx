import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IClientContent } from "../../pages/ClientWork";
import { IDesignerContent } from "../../pages/DesignerWork";
import Modal from "../Modal";
import * as S from "./styles";

interface ContentProps {
  clientContent?: IClientContent;
  designerContent?: IDesignerContent;
  onDelete?: (list: number[], callback: () => void) => void;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Document = ({
  clientContent,
  designerContent,
  onDelete,
  setIsActive,
}: ContentProps) => {
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [checkedInput, setCheckedInput] = useState<number[]>([]);
  const onLinkClick = (proposalId: number) => {
    setIsActive && setIsActive(true);
    navigator.clipboard.writeText(
      process.env.NODE_ENV === "production"
        ? `https://www.98o7.com/proposal/${proposalId}`
        : `https://dev.98o7.com/proposal/${proposalId}`
    );
    // `http://localhost:3000/proposal/${proposalId}`
    // 개발서버 도메인
  };
  const onChange = useCallback((id: number) => {
    setCheckedInput((prev) => [...prev, id]);
  }, []);
  const callback = () => {
    setIsDelete((prev) => !prev);
    setCheckedInput([]);
    setIsDeleteClicked(false);
  };
  const onDeleteButtonClick = useCallback(() => {
    onDelete && onDelete(checkedInput, callback);
  }, [checkedInput, onDelete]);
  const onMoveButtonClick = useCallback(() => {
    if (
      clientContent?.type === "CLIENT" &&
      clientContent.workMenttion === "제안서 작업실"
    ) {
      navigate("/workspace_client");
    }
    if (
      (clientContent?.type === "CLIENT" &&
        clientContent.workMenttion === "외주 작업실") ||
      (designerContent?.type === "DESIGNER" &&
        designerContent.workMenttion === "외주 작업실")
    ) {
      alert("준비중인 기능입니다!");
    }
  }, [
    clientContent?.type,
    clientContent?.workMenttion,
    designerContent?.type,
    designerContent?.workMenttion,
    navigate,
  ]);
  return (
    <>
      {isDeleteClicked && (
        <Modal
          onDeleteButtonClick={onDeleteButtonClick}
          setIsDeleteClicked={setIsDeleteClicked}
        />
      )}
      <S.Container>
        {/* 클라이언트 작업실 */}
        <S.Title>
          {clientContent?.title ? clientContent.title : designerContent?.title}
        </S.Title>
        <S.ListContainer>
          <S.ListInnerContainer>
            {clientContent &&
              (clientContent.title === "제안서"
                ? clientContent.contents?.map((content, index) => (
                    <S.List key={content.id}>
                      {/* 클라이언트 작업실 제안서 리스트*/}
                      <Link to={`/proposal/${content.id}`}>
                        <span style={{ marginRight: "5px" }}>{index + 1}</span>{" "}
                        {content.title}
                        <p></p>
                      </Link>
                      {isDelete ? (
                        <S.InputBox
                          isMatched={Boolean(content.coworkingId)}
                          type="checkbox"
                          onChange={() => onChange(content.id)}
                        />
                      ) : (
                        <S.LinkImage onClick={() => onLinkClick(content.id)} />
                      )}
                    </S.List>
                  ))
                : clientContent.contents?.map((content, index) => (
                    <S.List key={content.id}>
                      {/* 클라이언트 작업실 외주작업실 리스트*/}
                      <Link to="#">
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
                      <S.LinkImage />
                    </S.List>
                  )))}

            {/* 디자이너 작업실 */}
            {designerContent &&
              (designerContent.title === "완료된 작업"
                ? designerContent.contents?.map((content, index) => (
                    <S.List key={content.id}>
                      {/* 디자이너 작업실 완료된 작업 리스트*/}
                      <Link to={"#"}>
                        <span style={{ marginRight: "5px" }}>{index + 1}</span>{" "}
                        {content.title}
                        <p></p>
                      </Link>
                      {isDelete ? (
                        <S.InputBox
                          isMatched={content.coworkingId !== undefined}
                          type="checkbox"
                          onChange={() => onChange(content.id)}
                        />
                      ) : (
                        <S.LinkImage />
                      )}
                    </S.List>
                  ))
                : designerContent.contents?.map((content, index) => (
                    <S.List key={content.id}>
                      {/* 디자이너 작업실 외주작업실 리스트*/}
                      <Link to={"#"}>
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
                      <S.LinkImage />
                    </S.List>
                  )))}

            {/* 클라이언트 작업실의 제안서, 디자이너 작업실의 완료된 작업 삭제 버튼*/}
            {(clientContent?.title === "제안서" ||
              designerContent?.title === "완료된 작업") &&
            !isDelete &&
            clientContent?.contents?.length !== 0 &&
            designerContent?.contents?.length !== 0 ? (
              <S.StartBtnContainer>
                <S.RemoveBtn onClick={() => setIsDelete(true)}>
                  삭제하기
                </S.RemoveBtn>
              </S.StartBtnContainer>
            ) : null}
          </S.ListInnerContainer>
        </S.ListContainer>
        {isDelete ? (
          <S.MoveBtn
            onClick={() => {
              if (checkedInput.length > 0) {
                setIsDeleteClicked(true);
              } else {
                setIsDelete(false);
              }
            }}
            style={{
              backgroundColor: clientContent?.bgColor
                ? clientContent.bgColor
                : designerContent?.bgColor,
            }}
          >
            삭제하기
          </S.MoveBtn>
        ) : (
          <S.MoveBtn
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
          </S.MoveBtn>
        )}
      </S.Container>
    </>
  );
};

export default React.memo(Document);
