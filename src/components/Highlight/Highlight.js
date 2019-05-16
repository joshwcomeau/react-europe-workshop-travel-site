import React from 'react';

import HighlightYellow from './Highlight.yellow';
import HighlightGradient from './Highlight.gradient';
import HighlightUnderline from './Highlight.underline';

const componentMap = {
  yellow: HighlightYellow,
  gradient: HighlightGradient,
  underline: HighlightUnderline,
};

const Highlight = ({ kind = 'yellow', ...delegated }) => {
  const Component = componentMap[kind];

  return <Component {...delegated} />;
};

export default Highlight;
