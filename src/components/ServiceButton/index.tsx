import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, WorkSpace, Logout } from "./styles";
interface IServiceButtonProps {
  username: string;
  type: string;
  setIsLogoutClicked: React.Dispatch<React.SetStateAction<boolean>>;
  onLogout: () => void;
}
const ServiceButton = ({
  username,
  type,
  setIsLogoutClicked,
  onLogout,
}: IServiceButtonProps) => {
  const navigate = useNavigate();
  const goWorkspace = () => {
    const userType = type.toLowerCase();
    navigate(`/${userType}_workspace`);
  };
  const onButtonClick = () => {
    if (type === "CLIENT") {
      setIsLogoutClicked(true);
    } else {
      onLogout();
    }
  };
  return (
    <Container>
      <WorkSpace onClick={goWorkspace}>
        <p>{username}님의 작업실 바로가기</p>
        <span>아웃소싱 작업실로 입장합니다.</span>
      </WorkSpace>
      <Logout onClick={onButtonClick}>
        <p>로그아웃</p>
        <span>작업을 종료합니다.</span>
      </Logout>
    </Container>
  );
};

export default ServiceButton;
