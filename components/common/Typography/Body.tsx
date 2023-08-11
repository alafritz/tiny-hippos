import { PropsWithChildren } from "react";
import { TypographyTypes } from "./TypographyTypes";
import { Text } from "./Text";

export const Body = ({
  size = "sm",
  weight = "light",
  variant = "primary",
  className,
  children,
  scale = false,
}: PropsWithChildren<TypographyTypes>) => {
  return (
    <Text
      as={"p"}
      size={size}
      weight={weight}
      className={className}
      scale={scale}
      variant={variant}
      css={{ lineHeight: "calc(1em + 0.725rem)" }}
    >
      {children}
    </Text>
  );
};
