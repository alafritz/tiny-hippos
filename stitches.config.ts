import { createStitches } from "@stitches/react";
import { palette } from "tokens/pallete";
import { colors } from "tokens/colors";
import { fontSizes, responsiveFonts } from "tokens/typography";
import { spaces } from "tokens/spaces";
import { lightTheme } from "themes/light";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // declare color values that are not theme dependent here
    },
    space: {
      0.5: "var(--spaces-space-2)",
      1: "var(--spaces-space-4)",
      1.5: "var(--spaces-space-6)",
      2: "var(--spaces-space-8)",
      2.5: "var(--spaces-space-10)",
      3: "var(--spaces-space-12)",
      3.5: "var(--spaces-space-14)",
      4: "var(--spaces-space-16)",
      5: "var(--spaces-space-20)",
      6: "var(--spaces-space-24)",
      7: "var(--spaces-space-28)",
      8: "var(--spaces-space-32)",
      9: "var(--spaces-space-36)",
      10: "var(--spaces-space-40)",
      11: "var(--spaces-space-44)",
      12: "var(--spaces-space-48)",
      14: "var(--spaces-space-56)",
      16: "var(--spaces-space-64)",
      20: "var(--spaces-space-80)",
      24: "var(--spaces-space-96)",
      28: "var(--spaces-space-112)",
      32: "var(--spaces-space-128)",
      36: "var(--spaces-space-144)",
      40: "var(--spaces-space-160)",
    },
    fontWeights: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700",
    },
    fontSizes: {
      //12 is base, increments by 2
      scaledXs: "var(--ds-fonts-xs)",
      scaledSm: "var(--ds-fonts-sm)",
      scaledMd: "var(--ds-fonts-md)",
      scaledLg: "var(--ds-fonts-lg)",
      scaledXl: "var(--ds-fonts-xl)",
      xs: "var(--font-size-14)",
      sm: "var(--font-size-16)",
      md: "var(--font-size-20)",
      lg: "var(--font-size-28)",
      xl: "var(--font-size-30)",
    },
    radii: {
      //base is 4px
      radius4: "4px",
      radius8: "8px",
      radius12: "12px",
      radius16: "16px",
    },
  },
  media: {
    bp1: "(min-width: 501px)",
    bp2: "(min-width: 701px)",
    bp3: "(min-width: 861px)",
    bp4: "(min-width: 1200px)",
  },
  utils: {
    p: (value: string | number) => ({
      margin: value,
    }),
    pt: (value: string | number) => ({
      marginTop: value,
    }),
    pr: (value: string | number) => ({
      marginRight: value,
    }),
    pb: (value: string | number) => ({
      marginBottom: value,
    }),
    pl: (value: string | number) => ({
      marginLeft: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    linearGradient: (value: string | number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export const globalStyles = globalCss({
  ":root": {
    ...lightTheme,
    // ...darkTheme,
    ...colors,
    ...fontSizes,
    ...palette,
    ...spaces,
    ...responsiveFonts,
  },
});
globalStyles();
