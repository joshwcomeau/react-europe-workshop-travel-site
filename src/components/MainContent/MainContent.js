import React from 'react';
import styled from 'styled-components';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../Heading';
import Highlight from '../Highlight';
import FancyButton from '../FancyButton';
import SpacerGif from '../SpacerGif';
import FadeIn from '../FadeIn';
import ShiftBy from '../ShiftBy';

const MainContent = () => {
  return (
    <>
      <Wrapper>
        <MaxWidthWrapper>
          <FadeIn duration={1000} delay={250}>
            <ShiftBy y={-10}>
              <Heading style={{ maxWidth: 900 }}>
                Are you ready to start your adventure?{' '}
                <Highlight>We can help.</Highlight>
              </Heading>
            </ShiftBy>
          </FadeIn>

          <SpacerGif size={64} />

          <FadeIn duration={1000} delay={400}>
            <ShiftBy y={-10}>
              <Paragraph>
                When adventure harkens, you don’t want to worry about your
                camera and luggage. MadeUp Corp is an on-demand gear rental
                service, so that you never have to worry about forgetting to
                pack your Leica Q2.
              </Paragraph>

              <Paragraph>Available in 29 countries around the world.</Paragraph>
            </ShiftBy>
          </FadeIn>

          <SpacerGif size={24} />

          <FadeIn duration={1000} delay={600}>
            <ShiftBy y={-10}>
              <FancyButton>Sign up</FancyButton>
            </ShiftBy>
          </FadeIn>
        </MaxWidthWrapper>

        <CameraWrapper>
          <FadeIn duration={1500} delay={500}>
            <ShiftBy x={-30}>
              <CameraImg src="https://i.imgur.com/1zdUK6E.jpg" />
            </ShiftBy>
          </FadeIn>
        </CameraWrapper>
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

const CameraWrapper = styled.div`
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

const CameraImg = styled.img`
  width: 100%;
`;

export default MainContent;
