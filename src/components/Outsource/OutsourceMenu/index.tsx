import styled from "styled-components";
import menuImage from "../../../assets/menuImage/outsourceMenu.svg";
import backLogo from "../../../assets/menuImage/backLogo.svg";
import { useNavigate } from "react-router-dom";
import { IUserInfo } from "../../../apis/auth_login";

interface IOutsourceMenuProps {
  stepTitle: string;
  coworker: string;
  userInfo: IUserInfo;
}
const OutsourceMenu = ({
  stepTitle,
  coworker,
  userInfo,
}: IOutsourceMenuProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuContainer>
        <InnerMenu>
          <InnerLeftMenu>
            <Button onClick={() => navigate(-1)}>
              <img src={backLogo} alt="backLogo" />
            </Button>
            <StepTitle>
              {stepTitle} / {coworker}
              {userInfo.type === "CLIENT" ? "디자이너" : "클라이언트"}
            </StepTitle>
          </InnerLeftMenu>
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
  height: 88px;
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
  @media screen and (max-width: 1400px) {
    margin: 0;
  }
`;
const InnerLeftMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 147px;
  width: 70%;
  max-width: 573px;
  height: 47px;
  margin-top: 15px;
  @media screen and (max-width: 1400px) {
    position: static;
    margin-right: 200px;
  }
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
  justify-content: flex-start;
  align-items: center;
  width: 514px;
  height: 40px;
  margin-left: 12px;
  padding-left: 20px;
  background-color: #d9d9d9;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #717171;
`;
