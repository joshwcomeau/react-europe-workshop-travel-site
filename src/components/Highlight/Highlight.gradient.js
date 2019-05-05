import React from 'react';
import styled, { keyframes } from 'styled-components';

import { COLORS } from '../../constants';

const Highlight = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <HighlightWrapper>
        {children}
        <HighlightElem />
      </HighlightWrapper>
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
  z-index: -1;
`;

const HighlightElem = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(-90deg, ${COLORS.aqua[500]}, ${COLORS.blue[500]});
`;

const HighlightWrapper = styled.span`
  position: absolute;
  z-index: 2;
  top: -16px;
  left: -16px;
  right: -16px;
  bottom: -16px;
  padding: 16px;
  color: white;
  animation: ${animation} 1000ms 500ms cubic-bezier(0.29, -0.04, 0.28, 1.05)
    both;
`;

export default Highlight;
