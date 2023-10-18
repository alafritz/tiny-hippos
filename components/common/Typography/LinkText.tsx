import { PropsWithChildren } from "react";
import Link from "next/link";
import { Text } from "./Text";
import { TypographyTypes } from "./TypographyTypes";
import { LinkIcon } from "@components/icons";

interface LinkTextProps extends TypographyTypes {
  href: string;
  target?: string;
}

export const LinkText = (props: PropsWithChildren<LinkTextProps>) => {
  return (
    <Link href={props.href} passHref className="flex items-center space-x-2">
      <Text
        // as="a"
        // weight="semiBold"
        size="xs"
        link
        target="_blank"
        className="underline hover:opacity-30"
        {...props}
      >
        {props.children}
      </Text>
      <LinkIcon className="text-text-primary" />
    </Link>
  );
};
