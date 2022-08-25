import React from "react";
import styled from "styled-components";
import { Circle, Line, SystemMessage, WorkTitle } from "./styles";

interface IProposalKeywordProps {
  keywords: string[] | undefined;
  keywordRef: React.RefObject<HTMLHeadingElement>;
}

const ProposalKeyword = ({ keywords, keywordRef }: IProposalKeywordProps) => {
  return (
    <>
      <WorkTitle ref={keywordRef} id="keyword">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        키워드 선택
      </WorkTitle>
      <SystemMessage width="408px">
        디자인 컨셉 키워드를 선정해주세요 ex) 한국적인,차분한, 밝은
      </SystemMessage>
      <KeywordsClientMessage style={{ padding: "0 20px" }}>
        {keywords &&
          keywords.map((tagItem, index) => {
            return (
              <TagItem key={index}>
                <TagText>{tagItem}</TagText>
              </TagItem>
            );
          })}
      </KeywordsClientMessage>
      <Line>
        <hr />
      </Line>
    </>
  );
};

export default ProposalKeyword;

const TagItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #c4c4c4;
  border-radius: 5px;
  color: #717171;
  font-size: 13px;
`;
const TagText = styled.span`
  padding-top: 2px;
  &::before {
    content: "#";
    padding-top: 2px;
    margin-right: 1px;
  }
`;
const KeywordsClientMessage = styled.p`
  position: relative;
  min-height: 15px;
  width: 679px;
  background-color: white;
  color: #717171;
  display: flex;
  justify-content: left;
  align-items: center;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  font-size: 15px;
  margin: 0 auto;
  margin-bottom: 15px;
  padding: 0px 20px;
  white-space: pre-wrap;
  word-break: break-all;
  flex-wrap: wrap;
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent #905dfb;
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
