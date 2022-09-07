import Modal from "./Modal";
import { usePrompt } from "../../hooks/usePrompt";

type NavigationGuardProps = {
  when: boolean;
};

const NavigationGuard = ({
  when
}: NavigationGuardProps) => {
  const { showPrompt, confirmNavigation, cancelNavigation } = usePrompt(when);

  const handleClickNo = () => {
    cancelNavigation();
  };

  const handleClickYes = () => {
    confirmNavigation();
  };

  return (
    <Modal
      visible={showPrompt}
      onCancel={handleClickNo}
      onConfirm={handleClickYes}
    >
      <p>제안서 작업실에서 나가시는건가요?</p>
      <p>입력사항이 저장되지 않을 수 있습니다</p>
    </Modal>
  );
};

export default NavigationGuard;
