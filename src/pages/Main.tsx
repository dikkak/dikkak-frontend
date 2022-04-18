import React from 'react';
import styled from 'styled-components';

const Test = styled.p`
  color: ${props => props.theme.mainColor};
`;

const Main = () => {
  return (
    <div>
      <Test>Main Color</Test>
    </div>
  );
};

export default Main;