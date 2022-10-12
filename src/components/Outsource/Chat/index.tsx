import React from "react";
import * as S from "./styles";

const Chat = () => {
  return (
    <S.Container>
      <S.ChatBox>
        <S.Title>
          <S.Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          작업내용 확인
        </S.Title>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.NextButton>
            <S.Circle color="#EFDC34" />
            NEXT STEP
            <S.Circle color="#28BF1B" />
          </S.NextButton>
        </div>
      </S.ChatBox>
      <S.TextContainer>
        <S.InputArea>
          <S.Text />
          <S.AdditionalButtons>
            <S.EmojiButton />
            <S.FileButton />
          </S.AdditionalButtons>
        </S.InputArea>
        <S.SubmitArea>
          <S.SubmitButton>전송하기</S.SubmitButton>
        </S.SubmitArea>
      </S.TextContainer>
    </S.Container>
  );
};

export default Chat;
