import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo />

        <nav>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Log In</NavLink>
        </nav>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  background: ${COLORS.white};
  height: 75px;
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.a`
  padding: 0px 24px;
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.black};
  text-decoration: none;
`;

export default Header;
