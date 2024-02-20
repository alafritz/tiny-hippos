import { styled } from "stitches.config";

export const FullBleedWrapper = styled("main", {
  width: "100%",
  gridColumn: "1 / 4",
  variants: {
    insideContentWrapper: {
      true: {
        width: "100vw",
        marginLeft: "-50vw",
        left: "50%",
        position: "relative",
      },
    },
  },
});
