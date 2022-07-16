import React, { useState, ChangeEvent } from "react";
import _ from 'lodash';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { referenceContentsAtom, workspaceNumAtom, workStepAtom } from '../../../atoms';
import { Circle, ContentBox, EarhImg, EarthImgBox, EarthImgContainer, FileUpload, FileUploadImg, FileUploadLabel, MessageBox, NextStepButton, PlaceholderP, PreviewImg, RefLink, SystemMessage, TextContainer, TextFifth, TextFirst, TextFourth, TextSecond, TextThird, Title, UploadBox, UploadContainer } from './style';

let count = 0;

const WorkRef = () => {
  const [referenceContents, setReferenceContents] = useRecoilState(referenceContentsAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const setWorkStep = useSetRecoilState(workStepAtom);
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
      console.log(files[0].name);

      const fileReader = new FileReader();

      if (files[0]) {
        fileReader.readAsDataURL(files[0]);
        const url = URL.createObjectURL(files[0]);
        previewStore(index, url);
      }
      fileReader.onload = () => {
        console.log(fileReader.result);
      };
    }
    return;
  };

  const previewStore = (
    index: number,
    url?: string | "",
    des?: string | ""
  ) => {
    let contentList = _.cloneDeep(referenceContents);
    if (url) {
      contentList[index].imgUrl = url;
      setReferenceContents(contentList);
    } else if (des) {
      contentList[index].description = des;
      setReferenceContents(contentList);
    }
    console.log(contentList);
  };

  const onAddClick = () => {
    if (referenceContents.length < 5) {
      setReferenceContents((prev) => [...prev, { imgUrl: "", description: "" }]);
    }
  };
  const onKeyBoardChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    let des = e.target.value;
    previewStore(index, "", des);
  };

  const onNextStep = () => {
    setWorkspaceNum(prev => prev+1);
    setWorkStep(prev => {
      return {
        ...prev,
        referenceStep: 'done',
        etcStep: 'now'
      }
    })
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

  const switchFcn = (index: number) => {
    switch (index) {
      case 0:
        return (
          <>
            <TextFirst
              onBlur={(e) => onBlurFirst(e)}
              onFocus={(e) => onFocusFirst(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              // bgcolor={
              //   contents[index].imgUrl !== "" ||
              //   contents[index].description !== ""
              //     ? "#C4C4C4"
              //     : "#fff"
              // }
              // borderColor={
              //   contents[index].imgUrl !== "" ||
              //   contents[index].description !== ""
              //     ? "#905DFB"
              //     : "#C4C4C4"
              // }
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
              onBlur={(e) => onBlurSecond(e)}
              onFocus={(e) => onFocusSecond(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              // bgcolor={
              //   contents[index].imgUrl !== "" ||
              //   contents[index].description !== ""
              //     ? "#fff"
              //     : "#C4C4C4"
              // }
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
              onBlur={(e) => onBlurThird(e)}
              onFocus={(e) => onFocusThird(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              // bgcolor={
              //   contents[index].imgUrl !== "" ||
              //   contents[index].description !== ""
              //     ? "#fff"
              //     : "#C4C4C4"
              // }
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
              onBlur={(e) => onBlurFourth(e)}
              onFocus={(e) => onFocusFourth(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              // bgcolor={
              //   contents[index].imgUrl !== "" ||
              //   contents[index].description !== ""
              //     ? "#fff"
              //     : "#C4C4C4"
              // }
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
              onBlur={(e) => onBlurFifth(e)}
              onFocus={(e) => onFocusFifth(e)}
              onChange={(e) => onKeyBoardChange(e, index)}
              // bgcolor={
              //   contents[index].imgUrl !== "" ||
              //   contents[index].description !== ""
              //     ? "#fff"
              //     : "#C4C4C4"
              // }
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
          <RefLink as="a">레퍼런스 참고 페이지 알아보기</RefLink>
        </EarthImgBox>

        {referenceContents.map((item, index) => (
          <UploadBox key={index}>
            <UploadContainer>
              <ContentBox>
                <FileUploadLabel
                  bgcolor={
                    referenceContents[index].imgUrl !== "" ||
                    referenceContents[index].description !== ""
                      ? "#fff"
                      : "#C4C4C4"
                  }
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
        {referenceContents.map((item) => {
          if (item.description !== "" && item.imgUrl !== "") {
            count += 1;
          }
          return null;
        })}

        {count >= 2 ? (
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
