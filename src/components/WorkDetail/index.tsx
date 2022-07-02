import React, { Dispatch, SetStateAction, useState, RefObject } from "react";
import {
  MessageBox,
  SystemMessage,
  Grid,
  Logo,
  Name,
  Yes,
  No,
  NextStepButton,
  Circle,
} from "./style";

interface WorkspaceNumProtection {
  workspaceNum: number;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  purposeStep: Dispatch<SetStateAction<string>>;
  workStep: Dispatch<SetStateAction<string>>;
  detailStep: Dispatch<SetStateAction<string>>;
  textRef: RefObject<HTMLTextAreaElement>;
  tagRef: RefObject<HTMLInputElement>;
}

const WorkDetail = ({
  workStep,
  detailStep,
  purposeStep,
  workspaceNum,
  setworkspaceNum,
  textRef,
  tagRef,
}: WorkspaceNumProtection) => {
  const [isLogoActive, setIsLogoActive] = useState(false);
  const [isNameActive, setIsNameActive] = useState(false);
  const [isYesActive, setIsYesActive] = useState(false);
  const [isNoActive, setIsNoActive] = useState(false);

  const handleIsLogoClick = () => {
    setIsLogoActive((cur) => !cur);
  };

  const handleisNameClick = () => {
    setIsNameActive((cur) => !cur);
  };

  const handleIsYesClick = () => {
    setIsYesActive((cur) => !cur);
  };

  const handleIsNoClick = () => {
    setIsNoActive((cur) => !cur);
  };
  const onClick = () => {
    setworkspaceNum((workspaceNum += 1));
    purposeStep("now");
    detailStep("done");
    textRef.current?.removeAttribute("disabled");
    textRef.current?.setAttribute("placeholder", "디자인 용도를 입력해주세요");
    textRef.current?.focus();
  };

  return (
    <>
      <MessageBox>
        <SystemMessage>맡기고자 하는 디자인분야를 선택해주세요</SystemMessage>
        <Grid>
          <Logo isLogoActive={isLogoActive} onClick={handleIsLogoClick}>
            로고
          </Logo>
          <Name isNameActive={isNameActive} onClick={handleisNameClick}>
            명함
          </Name>
        </Grid>
        <SystemMessage>
          인쇄과정까지 외주로 진행하실건가요?(명함 선택시)
        </SystemMessage>
        <Grid>
          <Yes isYesActive={isYesActive} onClick={handleIsYesClick}>
            네
          </Yes>
          <No isNoActive={isNoActive} onClick={handleIsNoClick}>
            아니오
          </No>
        </Grid>
        {
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NextStepButton onClick={onClick}>
              <Circle color="#EFDC34" />
              NEXT STEP
              <Circle color="#28BF1B" />
            </NextStepButton>
          </div>
        }
      </MessageBox>
    </>
  );
};
// test용 주석

export default WorkDetail;
