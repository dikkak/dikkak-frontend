import "moment/locale/ko";
import * as moment from "moment";
import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { Circle, Line, SystemMessage, WorkTitle } from "./styles";

interface IProposalDeadLineProps {
  deadline: string | undefined;
  deadlineRef: React.RefObject<HTMLHeadingElement>;
}
moment.locale("ko");
const ProposalDeadLine = ({
  deadline,
  deadlineRef,
}: IProposalDeadLineProps) => {
  const deadlineDate = moment.default(deadline).format("YYYY-MM-DD");
  return (
    <>
      <WorkTitle ref={deadlineRef} id="deadline">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        마감기간 선택
      </WorkTitle>
      <SystemMessage width="200px">희망 마감일을 선택해주세요</SystemMessage>
      <Calendar
        formatDay={(locale, date) => moment.default(date).format("DD")}
        value={new Date(deadlineDate)}
      />
      <DateBox>
        {` 희망 마감일: ${moment
          .default(deadline)
          .format("YYYY년 M월 DD일")} (${moment
          .default(deadline)
          .format("dddd")})`}
      </DateBox>
      <Line>
        <hr />
      </Line>
    </>
  );
};

export default ProposalDeadLine;

const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  margin-left: 20px;
  color: ${(props) => props.theme.mainColor};
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 20px;
`;
