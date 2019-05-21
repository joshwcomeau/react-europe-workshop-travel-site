import React from 'react';
import styled from 'styled-components';

class ShiftBy extends React.Component {
  static defaultProps = {
    x: 0,
    y: 0,
  };

  state = {
    offsetX: 0,
    offsetY: 0,
  };

  componentDidMount() {
    window.setTimeout(this.triggerMotionIfNecessary, 0);
  }

  componentDidUpdate() {
    this.triggerMotionIfNecessary();
  }

  triggerMotionIfNecessary = () => {
    const { x, y } = this.props;

    if (this.state.offsetX !== x || this.state.offsetY !== y) {
      this.setState({
        offsetX: x,
        offsetY: y,
      });
    }
  };

  render() {
    const { offsetX, offsetY } = this.state;
    const { children } = this.props;

    return (
      <Wrapper style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}>
        {children}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  transition: transform 1000ms;
`;

export default ShiftBy;
