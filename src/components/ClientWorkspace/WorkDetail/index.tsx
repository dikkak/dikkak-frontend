import React, { useState, RefObject } from "react";
import { useSetRecoilState } from 'recoil';
import { workspaceNumAtom, workStepAtom } from '../../../atoms';
import {
  MessageBox,
  SystemMessage1,
  SystemMessage2,
  Grid,
  Logo,
  Name,
  Yes,
  No,
  NextStepButton,
  Circle,
  Title,
} from "./style";

interface IWorkDetailProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkDetail = ({textRef}: IWorkDetailProps) => {
  const setWorkStep = useSetRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
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
    textRef.current?.removeAttribute("disabled");
    textRef.current?.setAttribute("placeholder", "디자인 용도를 입력해주세요");
    textRef.current?.focus();
    setWorkStep(prev => {
      return {
        ...prev,
        detailStep: 'done',
        purposeStep: 'now'
      }
    });
    setWorkspaceNum(prev => prev+1);
  };

  return (
    <>
      <MessageBox>
        <Title><Circle color='#905DFB' style={{display: 'inline-block', marginRight: '5px'}}/>세부사항 선택</Title>
        <SystemMessage1>맡기고자 하는 디자인분야를 선택해주세요</SystemMessage1>
        <Grid>
          <Logo isLogoActive={isLogoActive} onClick={handleIsLogoClick}>
            로고
          </Logo>
          <Name isNameActive={isNameActive} onClick={handleisNameClick}>
            명함
          </Name>
        </Grid>
        <SystemMessage2>
          인쇄과정까지 외주로 진행하실건가요?(명함 선택시)
        </SystemMessage2>
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
