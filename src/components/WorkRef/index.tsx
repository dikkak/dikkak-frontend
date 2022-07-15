import React, { useState, Dispatch, SetStateAction, ChangeEvent } from "react";
import styled from "styled-components";
import { isNullOrUndefined } from "util";
import earthImg from "../../assets/workspaceImage/earthImg.svg";
import linkImg from "../../assets/workspaceImage/linkImage.png";
import { IContents } from "../../pages/WorkSpace_client";

const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 10px;
`;

const SystemMessage = styled.p`
  height: 35px;
  width: 393px;
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 10px;
  padding-right: 10px;

  &::before {
    content: "";
    position: relative;
    background-color: transparent;
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 0px solid transparent;
    border-right: 15px solid ${(props) => props.theme.mainColor};
    left: -11.5px;
  }
`;

const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const EarthImgContainer = styled.div`
  background-color: #c4c4c4;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EarhImg = styled.img.attrs({
  src: earthImg,
})`
  width: 20px;
  height: 18px;
`;

const EarthImgBox = styled.p`
  width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const RefLink = styled.button`
  color: ${(props) => props.theme.mainColor};
  border-bottom: 0.5px solid ${(props) => props.theme.mainColor};
  font-size: 10px;
  line-height: 14.48px;
  margin-left: 10px;
  font-weight: 700;
  cursor: pointer;
`;

const UploadBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  cursor: pointer;
`;

const UploadContainer = styled.div`
  width: 679px;
  height: 140px;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent ${(props) => props.theme.mainColor};
    display: block;
    width: 0;
    z-index: 0;
    right: -14px;
    top: 9px;
  }

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    right: -12px;
    top: 9px;
  }
`;

const ContentBox = styled.div`
  position: relative;
  width: 630px;
  height: 114px;
  display: flex;
  justify-content: space-between;
`;

const FileUploadLabel = styled.label<{ bgcolor?: string }>`
  width: 200px;
  height: 114px;
  background-color: #c4c4c4;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FileUpload = styled.input.attrs({
  type: "file",
  accept: "image/jpg, image/png, image/jpeg",
})`
  display: none;
`;

const FileUploadImg = styled.img.attrs({ src: linkImg })`
  width: 20px;
  height: 20px;
`;

const TextContainer = styled.div`
  width: 426px;
  height: 114px;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0px;
`;

const Text = styled.textarea<{ bgcolor?: string; borderColor?: string }>`
  width: 426px;
  height: 114px;
  background-color: #c4c4c4;
  border: 1px solid ${(props) => props.borderColor};
  padding: 10px;
  outline: none;
  border: 0;
  color: #717171;
  resize: none;
  border-radius: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
    background: transparent;
  }
`;

const PlaceholderP = styled.p`
  font-family: "Noto Sans KR";
  background-color: #000;
  position: absolute;
  color: #717171;
  background: transparent;
  font-size: 15px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const PreviewImg = styled.div<{ url?: string }>`
  background-image: url(${(props) => props.url || ""});
  width: 200px;
  height: 114px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

const NextStepButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 440px;
  height: 30px;
  background-color: #717171;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const TextFirst = styled(Text)``;
const TextSecond = styled(Text)``;
const TextThird = styled(Text)``;
const TextFourth = styled(Text)``;
const TextFifth = styled(Text)``;

interface IWorkRefProps {
  setContents: Dispatch<SetStateAction<IContents[]>>;
  contents: IContents[];
  workspaceNum: number;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  referenceStep: Dispatch<SetStateAction<string>>;
  setEtcStep: Dispatch<SetStateAction<string>>;
}

let count = 0;

const WorkRef = ({
  setContents,
  contents,
  workspaceNum,
  setworkspaceNum,
  referenceStep,
  setEtcStep,
}: IWorkRefProps) => {
  const [focusFirst, setFocusFirst] = useState(false);
  const [focusSecond, setFocusSecond] = useState(false);
  const [focusThird, setFocusThird] = useState(false);
  const [focusFourth, setFocusFourth] = useState(false);
  const [focusFifth, setFocusFifth] = useState(false);

  const onLoadFile = (
    e: ChangeEvent<HTMLInputElement> | undefined,
    index: number
  ) => {
    console.log(index);
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
    let contentList = [...contents];
    if (url) {
      contentList[index].imgUrl = url;
      setContents(contentList);
    } else if (des) {
      contentList[index].description = des;
      setContents(contentList);
    }
    console.log(contentList);
  };

  const onAddClick = () => {
    if (contents.length < 5) {
      setContents((prev) => [...prev, { imgUrl: "", description: "" }]);
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
    setworkspaceNum((workspaceNum += 1));
    referenceStep("done");
    setEtcStep("now");
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
            {!focusFirst && contents[index].description === "" ? (
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
        let count = 0;
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
            {!focusSecond && contents[index].description === "" ? (
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
            {!focusThird && contents[index].description === "" ? (
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
            {!focusFourth && contents[index].description === "" ? (
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
            {!focusFifth && contents[index].description === "" ? (
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

        {contents.map((item, index) => (
          <UploadBox>
            <UploadContainer>
              <ContentBox>
                <FileUploadLabel
                  bgcolor={
                    contents[index].imgUrl !== "" ||
                    contents[index].description !== ""
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
        {contents.map((item) => {
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
