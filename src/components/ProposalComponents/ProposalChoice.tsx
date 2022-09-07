import React from "react";
import styled from "styled-components";
import {
  Circle,
  Grid,
  GridChildren,
  Line,
  SystemMessage,
  WorkTitle,
} from "./styles";

interface IProposalChoiceProps {
  category: string | undefined;
  choiceRef: React.RefObject<HTMLHeadingElement>;
}
const ProposalChoice = ({ category, choiceRef }: IProposalChoiceProps) => {
  return (
    <>
      <WorkTitle ref={choiceRef} id="choice">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        작업 선택
      </WorkTitle>
      <SystemMessage width="547px">
        맡기고자 하는 디자인 분야를 선택해주세요
        <p style={{ fontSize: "10px", marginTop: "3px" }}>
          &nbsp;(기타를 선택한 경우 해당 내용을 사용 목적 단계에 적어주세요)
        </p>
      </SystemMessage>
      <Grid>
        <LogoOrName isLogoActive={category === "LOGO_OR_CARD" ? true : false}>
          로고
          <br />
          or
          <br />
          명함
        </LogoOrName>
        <Package isPackageActive={category === "PACKAGE" ? true : false}>
          패키지
        </Package>
        <Detail isDetailActive={category === "DETAIL_PAGE" ? true : false}>
          상세
          <br />
          페이지
        </Detail>
        <Video isVideoActive={category === "VIDEO_EDITING" ? true : false}>
          영상
          <br />
          편집
        </Video>
        <Product isProductActive={category === "PRODUCT_3D" ? true : false}>
          제품
          <br />
          (3D)
        </Product>
        <Poster isPosterActive={category === "POSTER_LEAFLET" ? true : false}>
          포스터
          <br />
          or
          <br />
          리플렛
        </Poster>
        <Landing isLandingActive={category === "LANDING_PAGE" ? true : false}>
          렌딩
          <br />
          페이지
        </Landing>
        <Etc isEtcActive={category === "OTHER" ? true : false}>기타</Etc>
      </Grid>
      <Line>
        <hr />
      </Line>
    </>
  );
};

export default ProposalChoice;

const LogoOrName = styled(GridChildren)<{
  isLogoActive?: true | false;
}>`
  color: ${(props) => (props.isLogoActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isLogoActive === true ? props.theme.mainColor : "#fff"};
`;

const Package = styled(GridChildren)<{
  isPackageActive?: true | false;
}>`
  color: ${(props) => (props.isPackageActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isPackageActive === true ? props.theme.mainColor : "#fff"};
`;

const Detail = styled(GridChildren)<{
  isDetailActive?: true | false;
}>`
  color: ${(props) => (props.isDetailActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isDetailActive === true ? props.theme.mainColor : "#fff"};
`;

const Video = styled(GridChildren)<{
  isVideoActive?: true | false;
}>`
  color: ${(props) => (props.isVideoActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isVideoActive === true ? props.theme.mainColor : "#fff"};
`;

const Product = styled(GridChildren)<{
  isProductActive?: true | false;
}>`
  color: ${(props) => (props.isProductActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isProductActive === true ? props.theme.mainColor : "#fff"};
`;
const Poster = styled(GridChildren)<{
  isPosterActive?: true | false;
}>`
  color: ${(props) => (props.isPosterActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isPosterActive === true ? props.theme.mainColor : "#fff"};
`;
const Landing = styled(GridChildren)<{
  isLandingActive?: true | false;
}>`
  color: ${(props) => (props.isLandingActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isLandingActive === true ? props.theme.mainColor : "#fff"};
`;
const Etc = styled(GridChildren)<{
  isEtcActive?: true | false;
}>`
  color: ${(props) => (props.isEtcActive === true ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isEtcActive === true ? props.theme.mainColor : "#fff"};
`;
