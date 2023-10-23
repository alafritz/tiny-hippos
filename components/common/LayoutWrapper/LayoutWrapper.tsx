import { styled } from "stitches.config";

export const LayoutWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr min(1200px, calc(100% - 48px)) 1fr",
  gridColumnGap: "24px",
  minHeight: "100%",
  "> *": {
    gridColumn: 2,
  },
});
