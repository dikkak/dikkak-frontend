import React, { RefObject, useEffect } from "react";
import _ from "lodash";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  IWorkChoice,
  IWorkDetail,
  workChoiceAtom,
  workDetailAtom,
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

interface IWorkChoiceProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkChoice = ({ textRef }: IWorkChoiceProps) => {
  const [workStep, setWorkStep] = useRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const [workChoice, setWorkChoice] = useRecoilState(workChoiceAtom);
  const [workDetail, setWorkDetail] = useRecoilState(workDetailAtom);

  const onClickWork = (workName: keyof IWorkChoice) => {
    let copyChoiceArr = _.cloneDeep(workChoice);
    let copyDetailArr = _.cloneDeep(workDetail);
    for (const property in copyChoiceArr) {
      copyChoiceArr[property as keyof IWorkChoice] = false;
    }
    for (const property in copyDetailArr) {
      copyDetailArr[property as keyof IWorkDetail] = false;
    }
    copyChoiceArr[workName] = true;
    setWorkDetail(copyDetailArr);
    setWorkChoice(copyChoiceArr);
  };

  const onClick = () => {
    if (workChoice.OTHER) {
      setWorkspaceNum((prev) => prev + 2);
      if (workStep.workChoiceStep !== "done") {
        setWorkStep((prev) => {
          return {
            ...prev,
            workChoiceStep: "done",
            detailStep: "done",
            purposeStep: "now",
          };
        });
      }
    } else {
      setWorkspaceNum((prev) => prev + 1);
      if (workStep.workChoiceStep !== "done") {
        setWorkStep((prev) => {
          return {
            ...prev,
            workChoiceStep: "done",
            detailStep: "now",
          };
        });
      }
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
          onClick={() => onClickWork("LOGO_OR_CARD")}
          isLogoActive={workChoice.LOGO_OR_CARD}
        >
          로고
          <br />
          or
          <br />
          명함
        </LogoOrName>
        <Package
          onClick={() => onClickWork("PACKAGE")}
          isPackageActive={workChoice.PACKAGE}
        >
          패키지
        </Package>
        <Detail
          onClick={() => onClickWork("DETAIL_PAGE")}
          isDetailActive={workChoice.DETAIL_PAGE}
        >
          상세
          <br />
          페이지
        </Detail>
        <Video
          onClick={() => onClickWork("VIDEO_EDITING")}
          isVideoActive={workChoice.VIDEO_EDITING}
        >
          영상
          <br />
          편집
        </Video>
        <Product
          onClick={() => onClickWork("PRODUCT_3D")}
          isProductActive={workChoice.PRODUCT_3D}
        >
          제품
          <br />
          (3D)
        </Product>
        <Poster
          onClick={() => onClickWork("POSTER_LEAFLET")}
          isPosterActive={workChoice.POSTER_LEAFLET}
        >
          포스터
          <br />
          or
          <br />
          리플렛
        </Poster>
        <Landing
          onClick={() => onClickWork("LANDING_PAGE")}
          isLandingActive={workChoice.LANDING_PAGE}
        >
          렌딩
          <br />
          페이지
        </Landing>
        <Etc
          onClick={() => onClickWork("OTHER")}
          isEtcActive={workChoice.OTHER}
        >
          기타
        </Etc>
      </Grid>
      {workChoice.LOGO_OR_CARD ||
      workChoice.PACKAGE ||
      workChoice.DETAIL_PAGE ||
      workChoice.VIDEO_EDITING ||
      workChoice.PRODUCT_3D ||
      workChoice.POSTER_LEAFLET ||
      workChoice.LANDING_PAGE ||
      workChoice.OTHER ? (
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
