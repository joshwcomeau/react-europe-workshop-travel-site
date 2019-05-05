import React from 'react';
import styled, { keyframes } from 'styled-components';

const FadeIn = ({ duration = 500, delay = 0, children }) => {
  return (
    <Wrapper duration={duration} delay={delay}>
      {children}
    </Wrapper>
  );
};

const fadeInAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

// prettier-ignore
const Wrapper = styled.div`
  animation:
    ${fadeInAnimation}
    ${props => props.duration}ms
    ${props => props.delay}ms
    both;
`;

export default FadeIn;
