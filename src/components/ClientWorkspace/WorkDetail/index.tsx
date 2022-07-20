import _ from "lodash";
import React, { RefObject } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  IWorkDetail,
  workChoiceAtom,
  workDetailAtom,
  workspaceNumAtom,
  workStepAtom,
} from "../../../atoms";
import {
  MessageBox,
  SystemMessage,
  Grid,
  GridItem,
  NextStepButton,
  Circle,
  Title,
  ModelingDesc,
  QuestionBox,
  DescList,
} from "./style";

interface IWorkDetailProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkDetail = ({ textRef }: IWorkDetailProps) => {
  const setWorkStep = useSetRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const [workDetail, setWorkDetail] = useRecoilState(workDetailAtom);
  const workChoice = useRecoilValue(workChoiceAtom);

  const handleDetailClicked = (detail: keyof IWorkDetail) => {
    let copyArr = _.cloneDeep(workDetail);
    for (const property in copyArr) {
      copyArr[property as keyof IWorkDetail] = false;
    }
    copyArr[detail] = true;
    setWorkDetail(copyArr);
  };

  const onClick = () => {
    textRef.current?.removeAttribute("disabled");
    textRef.current?.setAttribute("placeholder", "디자인 용도를 입력해주세요");
    textRef.current?.focus();
    setWorkStep((prev) => {
      return {
        ...prev,
        detailStep: "done",
        purposeStep: "now",
      };
    });
    setWorkspaceNum((prev) => prev + 1);
  };
  return (
    <>
      <MessageBox>
        <Title>
          <Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          세부사항 선택
        </Title>
        {workChoice.logoOrCard && (
          <>
            <SystemMessage width="290px">
              맡기고자 하는 디자인 분야를 선택해주세요
            </SystemMessage>
            <Grid>
              <GridItem
                isActive={workDetail.logo}
                onClick={() => handleDetailClicked("logo")}
              >
                로고
              </GridItem>
              <GridItem
                isActive={workDetail.nameCard}
                onClick={() => handleDetailClicked("nameCard")}
              >
                명함
              </GridItem>
            </Grid>
          </>
        )}
        {workChoice.package && (
          <>
            <SystemMessage width="290px">
              맡기고자 하는 디자인 범위를 선택해주세요
            </SystemMessage>
            <Grid>
              <GridItem
                isActive={workDetail.onlyDesign}
                onClick={() => handleDetailClicked("onlyDesign")}
              >
                단순
                <br />
                디자인
              </GridItem>
              <GridItem
                isActive={workDetail.designAndMake}
                onClick={() => handleDetailClicked("designAndMake")}
              >
                디자인
                <br />
                +
                <br />
                제작
              </GridItem>
            </Grid>
          </>
        )}
        {workChoice.posterLeaflet && (
          <>
            <SystemMessage width="290px">
              맡기고자 하는 디자인 분야를 선택해주세요
            </SystemMessage>
            <Grid>
              <GridItem
                isActive={workDetail.poster}
                onClick={() => handleDetailClicked("poster")}
              >
                포스터
              </GridItem>
              <GridItem
                isActive={workDetail.leaflet}
                onClick={() => handleDetailClicked("leaflet")}
              >
                리플렛
              </GridItem>
            </Grid>
          </>
        )}
        {workChoice.landingPage && (
          <>
            <SystemMessage width="290px">
              맡기고자 하는 작업의 범위를 선택해주세요
            </SystemMessage>
            <Grid>
              <GridItem
                isActive={workDetail.onlyDesign}
                onClick={() => handleDetailClicked("onlyDesign")}
              >
                디자인만
              </GridItem>
              <GridItem
                isActive={workDetail.designAndPublishing}
                onClick={() => handleDetailClicked("designAndPublishing")}
              >
                퍼블리싱
                <br />
                까지
              </GridItem>
            </Grid>
          </>
        )}
        {workChoice.detailPage && (
          <>
            <SystemMessage width="320px">
              맡기고자 하는 제품의 촬영 유무를 선택해주세요
            </SystemMessage>
            <Grid>
              <GridItem
                isActive={workDetail.requirePhoto}
                onClick={() => handleDetailClicked("requirePhoto")}
              >
                필요함
              </GridItem>
              <GridItem
                isActive={workDetail.noRequirePhoto}
                onClick={() => handleDetailClicked("noRequirePhoto")}
              >
                필요없음
              </GridItem>
            </Grid>
          </>
        )}
        {workChoice.videoEditing && (
          <>
            <SystemMessage width="609px">
              맡기고자 하는 제품의 영상 원본 길이를 선택해주세요
              <p style={{ fontSize: "10px", marginTop: "3px" }}>
                &nbsp;(기타를 선택한 경우 해당 내용을 사용 목적 단계에
                적어주세요)
              </p>
            </SystemMessage>
            <Grid>
              <GridItem
                isActive={workDetail.within5minutes}
                onClick={() => handleDetailClicked("within5minutes")}
              >
                5분
                <br />
                이내
              </GridItem>
              <GridItem
                isActive={workDetail.within10minutes}
                onClick={() => handleDetailClicked("within10minutes")}
              >
                10분
                <br />
                이내
              </GridItem>
              <GridItem
                isActive={workDetail.within30minutes}
                onClick={() => handleDetailClicked("within30minutes")}
              >
                30분
                <br />
                이내
              </GridItem>
              <GridItem
                isActive={workDetail.within1hour}
                onClick={() => handleDetailClicked("within1hour")}
              >
                1시간
                <br />
                이내
              </GridItem>
              <GridItem
                isActive={workDetail.within2hours}
                onClick={() => handleDetailClicked("within2hours")}
              >
                2시간
                <br />
                이내
              </GridItem>
              <GridItem
                isActive={workDetail.other}
                onClick={() => handleDetailClicked("other")}
              >
                기타
              </GridItem>
            </Grid>
          </>
        )}
        {workChoice.product3D && (
          <>
            <SystemMessage width="451px">
              어떤 모델링이 필요한가요?
              <p style={{ fontSize: "10px", marginTop: "3px" }}>
                &nbsp;(기타를 선택한 경우 해당 내용을 사용 목적 단계에
                적어주세요)
              </p>
            </SystemMessage>
            <ModelingDesc>
              <QuestionBox />
              <DescList>
                <li>초급: 간단한 도형 기반의 제품</li>
                <li>중급: 캐릭터 등 다소 복잡한 구조의 제품</li>
                <li>고급: 실사인체, 자동차 등의 복잡한 구조의 제품</li>
              </DescList>
            </ModelingDesc>
            <Grid>
              <GridItem
                isActive={workDetail.basic}
                onClick={() => handleDetailClicked("basic")}
              >
                초급
              </GridItem>
              <GridItem
                isActive={workDetail.intermediate}
                onClick={() => handleDetailClicked("intermediate")}
              >
                중급
              </GridItem>
              <GridItem
                isActive={workDetail.advanced}
                onClick={() => handleDetailClicked("advanced")}
              >
                고급
              </GridItem>
              <GridItem
                isActive={workDetail.other}
                onClick={() => handleDetailClicked("other")}
              >
                기타
              </GridItem>
            </Grid>
          </>
        )}
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

export default WorkDetail;
