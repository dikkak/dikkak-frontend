import React, { useEffect } from "react";
import { Logo, ToastBox } from "./styles";

interface IToastProps {
  message: string;
  isActive: boolean;
  setIsActive: (a: boolean) => void;
}

const Toast = ({ message, isActive, setIsActive }: IToastProps) => {
  useEffect(() => {
    if (isActive === true)
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
  });
  return (
    <>
      {isActive ? (
        <ToastBox show={true}>
          <Logo />
          <p style={{ marginLeft: "47px" }}>{message}</p>
        </ToastBox>
      ) : (
        <ToastBox show={false} />
      )}
    </>
  );
};

export default Toast;
