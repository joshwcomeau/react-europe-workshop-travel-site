import React from 'react';

const SpacerGif = ({ width, height, size }) => {
  // Can supply either width + height, or size. Not both.
  const providedSize =
    typeof size === 'number' &&
    typeof width !== 'number' &&
    typeof height !== 'number';

  const providedWidthAndHeight =
    typeof size !== 'number' &&
    typeof width === 'number' &&
    typeof height === 'number';

  if (!providedSize && !providedWidthAndHeight) {
    throw new Error(
      'Invalid size provided to SpacerGif. Please provide either width + height, or size.'
    );
  }

  const usableWidth = typeof width === 'number' ? width : size;
  const usableHeight = typeof height === 'number' ? height : size;

  return <div style={{ width: usableWidth, height: usableHeight }} />;
};

export default SpacerGif;
