import React, { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './calendar.css';
import {
  Circle,
  MessageBox,
  NextStepButton,
  SystemMessage,
  Title,
} from "./styles";
interface IWorkDeadLineProps {
  workspaceNum: number;
  deadLine: string | undefined;
  setDeadLine: Dispatch<SetStateAction<string | undefined>>;
  textRef: RefObject<HTMLTextAreaElement>;
  deadLineStep: Dispatch<SetStateAction<string>>;
  colorStep: Dispatch<SetStateAction<string>>;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
}
const WorkDeadLine = ({deadLine, setDeadLine, textRef, deadLineStep, colorStep, setworkspaceNum, workspaceNum}: IWorkDeadLineProps) => {
  const [value, setValue] = useState(new Date());
  const onChange = (e: any) => {
    setValue(e);
    setDeadLine(moment(e).format('YYYY-MM-DD'));
  }
  const onClick = () => {
    setworkspaceNum((workspaceNum += 1));
    deadLineStep("done");
    colorStep("now");
  }
  useEffect(() => {
    textRef.current?.setAttribute(
      "placeholder",
      "마우스를 이용해 선택해주세요"
    );
    textRef.current?.setAttribute('disabled', 'disabled');
  },[textRef])
  console.log(deadLine);
  return (
    <>
      <MessageBox>
        <Title><Circle color='#905DFB' style={{display: 'inline-block', marginRight: '5px'}}/>마감기간 선택</Title>
        <SystemMessage>희망 마감일을 선택해주세요</SystemMessage>
        <Calendar onChange={onChange} value={value} formatDay={(locale, date) => moment(date).format("DD")}/>
        {
          deadLine ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <NextStepButton onClick={onClick} >
                <Circle color="#EFDC34" />
                NEXT STEP
                <Circle color="#28BF1B" />
              </NextStepButton>
            </div>) : null
        }
      </MessageBox>
    </>
  );
};

export default WorkDeadLine;