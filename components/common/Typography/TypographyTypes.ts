import type * as Stitches from "@stitches/react";
import { config, styled } from "stitches.config";

export interface TypographyTypes {
  as?: string;
  weight?: "light" | "regular" | "medium" | "bold";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  css?: Stitches.CSS<typeof config>;
  className?: string;
  variant?: "primary" | "secondary";
  link?: boolean;
  scale?: boolean;
  chlidren?: React.ReactNode;
}
