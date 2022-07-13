import styled from 'styled-components';
import popupLogo from '../../assets/logoImage/popupLogo.png';

export const Container = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  z-index: 300;
`;
export const InnerModal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 510px;
  height: 115px;
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  background-color: #717171;
`;
export const PopupLogo = styled.img.attrs({src: popupLogo})`
  position: relative;
  left: -80px;
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 21.72px;
`;
export const ModalFoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 110px;
    height: 25px;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 12px;
    border: 1px solid white;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  };
  .logout-btn {
    color: white;
    background-color: ${props => props.theme.mainColor};
  }
  .cancel-btn {
    color: ${props => props.theme.mainColor};
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  padding: 1px 4px;
  border: none;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;