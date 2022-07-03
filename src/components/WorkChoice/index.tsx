import React, { useState, Dispatch, SetStateAction } from "react";
import {
  JobChoiceBox,
  SystemMessage,
  Grid,
  LogoOrName,
  Package,
  Detail,
  Video,
  Product,
  Poster,
  Rending,
  Etc,
  NextStepButton,
  Circle,
  Title,
} from "./styles";

interface IWorkChoiceProps {
  workspaceNum: number;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  purposeStep: Dispatch<SetStateAction<string>>;
  workStep: Dispatch<SetStateAction<string>>;
  detailStep: Dispatch<SetStateAction<string>>;
}

const WorkChoice = ({
  workspaceNum,
  setworkspaceNum,
  workStep,
  purposeStep,
  detailStep,
}: IWorkChoiceProps) => {
  const [isLogoActive, setIsLogoActive] = useState(false);
  const [isPackageActive, setIsPackageActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isProductActive, setIsProductActive] = useState(false);
  const [isPosterActive, setIsPosterActive] = useState(false);
  const [isRendingActive, setIsRendingActive] = useState(false);
  const [isEtcActive, setIsEtcActive] = useState(false);

  const handleIsLogoClick = () => {
    setIsLogoActive((cur) => !cur);
  };

  const handleIsPackageClick = () => {
    setIsPackageActive((cur) => !cur);
  };

  const handleIsDetailClick = () => {
    setIsDetailActive((cur) => !cur);
  };

  const handleIsVideoClick = () => {
    setIsVideoActive((cur) => !cur);
  };
  const handleIsProductClick = () => {
    setIsProductActive((cur) => !cur);
  };

  const handleIsPosterClick = () => {
    setIsPosterActive((cur) => !cur);
  };

  const handleIsRendingClick = () => {
    setIsRendingActive((cur) => !cur);
  };
  const handleIsEtcClick = () => {
    setIsEtcActive((cur) => !cur);
  };

  const onClick = () => {
    setworkspaceNum((workspaceNum += 1));
    workStep("done");
    detailStep("now");
  };

  return (
    <JobChoiceBox>
      <Title><Circle color='#905DFB' style={{display: 'inline-block', marginRight: '5px'}}/>작업 선택</Title>
      <SystemMessage>맡기고자 하는 디자인 분야를 선택해주세요</SystemMessage>
      <Grid>
        <LogoOrName onClick={handleIsLogoClick} isLogoActive={isLogoActive}>
          로고
          <br />
          or
          <br />
          명함
        </LogoOrName>
        <Package
          onClick={handleIsPackageClick}
          isPackageActive={isPackageActive}
        >
          패키지
        </Package>
        <Detail onClick={handleIsDetailClick} isDetailActive={isDetailActive}>
          상세
          <br />
          페이지
        </Detail>
        <Video onClick={handleIsVideoClick} isVideoActive={isVideoActive}>
          영상
          <br />
          편집
        </Video>
        <Product
          onClick={handleIsProductClick}
          isProductActive={isProductActive}
        >
          제품
          <br />
          (3D)
        </Product>
        <Poster onClick={handleIsPosterClick} isPosterActive={isPosterActive}>
          포스터
          <br />
          or
          <br />
          리플렛
        </Poster>
        <Rending
          onClick={handleIsRendingClick}
          isRendingActive={isRendingActive}
        >
          렌딩
          <br />
          페이지
        </Rending>
        <Etc onClick={handleIsEtcClick} isEtcActive={isEtcActive}>
          기타
        </Etc>
      </Grid>
      {isLogoActive ||
      isPackageActive ||
      isDetailActive ||
      isVideoActive ||
      isProductActive ||
      isPosterActive ||
      isRendingActive ||
      isEtcActive ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NextStepButton onClick={onClick}>
            <Circle color="#EFDC34" />
            NEXT STEP
            <Circle color="#28BF1B" />
          </NextStepButton>
        </div>
      ) : null}
    </JobChoiceBox>
  );
};

export default WorkChoice;
