import { styled } from "stitches.config";

export const Text = styled("span", {
  variants: {
    family: {
      // fontFamily: "Poppins",
      //font families
    },
    weight: {
      light: {
        fontWeight: "$light",
      },
      regular: {
        fontWeight: "$regular",
      },
      medium: {
        fontWeight: "$medium",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
    size: {
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      // xl: { fontSize: "$font40", "@bp2": { fontSize: "100px" } },
    },
    variant: {
      primary: {
        color: "$text-primary",
      },
      secondary: {
        color: "$text-secondary",
      },
    },
    //
    scale: {
      true: {},
    },
    link: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      link: true,
      css: {
        color: "$text-primary-accent",
        "&:hover": {
          color: "$text-primary",
          transition: "color 0.5s ease-in-out",
        },
      },
    },
    {
      variant: "secondary",
      link: true,
      css: {
        color: "$text-secondary-accent",
        weight: "$bold",
        "&:hover": {
          color: "$text-secondary",
          transition: "color 0.5s ease-in-out",
        },
      },
    },
    {
      size: "sm",
      scale: true,
      css: {
        fontSize: "$scaledSm",
      },
    },
    {
      size: "md",
      scale: true,
      css: {
        fontSize: "$scaledMd",
      },
    },
    {
      size: "lg",
      scale: true,
      css: {
        fontSize: "$scaledLg",
      },
    },
    {
      size: "xl",
      scale: true,
      css: {
        fontSize: "$scaledXl",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    weight: "regular",
    size: "sm",
  },
});
