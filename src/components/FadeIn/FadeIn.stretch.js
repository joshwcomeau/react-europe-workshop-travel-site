import React from 'react';
import styled, { keyframes } from 'styled-components';

const FadeIn = ({ duration = 500, delay = 0, children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    let timeoutId = window.setTimeout(() => {
      setHasMounted(true);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  console.log(hasMounted);

  if (!hasMounted) {
    return null;
  }

  return <Wrapper duration={duration}>{children}</Wrapper>;
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
    both;
`;

export default FadeIn;
