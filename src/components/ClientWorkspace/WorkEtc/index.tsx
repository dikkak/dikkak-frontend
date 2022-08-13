import React, { RefObject, ChangeEvent } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { workspaceNumAtom, workStepAtom, workEtcAtom } from "../../../atoms";

import {
  MessageBox,
  SystemMessage,
  NextStepButton,
  Circle,
  Title,
  ClientMessage,
  InnerContainer,
  Box,
  InputBox,
  InputBoxLabel,
  FileUploadImg,
  FileImgContainer,
  FileComment,
  Text,
  DeleteButton,
} from "./styles";
import _ from "lodash";

interface IWorkTitleProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkTitle = ({ textRef }: IWorkTitleProps) => {
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const [workEtc, setWorkEtc] = useRecoilState(workEtcAtom);
  const [workStep, setWorkStep] = useRecoilState(workStepAtom);

  const onClick = () => {
    setWorkspaceNum((prev) => prev + 1);
    if (workStep.etcStep !== "done") {
      setWorkStep((prev) => {
        return {
          ...prev,
          etcStep: "done",
          additionStep: "now",
        };
      });
    }
    textRef.current?.removeAttribute("disabled");
    textRef.current?.setAttribute(
      "placeholder",
      "추가 요청사항을 작성해주세요"
    );
  };

  const onLoadFile = (
    e: ChangeEvent<HTMLInputElement> | undefined,
    index: number
  ) => {
    const files = e?.target.files!;
    // const fileReader = new FileReader();
    const name = files[0].name;

    if (files[0]) {
      // fileReader.readAsDataURL(files[0]);
      const newList = _.cloneDeep(workEtc);
      newList[index].fileName = name;
      newList[index].file = files[0];
      setWorkEtc(newList);
    }

    return;
  };

  const onAddClick = () => {
    if (workEtc.length < 5) {
      setWorkEtc((prev) => [...prev, { fileName: "", file: undefined }]);
    }
  };

  const onDelete = (index: number) => {
    let newList = _.cloneDeep(workEtc);
    newList = workEtc.filter((item, idx) => idx !== index);
    setWorkEtc(newList);
  };

  return (
    <>
      <MessageBox>
        <Title>
          <Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          기타 파일 업로드 (선택)
        </Title>
        <SystemMessage>
          디자인 작업에 참고할 레퍼런스를 등록해주세요
        </SystemMessage>
        {workEtc.map((_, index) => (
          <ClientMessage key={index}>
            <InnerContainer>
              <InputBoxLabel>
                <FileImgContainer>
                  <FileUploadImg></FileUploadImg>
                </FileImgContainer>
                {workEtc[index].fileName ? (
                  <Text>{workEtc[index].fileName}</Text>
                ) : (
                  <FileComment>파일 추가하기</FileComment>
                )}
                <InputBox
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onLoadFile(e, index);
                  }}
                  // bgcolor={mainColor.color || "#C4C4C4"}
                  // onClick={() => onClick()}
                ></InputBox>
              </InputBoxLabel>
            </InnerContainer>
            {index > 0 ? (
              <DeleteButton onClick={() => onDelete(index)}>X</DeleteButton>
            ) : null}
          </ClientMessage>
        ))}
        <ClientMessage>
          <InnerContainer>
            <Box onClick={onAddClick}>+</Box>
          </InnerContainer>
        </ClientMessage>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NextStepButton onClick={onClick}>
            <Circle color="#EFDC34" />
            NEXT STEP
            <Circle color="#28BF1B" />
          </NextStepButton>
        </div>
      </MessageBox>
    </>
  );
};

export default WorkTitle;
