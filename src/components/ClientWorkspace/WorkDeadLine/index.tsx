import React, { RefObject, useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "./calendar.css";
import {
  Circle,
  MessageBox,
  NextStepButton,
  SystemMessage,
  Title,
} from "./styles";
import { useRecoilState, useSetRecoilState } from "recoil";
import { deadLineAtom, workspaceNumAtom, workStepAtom } from "../../../atoms";
interface IWorkDeadLineProps {
  textRef: RefObject<HTMLTextAreaElement>;
}
const WorkDeadLine = ({ textRef }: IWorkDeadLineProps) => {
  const setWorkStep = useSetRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const [deadLine, setDeadLine] = useRecoilState(deadLineAtom);
  const [value, setValue] = useState(new Date());
  const onChange = (e: any) => {
    setValue(e);
    setDeadLine(moment(e).format("YYYY-MM-DD"));
  };
  const onClick = () => {
    setWorkspaceNum((prev) => prev + 1);
    setWorkStep((prev) => {
      return {
        ...prev,
        deadLineStep: "done",
        colorStep: "now",
      };
    });
  };
  useEffect(() => {
    textRef.current?.setAttribute(
      "placeholder",
      "마우스를 이용해 선택해주세요"
    );
    textRef.current?.setAttribute("disabled", "disabled");
  }, [textRef]);
  console.log(deadLine);
  console.log(value);
  return (
    <>
      <MessageBox>
        <Title>
          <Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          마감기간 선택
        </Title>
        <SystemMessage>희망 마감일을 선택해주세요</SystemMessage>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
        />
        {deadLine ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NextStepButton onClick={onClick}>
              <Circle color="#EFDC34" />
              NEXT STEP
              <Circle color="#28BF1B" />
            </NextStepButton>
          </div>
        ) : null}
      </MessageBox>
    </>
  );
};

export default WorkDeadLine;
