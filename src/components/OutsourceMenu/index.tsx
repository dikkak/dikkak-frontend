import styled from "styled-components";
import menuImage from "../../assets/menuImage/outsourceMenu.svg";
import logoImg from "../../assets/logoImage/logoBasic.svg";

const OutsourceMenu = () => {
  return (
    <Container>
      <MenuContainer />
      <InnerMenu>
        <LogoImage />
      </InnerMenu>
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
  width: 100%;
  max-width: 1440px;
  height: 108px;
  background-image: url(${menuImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
`;
const InnerMenu = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  height: 58px;
  background-color: gray;
`;
const LogoImage = styled.img.attrs({ src: logoImg })`
  width: 30px;
  height: 30px;
  margin-right: 0.3em;

  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;
