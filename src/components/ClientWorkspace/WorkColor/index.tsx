import React, { Fragment, RefObject, useEffect } from "react";
import _ from "lodash";
import { SketchPicker } from "react-color";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  mainColorAtom,
  subColorsAtom,
  workspaceNumAtom,
  workStepAtom,
} from "../../../atoms";
import {
  Box,
  Circle,
  ClientMessage,
  ColorBox,
  ColorText,
  DeleteButton,
  EarhImg,
  EarthImgBox,
  EarthImgContainer,
  InnerContainer,
  MessageBox,
  NextStepButton,
  RefLink,
  SystemMessage,
  Title,
} from "./styles";

interface IWorkColorProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkColor = ({ textRef }: IWorkColorProps) => {
  const [workStep, setWorkStep] = useRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const [mainColor, setMainColor] = useRecoilState(mainColorAtom);
  const [subColors, setSubColors] = useRecoilState(subColorsAtom);
  const handleColorChange = (color: string, index?: number) => {
    if (index !== 0 && !index) {
      setMainColor((prev) => {
        return { ...prev, color };
      });
      return;
    } else {
      const newList = _.cloneDeep(subColors);
      newList[index].color = color;
      setSubColors(newList);
    }
  };
  const onClick = (index?: number) => {
    if (index !== 0 && !index) {
      if (mainColor.isClicked) {
        setMainColor((prev) => {
          return { ...prev, isClicked: false };
        });
        return;
      } else {
        const newList = _.cloneDeep(subColors);
        newList.map((item) => (item.isClicked = false));
        setSubColors(newList);
        setMainColor((prev) => {
          return { ...prev, isClicked: true };
        });
      }
    } else {
      const newList = _.cloneDeep(subColors);
      if (newList[index].isClicked) {
        newList[index].isClicked = false;
        setSubColors(newList);
        return;
      } else {
        newList.map((item) => (item.isClicked = false));
        newList[index].isClicked = !newList[index].isClicked;
        setMainColor((prev) => {
          return { ...prev, isClicked: false };
        });
        setSubColors(newList);
      }
    }
  };
  const onDelete = (index: number) => {
    const newList = subColors.filter((item) => item !== subColors[index]);
    setSubColors(newList);
  };
  const onAddClick = () => {
    setSubColors((prev) => [...prev, { color: "", isClicked: false }]);
  };
  const onNextStep = () => {
    setWorkspaceNum((prev) => prev + 1);
    if (workStep.colorStep !== "done") {
      setWorkStep((prev) => {
        return {
          ...prev,
          colorStep: "done",
          referenceStep: "now",
        };
      });
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
    <>
      <MessageBox>
        <Title>
          <Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          컬러 선택
        </Title>
        <SystemMessage>디자인에 활용할 컬러를 선택해주세요</SystemMessage>
        <EarthImgBox>
          <EarthImgContainer>
            <EarhImg></EarhImg>
          </EarthImgContainer>
          <RefLink
            as="a"
            onClick={() => window.open("https://colorhunt.co/", "_blank")}
          >
            색조합 보러가기
          </RefLink>
        </EarthImgBox>
        <EarthImgBox style={{ marginBottom: "15px" }}>
          <EarthImgContainer>
            <EarhImg></EarhImg>
          </EarthImgContainer>
          <RefLink
            as="a"
            onClick={() =>
              window.open(
                "http://xtremebrandmakeover.com/color-meaning-chart/",
                "_blank"
              )
            }
          >
            색 별 의미 (영어주의😂)
          </RefLink>
        </EarthImgBox>
        <ClientMessage>
          <InnerContainer>
            <Box
              bgcolor={mainColor.color || "#C4C4C4"}
              onClick={() => onClick()}
            >
              {mainColor.color ? "" : "+"}
            </Box>
            <ColorText style={{ color: mainColor.color || "#C4C4C4" }}>
              {mainColor.color || "입력해주세요"}
            </ColorText>
            <p>메인컬러</p>
          </InnerContainer>
        </ClientMessage>
        {mainColor.isClicked && (
          <ColorBox>
            <SketchPicker
              color={mainColor.color}
              onChange={(color) => handleColorChange(color.hex)}
            />
          </ColorBox>
        )}
        {subColors.map((item, index) => (
          <Fragment key={index}>
            <ClientMessage>
              <InnerContainer>
                <Box
                  bgcolor={item.color || "#C4C4C4"}
                  onClick={() => onClick(index)}
                >
                  {item.color ? "" : "+"}
                </Box>
                <ColorText style={{ color: item.color || "#C4C4C4" }}>
                  {item.color || "입력해주세요"}
                </ColorText>
                <p>서브컬러</p>
                <DeleteButton onClick={() => onDelete(index)}>X</DeleteButton>
              </InnerContainer>
            </ClientMessage>
            {item.isClicked && (
              <ColorBox>
                <SketchPicker
                  color={item.color}
                  onChange={(color) => handleColorChange(color.hex, index)}
                />
              </ColorBox>
            )}
          </Fragment>
        ))}
        <ClientMessage
          style={{ justifyContent: "center", marginBottom: "20px" }}
          onClick={onAddClick}
        >
          <p style={{ color: "#905DFB", fontSize: "24px" }}>+</p>
        </ClientMessage>
        {mainColor.color && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NextStepButton onClick={onNextStep}>
              <Circle color="#EFDC34" />
              NEXT STEP
              <Circle color="#28BF1B" />
            </NextStepButton>
          </div>
        )}
      </MessageBox>
    </>
  );
};
export default WorkColor;
