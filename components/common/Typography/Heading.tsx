import { PropsWithChildren } from "react";
import { TypographyTypes } from "./TypographyTypes";
import { Text } from "./Text";

export const Heading = (props: PropsWithChildren<TypographyTypes>) => {
  return (
    <Text as={"h1"} size={"xl"} weight={"bold"} scale {...props}>
      {props.children}
    </Text>
  );
};
