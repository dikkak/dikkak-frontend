import React from "react";
import styled from "styled-components";
import Timeline from "../../components/Outsource/Timeline";
import OutsourceMenu from "../../components/Outsource/OutsourceMenu";
import MainContent from "../../components/Outsource/MainContent";

const OutsourcePage = () => {
  return (
    <div>
      <OutsourceMenu />
      <Container>
        <Wrapper>
          <Content>
            <Timeline />
            <MainContent />
          </Content>
        </Wrapper>
      </Container>
    </div>
  );
};

export default OutsourcePage;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  margin-top: 145px;
  height: auto;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1178px;
  min-width: 960px;
  height: 650px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  height: 610px;
  display: flex;
  justify-content: space-between;
`;
