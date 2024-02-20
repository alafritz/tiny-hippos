import { styled } from "stitches.config";

export const LayoutWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr min(960px, calc(100% - 40px)) 1fr",
  gridColumnGap: "20px",
  minHeight: "100%",
  "> *": {
    gridColumn: 2,
  },
});
