import styled from "styled-components";
import menuImage from "../../assets/menuImage/outsourceMenu.svg";
import backLogo from "../../assets/menuImage/backLogo.svg";
import chatLogo from "../../assets/menuImage/chatLogo.svg";
import scheduleLogo from "../../assets/menuImage/scheduleLogo.svg";
import checkLogo from "../../assets/menuImage/checkLogo.svg";
import fileLogo from "../../assets/menuImage/fileLogo.svg";
import chatSelectLogo from "../../assets/menuImage/chatSelectLogo.svg";
import scheduleSelectLogo from "../../assets/menuImage/scheduleSelectLogo.svg";
import checkSelectLogo from "../../assets/menuImage/checkSelectLogo.svg";
import fileSelectLogo from "../../assets/menuImage/fileSelectLogo.svg";
import { useState } from "react";

interface IOutsourceMenuProps {
  stepTitle?: string;
}

const OutsourceMenu = ({ stepTitle = "hello" }: IOutsourceMenuProps) => {
  const tapArr = ["chat", "schedule", "check", "file"];
  const [selectedTap, setSelectedTap] = useState(tapArr[0]);
  return (
    <Container>
      <MenuContainer>
        <InnerMenu>
          <InnerLeftMenu>
            <Button>
              <img src={backLogo} alt="backLogo" />
            </Button>
            <StepTitle>디깍 로고 제작 / OOO디자이너 / 작업내용 확인</StepTitle>
          </InnerLeftMenu>
          <InnerRightMenu>
            <RightMenuButton
              isSelected={selectedTap === "chat"}
              onClick={() => setSelectedTap(tapArr[0])}
            >
              <img
                src={selectedTap === "chat" ? chatSelectLogo : chatLogo}
                alt="chatLogo"
              />
            </RightMenuButton>
            <RightMenuButton
              isSelected={selectedTap === "schedule"}
              onClick={() => setSelectedTap(tapArr[1])}
            >
              <img
                src={
                  selectedTap === "schedule" ? scheduleSelectLogo : scheduleLogo
                }
                alt="scheduleLogo"
              />
            </RightMenuButton>
            <RightMenuButton
              isSelected={selectedTap === "check"}
              onClick={() => setSelectedTap(tapArr[2])}
            >
              <img
                src={selectedTap === "check" ? checkSelectLogo : checkLogo}
                alt="checkLogo"
              />
            </RightMenuButton>
            <RightMenuButton
              isSelected={selectedTap === "file"}
              onClick={() => setSelectedTap(tapArr[3])}
            >
              <img
                src={selectedTap === "file" ? fileSelectLogo : fileLogo}
                alt="fileLogo"
              />
            </RightMenuButton>
          </InnerRightMenu>
        </InnerMenu>
      </MenuContainer>
    </Container>
  );
};

export default OutsourceMenu;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 35px;
  backdrop-filter: blur(5px);
  color: black;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;
const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 105px;
  background-image: url(${menuImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
`;
const InnerMenu = styled.div`
  display: flex;
  margin-left: 147px;
  width: 100%;
  height: 58px;
`;
const InnerLeftMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 147px;
  width: 573px;
  height: 47px;
  margin-top: 15px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, #a9a9a9 0%, #8b8b8b 100%);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const StepTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 514px;
  height: 40px;
  margin-left: 12px;
  background-color: #d9d9d9;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #717171;
`;

const InnerRightMenu = styled.div`
  position: absolute;
  right: 153px;
  display: flex;
  justify-content: space-between;
  width: 304px;
  height: 64px;
  margin-top: 15px;
`;

const RightMenuButton = styled(Button)<{ isSelected: boolean }>`
  width: 64px;
  height: 64px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.12) 100%
  );
  background-color: ${(props) =>
    props.isSelected ? props.theme.mainColor : "#EFEFEF"};
`;
