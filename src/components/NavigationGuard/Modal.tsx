import { ReactNode } from "react";
import { CloseButton, Container, InnerModal, ModalBody, ModalFoot, PopupLogo } from './styles';

type ModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  children: ReactNode;
};

const Modal = ({ visible, onCancel, onConfirm, children }: ModalProps) => {
  const confirm = () => {
    onCancel();
    onConfirm();
  };
  return (
    <>
      {visible && (
        <Container >
          <InnerModal>
            <PopupLogo/>
            <ModalBody>{children}</ModalBody>
            <ModalFoot>
              <button className='logout-btn' onClick={confirm}>
                확인
              </button>
              <button className='cancel-btn' onClick={() => onCancel()}>
                취소
              </button>
            </ModalFoot>
            <CloseButton
              onClick={() => onCancel()}
            >
              X
            </CloseButton>
          </InnerModal>
        </Container>
      )}
    </>
  );
};

export default Modal;
