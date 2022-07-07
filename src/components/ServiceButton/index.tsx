import axios from 'axios';
import React from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { authLogout } from '../../apis/auth_login';
import { KAKAO_AUTH_LOGOUT_URL } from '../../OAuth';
import {Container, WorkSpace, Logout} from './styles';
interface ServiceButtonProps {
  username: string;
  type: string;
}
const ServiceButton = ({username, type}: ServiceButtonProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const goWorkspace = () => {
    const userType = type.toLowerCase();
    navigate(`/${userType}_workspace1`);
  }
  const onLogout = () => {
    authLogout()
    .then(() => {
      delete axios.defaults.headers.common['Authorization'];
      queryClient.clear();
      // window.location.href=KAKAO_AUTH_LOGOUT_URL;
    });
  };
  return (
    <Container>
      <WorkSpace onClick={goWorkspace}>
        <p>{username}님의 작업실 바로가기</p>
        <span>아웃소싱 작업실로 입장합니다.</span>
      </WorkSpace>
      <Logout onClick={onLogout}>
        <p>로그아웃</p>
        <span>작업을 종료합니다.</span>
      </Logout>
    </Container>
  );
};

export default ServiceButton;