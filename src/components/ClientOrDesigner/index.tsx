import React from "react";
import { useQueryClient } from "react-query";
import { registType } from "../../apis/auth_login";
import * as S from "./styles";

const ClientOrDesigner = () => {
  const queryClient = useQueryClient();
  const onClick = (data: string) => {
    registType(data).then(() => queryClient.fetchQuery("user-info"));
  };
  return (
    <S.Container>
      <S.Client onClick={() => onClick("CLIENT")}>
        <p>클라이언트 입니다.</p>
        <span>의뢰자입니다.</span>
      </S.Client>
      <S.Designer onClick={() => onClick("DESIGNER")}>
        <p>디자이너 입니다.</p>
        <span>외주 작업자입니다.</span>
      </S.Designer>
    </S.Container>
  );
};

export default ClientOrDesigner;
