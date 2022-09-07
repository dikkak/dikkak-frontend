import React, { useState, ChangeEvent, RefObject, useEffect } from "react";
import _ from "lodash";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  referenceContentsAtom,
  workspaceNumAtom,
  workStepAtom,
} from "../../../atoms";
import {
  Circle,
  ContentBox,
  EarhImg,
  EarthImgBox,
  EarthImgContainer,
  FileUpload,
  FileUploadImg,
  FileUploadLabel,
  MessageBox,
  NextStepButton,
  PlaceholderP,
  PreviewImg,
  RefLink,
  SystemMessage,
  TextContainer,
  TextFifth,
  TextFirst,
  TextFourth,
  TextSecond,
  TextThird,
  Title,
  UploadBox,
  UploadContainer,
  DeleteButton,
} from "./styles";

interface IWorkRefProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkRef = ({ textRef }: IWorkRefProps) => {
  const [referenceContents, setReferenceContents] = useRecoilState(
    referenceContentsAtom
  );
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const [workStep, setWorkStep] = useRecoilState(workStepAtom);
  const [focusFirst, setFocusFirst] = useState(false);
  const [focusSecond, setFocusSecond] = useState(false);
  const [focusThird, setFocusThird] = useState(false);
  const [focusFourth, setFocusFourth] = useState(false);
  const [focusFifth, setFocusFifth] = useState(false);

  const onLoadFile = (
    e: ChangeEvent<HTMLInputElement> | undefined,
    index: number
  ) => {
    if (e) {
      const files = e.target.files!;
      const fileReader = new FileReader();
      const name = files[0].name;

      if (files[0]) {
        fileReader.readAsDataURL(files[0]);
      }
      fileReader.onload = () => {
        previewStore(index, name, fileReader.result as string, files[0]);
      };
    }
    return;
  };

  const previewStore = (
    index: number,
    name: string,
    url?: string,
    file?: File,
    des?: string
  ) => {
    let contentList = _.cloneDeep(referenceContents);
    if (url) {
      contentList[index].imgUrl = url;
      contentList[index].imgName = name;
      contentList[index].file = file;
      setReferenceContents(contentList);
    } else if (des) {
      contentList[index].description = des;
      setReferenceContents(contentList);
    } else if (!des) {
      contentList[index].description = "";
      setReferenceContents(contentList);
    }
  };

  const onAddClick = () => {
    if (referenceContents.length < 5) {
      setReferenceContents((prev) => [
        ...prev,
        { file: undefined, imgUrl: "", imgName: "", description: "" },
      ]);
    }
  };
  const onKeyBoardChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    let des = e.target.value;
    previewStore(index, "", "", undefined, des);
  };

  const onNextStep = () => {
    setWorkspaceNum((prev) => prev + 1);
    if (workStep.referenceStep !== "done") {
      setWorkStep((prev) => {
        return {
          ...prev,
          referenceStep: "done",
          etcStep: "now",
        };
      });
    }
  };
  const onFocusFirst = (e?: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusFirst(true);
  };

  const onBlurFirst = (e?: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusFirst(false);
  };

  const onFocusSecond = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusSecond(true);
  };

  const onBlurSecond = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusSecond(false);
  };

  const onFocusThird = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusThird(true);
  };

  const onBlurThird = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusThird(false);
  };

  const onFocusFourth = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusFourth(true);
  };

  const onBlurFourth = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusFourth(false);
  };
  const onFocusFifth = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusFifth(true);
  };

  const onBlurFifth = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocusFifth(false);
  };

  const onDelete = (index: number) => {
    let newList = _.cloneDeep(referenceContents);
    newList = referenceContents.filter((item, idx) => idx !== index);
    setReferenceContents(newList);
  };

  const switchFcn = (index: number) => {
    switch (index) {
      case 0:
        return (
          <>
            <TextFirst
              value={referenceContents[index].description || ""}
              onBlur={(e) => onBlurFirst(e)}
              onFocus={(e) => onFocusFirst(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              bgcolor={
                referenceContents[index].description === "" ? "#C4C4C4" : "#fff"
              }
              borderColor={
                referenceContents[index].description === ""
                  ? "#C4C4C4"
                  : "#905DFB"
              }
            />
            {!focusFirst && referenceContents[index].description === "" ? (
              <PlaceholderP
                onClick={() => {
                  onBlurFirst();
                }}
              >
                레퍼런스에 대한
                <br />
                설명을 입력해 주세요
              </PlaceholderP>
            ) : null}
          </>
        );
      case 1:
        return (
          <>
            <TextSecond
              value={referenceContents[index].description || ""}
              onBlur={(e) => onBlurSecond(e)}
              onFocus={(e) => onFocusSecond(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              bgcolor={
                referenceContents[index].description === "" ? "#C4C4C4" : "#fff"
              }
              borderColor={
                referenceContents[index].description === ""
                  ? "#C4C4C4"
                  : "#905DFB"
              }
            />
            {!focusSecond && referenceContents[index].description === "" ? (
              <PlaceholderP
                onClick={() => {
                  setFocusSecond(true);
                }}
              >
                레퍼런스에 대한
                <br />
                설명을 입력해 주세요
              </PlaceholderP>
            ) : null}
          </>
        );

      case 2:
        return (
          <>
            <TextThird
              value={referenceContents[index].description || ""}
              onBlur={(e) => onBlurThird(e)}
              onFocus={(e) => onFocusThird(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              bgcolor={
                referenceContents[index].description === "" ? "#C4C4C4" : "#fff"
              }
              borderColor={
                referenceContents[index].description === ""
                  ? "#C4C4C4"
                  : "#905DFB"
              }
            />
            {!focusThird && referenceContents[index].description === "" ? (
              <PlaceholderP onClick={() => setFocusThird(true)}>
                레퍼런스에 대한
                <br />
                설명을 입력해 주세요
              </PlaceholderP>
            ) : null}
          </>
        );

      case 3:
        return (
          <>
            <TextFourth
              value={referenceContents[index].description || ""}
              onBlur={(e) => onBlurFourth(e)}
              onFocus={(e) => onFocusFourth(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              bgcolor={
                referenceContents[index].description === "" ? "#C4C4C4" : "#fff"
              }
              borderColor={
                referenceContents[index].description === ""
                  ? "#C4C4C4"
                  : "#905DFB"
              }
            />
            {!focusFourth && referenceContents[index].description === "" ? (
              <PlaceholderP onClick={() => setFocusFourth(false)}>
                레퍼런스에 대한
                <br />
                설명을 입력해 주세요
              </PlaceholderP>
            ) : null}
          </>
        );

      case 4:
        return (
          <>
            <TextFifth
              value={referenceContents[index].description || ""}
              onBlur={(e) => onBlurFifth(e)}
              onFocus={(e) => onFocusFifth(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              bgcolor={
                referenceContents[index].description === "" ? "#C4C4C4" : "#fff"
              }
              borderColor={
                referenceContents[index].description === ""
                  ? "#C4C4C4"
                  : "#905DFB"
              }
            />
            {!focusFifth && referenceContents[index].description === "" ? (
              <PlaceholderP onClick={() => setFocusFifth(false)}>
                레퍼런스에 대한
                <br />
                설명을 입력해 주세요
              </PlaceholderP>
            ) : null}
          </>
        );
    }
  };
  useEffect(() => {
    textRef.current?.setAttribute("disabled", "disabled");
    textRef.current?.setAttribute(
      "placeholder",
      "마우스를 이용해 선택해주세요"
    );
  }, [textRef]);
  return (
    <>
      <MessageBox>
        <Title>
          <Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          레퍼런스 등록
        </Title>
        <SystemMessage>
          디자인 작업의 참고가 될 레퍼런스를 3개 이상 등록해주세요
        </SystemMessage>
        <EarthImgBox>
          <EarthImgContainer>
            <EarhImg></EarhImg>
          </EarthImgContainer>
          <RefLink
            as="a"
            onClick={() =>
              window.open(
                "https://di-kkak.notion.site/b45ac65c15c5495fad9539ea616172ef",
                "_blank"
              )
            }
          >
            레퍼런스 참고 페이지 알아보기
          </RefLink>
        </EarthImgBox>

        {referenceContents.map((item, index) => (
          <UploadBox key={index}>
            <UploadContainer>
              <ContentBox>
                <FileUploadLabel
                  bgcolor={
                    referenceContents[index].imgUrl !== "" ? "#fff" : "#C4C4C4"
                  }
                  borderColor="#C4C4C4"
                >
                  {item.imgUrl ? (
                    <PreviewImg url={item.imgUrl}></PreviewImg>
                  ) : (
                    <FileUploadImg></FileUploadImg>
                  )}
                  <FileUpload
                    onChange={(
                      e: ChangeEvent<HTMLInputElement> | undefined
                    ) => {
                      onLoadFile(e, index);
                    }}
                  ></FileUpload>
                </FileUploadLabel>
                <TextContainer>{switchFcn(index)}</TextContainer>
              </ContentBox>
              {index > 2 ? (
                <DeleteButton onClick={() => onDelete(index)}>X</DeleteButton>
              ) : null}
            </UploadContainer>
          </UploadBox>
        ))}
        <UploadBox>
          <UploadContainer
            style={{ justifyContent: "center", height: "35px" }}
            onClick={onAddClick}
          >
            <p style={{ color: "#905DFB", fontSize: "24px" }}>+</p>
          </UploadContainer>
        </UploadBox>
        {/* {referenceContents.map((item) => {
          if (item.description !== "" && item.imgUrl !== "") {
            setCount((prev) => prev + 1);
          }
          return null;
        })} */}

        {referenceContents[0].description &&
        referenceContents[0].imgUrl &&
        referenceContents[1].description &&
        referenceContents[1].imgUrl &&
        referenceContents[2].description &&
        referenceContents[2].imgUrl ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0 10px 0 ",
            }}
          >
            <NextStepButton onClick={onNextStep}>
              <Circle color="#EFDC34" />
              NEXT STEP
              <Circle color="#28BF1B" />
            </NextStepButton>
          </div>
        ) : null}
      </MessageBox>
    </>
  );
};

export default WorkRef;
