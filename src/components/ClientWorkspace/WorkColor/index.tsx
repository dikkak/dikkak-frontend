import React, {  Fragment } from 'react';
import _ from 'lodash';
import { SketchPicker } from 'react-color';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { mainColorAtom, subColorsAtom, workspaceNumAtom, workStepAtom } from '../../../atoms';
import { Box, Circle, ClientMessage, ColorBox, ColorText, DeleteButton, InnerContainer, MessageBox, NextStepButton, SystemMessage, Title } from './styles';

const WorkColor = () => {
  const setWorkStep = useSetRecoilState(workStepAtom);
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
        newList.map(item => item.isClicked=false);
        setSubColors(newList);
        setMainColor((prev) => {
          return { ...prev, isClicked: true };
        });
      }
    }
    else {
      const newList = _.cloneDeep(subColors);
      if(newList[index].isClicked) {
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
    setWorkspaceNum(prev => prev+1);
    setWorkStep(prev => {
      return {
        ...prev,
        colorStep: 'done',
        referenceStep: 'now'
      }
    })
  }
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
          style={{ justifyContent: "center" }}
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
