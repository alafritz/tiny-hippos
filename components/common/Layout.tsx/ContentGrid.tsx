// this serves as full height so that a footer can be fixed to bottom
import { styled } from "stitches.config";

export const ContentGrid = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
  "@bp1": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  //   "@bp3": {
  //     gridTemplateColumns: "1fr 1fr 1fr",
  //   },
});
