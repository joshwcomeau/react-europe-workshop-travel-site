import React from 'react';
import styled from 'styled-components';

import marbleSrc from '../../assets/marble.svg';
import { COLORS } from '../../constants';

import SpacerGif from '../SpacerGif';

const Logo = () => {
  return (
    <Wrapper href="/">
      <Image src={marbleSrc} />

      <SpacerGif size={16} />

      <Title>MadeUp Corp</Title>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  text-decoration: none;
  color: ${COLORS.black};
`;

const Image = styled.img`
  display: block;
  width: 36px;
  height: 36px;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: 900;
`;

export default Logo;
