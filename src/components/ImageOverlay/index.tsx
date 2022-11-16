import React, { useState } from "react";
import styled from "styled-components";
import { onDownload } from "../../utils/onDownload";
import Toast from "../Toast";
import logoWhite from "../../assets/logoImage/logoWhite.svg";
import downloadImg from "../../assets/logoImage/downloadImg.svg";
import closeImg from "../../assets/logoImage/closeImg.svg";

interface ImageOverlayProps {
  imageName: string;
  imageUrl: string;
  imageIndex?: number;
  fileLength?: number;
  proposal?: boolean;
  chat?: boolean;
  setIsRefClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageOverlay = ({
  imageName,
  imageUrl,
  imageIndex,
  fileLength,
  proposal,
  chat,
  setIsRefClicked,
}: ImageOverlayProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Overlay>
      <IndexBox>
        {proposal && (
          <h1>
            ({imageIndex}/{fileLength})
          </h1>
        )}
        <img src={logoWhite} alt="logoWhite" />
      </IndexBox>
      <ContentBox>
        {proposal ? (
          <h1>
            제안서 작업실 {">"} 레퍼런스 등록 {">"} {imageName}
          </h1>
        ) : (
          <h1>{imageName}</h1>
        )}
        <p>
          *정확한 이미지가 아닐 수 있습니다. 다운로드 받아 정확한 이미지를
          확인해주세요.
        </p>
        <ImageBox>
          <img src={imageUrl} alt="clickedImage" />
        </ImageBox>
      </ContentBox>
      <ButtonsBox>
        <Download
          onClick={() => {
            onDownload(
              imageUrl.split(
                "https://dikkak.s3.ap-northeast-2.amazonaws.com/"
              )[1],
              imageName,
              chat,
              setIsActive
            );
          }}
        />
        <Close onClick={() => setIsRefClicked(false)} />
      </ButtonsBox>
      <Toast
        isActive={isActive}
        setIsActive={setIsActive}
        message={"파일 다운로드가 완료되었습니다!"}
      />
    </Overlay>
  );
};

export default ImageOverlay;

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;
const CommonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  color: white;
`;
const IndexBox = styled(CommonBox)`
  flex-basis: 30%;
  & > h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const ContentBox = styled(CommonBox)`
  flex-basis: 40%;
  overflow: scroll;
  & > h1 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  & > p {
    font-size: 10px;
    margin-bottom: 25px;
  }
`;
const ImageBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;
const ButtonsBox = styled(CommonBox)`
  flex-basis: 30%;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;
const Download = styled.img.attrs({ src: downloadImg, alt: "downloadImg" })`
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Close = styled.img.attrs({ src: closeImg, alt: "closeImg" })`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
