import React, { useState, Dispatch, SetStateAction, ChangeEvent } from "react";
import styled from "styled-components";
import earthImg from "../../assets/workspaceImage/earthImg.svg";
import linkImg from "../../assets/workspaceImage/linkImage.png";
import { IContents } from "../../pages/WorkSpace_client";

const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
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

const FileUploadLabel = styled.label.attrs({
  htmlFor: "file_upload",
})`
  width: 200px;
  height: 114px;
  background-color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FileUpload = styled.input.attrs({
  type: "file",
  accept: "image/jpg, image/png, image/jpeg",
  id: "file_upload",
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

const Text = styled.textarea`
  width: 426px;
  height: 114px;
  background-color: #c4c4c4;
  border: 1px solid #5f5151;
  padding: 10px;
  outline: none;
  border: 0;
  color: #717171;
  resize: none;
  border-radius: 5px;

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

interface WorkRefProtection {
  setFiles: Dispatch<SetStateAction<FileList | null>>;
  contents: IContents[];
}

const WorkRef = ({ setFiles, contents }: WorkRefProtection) => {
  const [focus, setFocus] = useState(true);
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  const onFocus = () => {
    setFocus(false);
  };

  const onBlur = () => {
    setFocus(true);
  };

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
        let urlList = [...imgUrls];

        urlList[index] = url;
        setImgUrls(urlList);
      }
      fileReader.onload = () => {
        console.log(fileReader.result);
      };
    }
    return;
  };

  const PreviewImg = styled.div<{ url?: string }>`
    background-image: url(${(props) => props.url || null});
    width: 200px;
    height: 114px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

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

        <UploadBox>
          <UploadContainer>
            <ContentBox>
              <FileUploadLabel>
                {imgUrls[0] ? (
                  <PreviewImg url={imgUrls[0]}></PreviewImg>
                ) : (
                  <FileUploadImg></FileUploadImg>
                )}
                <FileUpload
                  onChange={(e) => {
                    onLoadFile(e, 0);
                  }}
                ></FileUpload>
              </FileUploadLabel>
              <TextContainer>
                <Text onFocus={onFocus} onBlur={onBlur}></Text>
                {focus && (
                  <PlaceholderP>
                    레퍼런스에 대한<br></br> 설명을 입력해주세요
                  </PlaceholderP>
                )}
              </TextContainer>
            </ContentBox>
          </UploadContainer>
        </UploadBox>

        <UploadBox>
          <UploadContainer>
            <ContentBox>
              <FileUploadLabel>
                {imgUrls[1] ? (
                  <PreviewImg url={imgUrls[1]}></PreviewImg>
                ) : (
                  <FileUploadImg></FileUploadImg>
                )}
                <FileUpload
                  onChange={(e) => {
                    console.log("second");
                    onLoadFile(e, 1);
                  }}
                ></FileUpload>
              </FileUploadLabel>
              <TextContainer>
                <Text onFocus={onFocus} onBlur={onBlur}></Text>
                {focus && (
                  <PlaceholderP>
                    레퍼런스에 대한<br></br> 설명을 입력해주세요
                  </PlaceholderP>
                )}
              </TextContainer>
            </ContentBox>
          </UploadContainer>
        </UploadBox>
        {/* <UploadBox style={{ justifyContent: "center" }} onClick={onAddClick}>
          <p style={{ color: "#905DFB", fontSize: "24px" }}>+</p>
        </UploadBox> */}
      </MessageBox>
    </>
  );
};

export default WorkRef;
