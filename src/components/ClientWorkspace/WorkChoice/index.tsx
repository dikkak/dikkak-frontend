import React from "react";
import _ from "lodash";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  IWorkChoice,
  workChoiceAtom,
  workspaceNumAtom,
  workStepAtom,
} from "../../../atoms";
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
  Landing,
  Etc,
  NextStepButton,
  Circle,
  Title,
} from "./styles";

const WorkChoice = () => {
  const setWorkStep = useSetRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const [workChoice, setWorkChoice] = useRecoilState(workChoiceAtom);

  const onClickWork = (workName: keyof IWorkChoice) => {
    let copyArr = _.cloneDeep(workChoice);
    for (const property in copyArr) {
      copyArr[property as keyof IWorkChoice] = false;
    }
    copyArr[workName] = true;
    setWorkChoice(copyArr);
  };

  const onClick = () => {
    if (workChoice.other) {
      setWorkspaceNum((prev) => prev + 2);
      setWorkStep((prev) => {
        return {
          ...prev,
          workChoiceStep: "done",
          detailStep: "done",
          purposeStep: "now",
        };
      });
    } else {
      setWorkspaceNum((prev) => prev + 1);
      setWorkStep((prev) => {
        return {
          ...prev,
          workChoiceStep: "done",
          detailStep: "now",
        };
      });
    }
  };

  return (
    <JobChoiceBox>
      <Title>
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        작업 선택
      </Title>
      <SystemMessage>
        맡기고자 하는 디자인 분야를 선택해주세요
        <p style={{ fontSize: "10px", marginTop: "3px" }}>
          &nbsp;(기타를 선택한 경우 해당 내용을 사용 목적 단계에 적어주세요)
        </p>
      </SystemMessage>
      <Grid>
        <LogoOrName
          onClick={() => onClickWork("logoOrCard")}
          isLogoActive={workChoice.logoOrCard}
        >
          로고
          <br />
          or
          <br />
          명함
        </LogoOrName>
        <Package
          onClick={() => onClickWork("package")}
          isPackageActive={workChoice.package}
        >
          패키지
        </Package>
        <Detail
          onClick={() => onClickWork("detailPage")}
          isDetailActive={workChoice.detailPage}
        >
          상세
          <br />
          페이지
        </Detail>
        <Video
          onClick={() => onClickWork("videoEditing")}
          isVideoActive={workChoice.videoEditing}
        >
          영상
          <br />
          편집
        </Video>
        <Product
          onClick={() => onClickWork("product3D")}
          isProductActive={workChoice.product3D}
        >
          제품
          <br />
          (3D)
        </Product>
        <Poster
          onClick={() => onClickWork("posterLeaflet")}
          isPosterActive={workChoice.posterLeaflet}
        >
          포스터
          <br />
          or
          <br />
          리플렛
        </Poster>
        <Landing
          onClick={() => onClickWork("landingPage")}
          isLandingActive={workChoice.landingPage}
        >
          렌딩
          <br />
          페이지
        </Landing>
        <Etc
          onClick={() => onClickWork("other")}
          isEtcActive={workChoice.other}
        >
          기타
        </Etc>
      </Grid>
      {workChoice.logoOrCard ||
      workChoice.package ||
      workChoice.detailPage ||
      workChoice.videoEditing ||
      workChoice.product3D ||
      workChoice.posterLeaflet ||
      workChoice.landingPage ||
      workChoice.other ? (
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
