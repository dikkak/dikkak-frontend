import styled from "styled-components";
import logoImg from "../../assets/logoImage/logoBasic.svg";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 660px;
  padding: 40px 0;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50px;
  top: 0px;
  font-family: "Noto Sans KR";

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: bold;
      text-align: center;
      font-size: 30px;
    }
  }
  & p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    text-align: center;
    margin-top: 10px;
    padding: 8px 0;
    color: #717171;
    font-family: "Noto Sans KR";
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  padding: 5px 10px;
  background-color: #717171;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-size: 0.8rem;
    color: white;
  }
`;

export const DocumentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 790px;
  margin-bottom: 60px;
`;

//Logo
export const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 1em;
  width: 30px;
  height: 30px;
`;

export const clientContent = {
  title: "제안서",
  firstContent: "20220418 디깍 로고제작",
  secondContent: "로고 제작2",
  thirdContent: "포스터 제작(3/8)",
  workMenttion: "제안서 작업실",
  bgColor: "#905DFB",
};

export const companyContent = {
  title: "외주 작업실",
  firstContent: "디깍 로고 제작 / 000디자이너 / 2차 작업중",
  secondContent: "디깍 로고 제작 / 000디자이너 / 1차 작업중",
  thirdContent: "포스터 제작",
  workMenttion: "외주 작업실",
  bgColor: "#329A29",
};
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
