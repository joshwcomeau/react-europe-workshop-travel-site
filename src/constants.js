export const COLORS = {
  red: {
    '300': prepColor({
      hue: 5,
      saturation: 90,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 0,
      saturation: 100,
      brightness: 85,
    }),
    '700': prepColor({
      hue: 0,
      saturation: 100,
      brightness: 65,
    }),
  },
  orange: {
    '300': prepColor({
      hue: 25,
      saturation: 90,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 27,
      saturation: 100,
      brightness: 90,
    }),
  },
  yellow: {
    '100': prepColor({
      hue: 58,
      saturation: 60,
      brightness: 100,
    }),
    '300': prepColor({
      hue: 54,
      saturation: 80,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 44,
      saturation: 100,
      brightness: 100,
    }),
  },
  green: {
    '300': prepColor({
      hue: 150,
      saturation: 80,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 160,
      saturation: 100,
      brightness: 80,
    }),
  },
  aqua: {
    '300': prepColor({
      hue: 190,
      saturation: 90,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 200,
      saturation: 85,
      brightness: 95,
    }),
    '700': prepColor({
      hue: 205,
      saturation: 75,
      brightness: 70,
    }),
  },
  blue: {
    '300': prepColor({
      hue: 241,
      saturation: 70,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 248,
      saturation: 85,
      brightness: 90,
    }),
    '700': prepColor({
      hue: 248,
      saturation: 50,
      brightness: 50,
    }),
  },
  violet: {
    '100': prepColor({
      hue: 275,
      saturation: 80,
      brightness: 100,
    }),
    '300': prepColor({
      hue: 270,
      saturation: 90,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 265,
      saturation: 90,
      brightness: 90,
    }),
  },
  pink: {
    '300': prepColor({
      hue: 300,
      saturation: 85,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 315,
      saturation: 90,
      brightness: 95,
    }),
    '700': prepColor({
      hue: 320,
      saturation: 90,
      brightness: 85,
    }),
  },
  gray: {
    '100': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 95,
    }),
    '200': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 90,
    }),

    '300': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 87,
    }),

    '400': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 78,
    }),

    '500': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 62,
    }),

    '700': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 40,
    }),

    '800': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 28,
    }),

    '900': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 15,
    }),
    '1000': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 4,
    }),
  },
  white: prepColor({
    hue: 0,
    saturation: 0,
    brightness: 100,
  }),
  black: prepColor({
    hue: 0,
    saturation: 0,
    brightness: 0,
  }),
  navy: prepColor({
    hue: 204,
    saturation: 15,
    brightness: 13,
  }),
};

// Our colors in Figma are given in HSB, which is a really intuitive way to
// understand color. Unfortunately, CSS only support HSL, which is less
// intuitive. Do the conversion here.
function convertHSBToHSL(color) {
  // The formula I found expects saturation and brightness to be 0-1, instead
  // of 0-100. Rather than actually use my brain to think about what this
  // formula is doing, I'm just gonna normalize the inputs and then revert it
  // before returning.
  const inputBrightness = color.brightness / 100;
  const inputSaturation = color.saturation / 100;

  const outputLightness = ((2 - inputSaturation) * inputBrightness) / 2;
  const outputSaturation =
    outputLightness && outputLightness < 1
      ? (inputSaturation * inputBrightness) /
        (outputLightness < 0.5 ? outputLightness * 2 : 2 - outputLightness * 2)
      : inputSaturation;

  return {
    hue: color.hue,
    saturation: Math.round(outputSaturation * 100),
    lightness: Math.round(outputLightness * 100),
  };
}

function prepColor(color) {
  const hslColor = convertHSBToHSL(color);

  return `hsl(${hslColor.hue}, ${hslColor.saturation}%, ${
    hslColor.lightness
  }%)`;
}
