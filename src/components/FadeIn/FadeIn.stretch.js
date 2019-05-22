import React from 'react';
import styled, { keyframes } from 'styled-components';

class FadeIn extends React.Component {
  state = {
    hasDelayElapsed: false,
  };

  componentDidMount() {
    this.timeoutId = window.setTimeout(() => {
      this.setState({ hasDelayElapsed: true });
    }, this.props.delay);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeoutId);
  }

  render() {
    const { duration, children } = this.props;

    if (!this.state.hasDelayElapsed) {
      return null;
    }

    return <Wrapper duration={duration}>{children}</Wrapper>;
  }
}

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
    both;
`;

export default FadeIn;
