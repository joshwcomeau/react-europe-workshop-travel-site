import React from 'react';
import styled from 'styled-components';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../Heading';
import FancyButton from '../FancyButton';
import SpacerGif from '../SpacerGif';

const MainContent = () => {
  return (
    <>
      <Wrapper>
        <MaxWidthWrapper>
          <Heading style={{ maxWidth: 900 }}>
            Are you ready to start your adventure? We can help.
          </Heading>

          <SpacerGif size={64} />

          <Paragraph>
            When adventure harkens, you don’t want to worry about your camera
            and luggage. MadeUp Corp is an on-demand gear rental service, so
            that you never have to worry about forgetting to pack your Leica Q2.
          </Paragraph>

          <Paragraph>Available in 29 countries around the world.</Paragraph>

          <SpacerGif size={24} />

          <FancyButton>Sign up</FancyButton>
        </MaxWidthWrapper>
        <CameraImg src="https://i.imgur.com/1zdUK6E.jpg" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  position: relative;
  padding-top: 128px;
  padding-bottom: 184px;
  min-height: calc(100vh - 75px - 96px);
  max-width: 100vw;
  /*
    Our LuggageCamera image is meant to be cropped offscreen.
    Don't add a horizontal scrollbar.
  */
  overflow: hidden;
`;

const Paragraph = styled.p`
  max-width: 530px;
  font-size: 21px;
  line-height: 1.45;
  margin-bottom: 32px;
`;

const CameraImg = styled.img`
  display: block;
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: 0;
  width: 800px;

  @media (max-width: 1480px) {
    right: -92px;
  }

  @media (max-width: 1100px) {
    width: 700px;
    right: -256px;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export default MainContent;
