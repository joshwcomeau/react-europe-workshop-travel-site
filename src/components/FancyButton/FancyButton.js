import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const FancyButton = ({ children, ...delegated }) => {
  return <Button {...delegated}>{children}</Button>;
};

const Button = styled.button`
  padding: 12px 64px;
  font-size: 24px;
  font-weight: bold;
  color: ${COLORS.white};
  background: linear-gradient(
    135deg,
    ${COLORS.orange[300]},
    ${COLORS.red[500]}
  );
`;

export default FancyButton;
