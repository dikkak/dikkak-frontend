import React, { useState } from "react";
import { MenuType } from "../../../schemas/outsource";
import * as S from "./styles";

interface IWindowTab {
  window: MenuType;
  setWindow: React.Dispatch<React.SetStateAction<MenuType>>;
}

const WindowTab = ({ window, setWindow }: IWindowTab) => {
  const [isFold, setIsFold] = useState(false);
  const handleWindow = (window: MenuType) => {
    setWindow(window);
  };
  return (
    <>
      <S.BlurBackground isFold={isFold}>
        {isFold ? (
          /** 탭이 접혔을 때 */
          <>
            <S.LeftArrow onClick={() => setIsFold(false)} />
            <S.BlurPin />
            <div></div>
            <S.BlurPin />
            <S.SideTitle style={{ visibility: "hidden" }}>WINDOW</S.SideTitle>
            <S.LogoBox
              layoutId="chat"
              onClick={() => handleWindow("CHAT")}
              ischecked={+(window === "CHAT")}
            >
              <S.ChatLogo ischecked={window === "CHAT"} />
            </S.LogoBox>
            <S.LogoBox
              layoutId="todo"
              onClick={() => handleWindow("TODO")}
              ischecked={+(window === "TODO")}
            >
              <S.TodoLogo ischecked={window === "TODO"} />
            </S.LogoBox>
            <S.LogoBox
              layoutId="file"
              onClick={() => handleWindow("FILE")}
              ischecked={+(window === "FILE")}
            >
              <S.FileLogo ischecked={window === "FILE"} />
            </S.LogoBox>
          </>
        ) : (
          /** 탭이 열렸을 때 */
          <>
            <S.RightArrow onClick={() => setIsFold(true)} />
            <S.BlurPin />
            <S.BlurPin />
            <S.BlurPin />
            <S.SideTitle>WINDOW</S.SideTitle>
            <S.LogoBox
              layoutId="chat"
              onClick={() => handleWindow("CHAT")}
              ischecked={+(window === "CHAT")}
              style={{ width: "110px", justifyContent: "space-evenly" }}
            >
              <S.ChatLogo ischecked={window === "CHAT"} />
              <S.LogoText ischecked={window === "CHAT"}>CHAT</S.LogoText>
            </S.LogoBox>
            <S.LogoBox
              layoutId="todo"
              onClick={() => handleWindow("TODO")}
              ischecked={+(window === "TODO")}
              style={{ width: "110px", justifyContent: "space-evenly" }}
            >
              <S.TodoLogo ischecked={window === "TODO"} />
              <S.LogoText ischecked={window === "TODO"}>TO DO</S.LogoText>
            </S.LogoBox>
            <S.LogoBox
              layoutId="file"
              onClick={() => handleWindow("FILE")}
              ischecked={+(window === "FILE")}
              style={{ width: "110px", justifyContent: "space-evenly" }}
            >
              <S.FileLogo ischecked={window === "FILE"} />
              <S.LogoText ischecked={window === "FILE"}>FILE</S.LogoText>
            </S.LogoBox>
            <S.ExitButton>
              <S.Bar />
              <p>
                프로젝트
                <br />
                종료
              </p>
              <S.Bar />
            </S.ExitButton>
          </>
        )}
      </S.BlurBackground>
    </>
  );
};

export default WindowTab;
