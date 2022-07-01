import React from "react";
import { MessageBox, SystemMessage } from "./style";

const WorkDetail = () => {
  return (
    <>
      <MessageBox>
        <SystemMessage>맡기고자 하는 디자인분야를 선택해주세요</SystemMessage>
        <SystemMessage>
          인쇄과정까지 외주로 진행하실건가요?(명함 선택시)
        </SystemMessage>
      </MessageBox>
    </>
  );
};

export default WorkDetail;
