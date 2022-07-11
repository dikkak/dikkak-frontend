import React, {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  ChangeEventHandler,
} from "react";
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

const FileUploadLabel = styled.label`
  width: 200px;
  height: 114px;
  background-color: #c4c4c4;

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

const PreviewImg = styled.div<{ url?: string }>`
  background-image: url(${(props) => props.url || ""});
  width: 200px;
  height: 114px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
`;

interface IWorkRef {
  setContents: Dispatch<SetStateAction<IContents[]>>;
  contents: IContents[];
}

const WorkRef = ({ setContents, contents }: IWorkRef) => {
  const [focus, setFocus] = useState(true);

  const onFocus = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    setFocus(false);
  };

  const onBlur = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
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
    const des = e.target.value;
    previewStore(index, "", des);
    setFocus(false);
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
                <FileUploadLabel>
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
                <TextContainer>
                  <Text
                    onBlur={(e) => onBlur(e)}
                    onFocus={(e) => onFocus(e)}
                    onChange={(e) => onKeyBoardChange(e, index)}
                  ></Text>
                  {focus && (
                    <PlaceholderP>
                      레퍼런스에 대한<br></br> 설명을 입력해주세요
                    </PlaceholderP>
                  )}
                </TextContainer>
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
      </MessageBox>
    </>
  );
};

export default WorkRef;
