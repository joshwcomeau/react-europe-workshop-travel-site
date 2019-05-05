import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const FancyButton = ({ children, ...delegated }) => {
  return (
    <Wrapper>
      <ButtonShadow />
      <Button {...delegated}>{children}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ButtonShadow = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Button = styled.button`
  position: relative;
  padding: 12px 64px;
  font-size: 24px;
  font-weight: bold;
  color: ${COLORS.white};
  background: linear-gradient(
    135deg,
    ${COLORS.orange[300]},
    ${COLORS.red[500]}
  );
  border: none;
  transition: transform 250ms;
  border-radius: 4px;

  ${Wrapper}:hover &:not(:focus) {
    transform: translate(-4px, -4px);
  }

  &:active {
    transform: translate(0px, 0px);
    transition: none;
    background: linear-gradient(
      135deg,
      ${COLORS.orange[500]},
      ${COLORS.red[700]}
    );
  }
`;

export default FancyButton;
