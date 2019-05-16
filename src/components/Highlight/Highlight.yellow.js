import React from 'react';
import styled, { keyframes } from 'styled-components';

import { COLORS } from '../../constants';

const Highlight = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <HighlightElem />
    </Wrapper>
  );
};

const animation = keyframes`
  from {
    clip-path: polygon(0 12%, 0 12%, 0% 100%, 0% 100%);
  }

  to {
    clip-path: polygon(0 12%, 100% 0%, 100% 91%, 0% 100%);
  }
`;

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const HighlightElem = styled.div`
  position: absolute;
  z-index: -1;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: ${COLORS.yellow[300]};
  animation: ${animation} 1000ms 500ms cubic-bezier(0.29, -0.04, 0.28, 1.05)
    both;
`;

export default Highlight;
