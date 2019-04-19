import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <strong>This is not a real thing.</strong> It's a demo as part of the
        React Europe 2019 "Whimsical Web Animations" workshop. By Josh Comeau
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLORS.gray[900]};
  color: ${COLORS.white};
  height: 96px;
  text-align: center;
`;

export default Footer;
