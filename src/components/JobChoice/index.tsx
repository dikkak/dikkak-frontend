import React from "react";
import { JobChoiceBox, SystemMessage } from "./styles";
const JobChoice = () => {
  return (
    <JobChoiceBox>
      <SystemMessage>맡기고자 하는 디자인 분야를 선택해주세요</SystemMessage>
    </JobChoiceBox>
  );
};

export default JobChoice;
