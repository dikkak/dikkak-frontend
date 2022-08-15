import { authLogout, userInfo } from "../../apis/auth_login";
import React, { useEffect } from "react";
import {
  CloseButton,
  Container,
  InnerModal,
  ModalBody,
  ModalFoot,
  PopupLogo,
} from "./styles";
import { useQuery } from "react-query";

interface ILogoutModal {
  onLogout: () => void;
  setIsLogoutClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal = ({ onLogout, setIsLogoutClicked }: ILogoutModal) => {
  const { data, isLoading } = useQuery("user-info", userInfo);

  return (
    <Container>
      <InnerModal>
        <PopupLogo />
        <ModalBody>
          <p>로그아웃시 제안서 작업실이 초기화 됩니다.</p>
          <p>작업중인 제안서 작업이 있다면 완료 후 로그아웃 해주세요!</p>
        </ModalBody>
        <ModalFoot>
          <button className="logout-btn" onClick={onLogout}>
            확인
          </button>
          <button
            className="cancel-btn"
            onClick={() => setIsLogoutClicked(false)}
          >
            취소
          </button>
        </ModalFoot>
        <CloseButton onClick={() => setIsLogoutClicked(false)}>X</CloseButton>
      </InnerModal>
    </Container>
  );
};

export default LogoutModal;
