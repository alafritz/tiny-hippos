import { styled } from "stitches.config";

export const Flex = styled("div", {
  display: "flex",
  variants: {
    gap: {
      1: { gap: "$space0" },
      2: { gap: "$space4" },
      3: { gap: "$space8" },
      4: { gap: "$space12" },
      5: { gap: "$space16" },
      6: { gap: "$space24" },
      7: { gap: "$space32" },
      8: { gap: "$space40" },
      //   9: { gap: "$space48" },
      //   10: { gap: "$space56" },
      //   11: { gap: "$space64" },
      //   12: { gap: "$space80" },
      //   13: { gap: "$space96" },
      //   14: { gap: "$space128" },
      //   15: { gap: "$space256" },
      //   16: { gap: "$space512" },
    },
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    justifyContent: {
      start: {
        justifyContent: "start",
      },
      end: {
        justifyContent: "end",
      },
      center: {
        justifyContent: "center",
      },
      ["space-around"]: {
        justifyContent: "space-around",
      },
      ["space-between"]: {
        justifyContent: "space-between",
      },
      ["space-evenly"]: {
        justifyContent: "space-evenly",
      },
    },
    alignItems: {
      start: {
        alignItems: "start",
      },
      end: {
        alignItems: "end",
      },
      center: {
        alignItems: "center",
      },
      baseline: {
        alignItems: "baseline",
      },
      stretch: {
        alignItems: "stretch",
      },
      ["flex-end"]: {
        alignItems: "flex-end",
      },
      ["flex-start"]: {
        alignItems: "flex-start",
      },
    },
    alignContent: {
      start: {
        alignContent: "start",
      },
      end: {
        alignContent: "end",
      },
      center: {
        alignContent: "center",
      },
      baseline: {
        alignContent: "baseline",
      },
      stretch: {
        alignContent: "stretch",
      },
    },
    wrap: {
      wrap: {
        flexWrap: "wrap",
      },
      nowrap: {
        flexWrap: "nowrap",
      },
    },
  },
  defaultVariants: {
    direction: "row",
  },
});
