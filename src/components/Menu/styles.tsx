import styled from "styled-components";
import logoImg from "../../assets/logoImage/logoBasic.svg";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  backdrop-filter: blur(5px);
  color: black;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;
export const MenuCotainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 50px;
  padding: 0 80px;
  margin: 0 auto;
`;
export const Title = styled.div`
  display: flex;
  width: 150px;
  cursor: pointer;
`;
export const LogoImage = styled.img.attrs({ src: logoImg })`
  width: 30px;
  height: 30px;
  margin-right: 0.3em;
`;
export const LogoTitle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const LogoName = styled.p`
  margin-bottom: 0.2em;
  font-size: 15px;
  font-weight: 100;
  color: #717171;
`;
export const LogoSubName = styled.p`
  font-size: 10px;
  color: #717171;
`;
