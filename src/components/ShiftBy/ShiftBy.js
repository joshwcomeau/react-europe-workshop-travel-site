import React from 'react';
import styled from 'styled-components';

const ShiftBy = ({ x = 0, y = 0, children }) => {
  const [offsetX, setOffsetX] = React.useState(0);
  const [offsetY, setOffsetY] = React.useState(0);

  React.useEffect(() => {
    setOffsetX(x);
    setOffsetY(y);
  }, [x, y]);

  return (
    <Wrapper style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: transform 1000ms;
`;

export default ShiftBy;
