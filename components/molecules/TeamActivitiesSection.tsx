import { ColumnWrapper, LinkText, Text } from "@components/common";
import { PropsWithChildren } from "react";

export function TeamActivitiesSection() {
  return (
    <div className="grid sm:grid-cols-3 gap-x-5">
      <ColumnWrapper>
        <TextWrapper>
          <Text weight="bold" size="xs" as="p">
            Post Match Spots
          </Text>
          <LinkText href="https://gilmanbrew.com/">Gilman Brewing</LinkText>
          <LinkText
            href="https://gilmanbrew.com/"
            className="whitespace-nowrap"
          >
            Fieldwork Brewing
          </LinkText>
        </TextWrapper>
      </ColumnWrapper>

      <ColumnWrapper>
        <TextWrapper>
          <Text weight="bold" size="xs" as="p">
            Non Patch spots
          </Text>
          <LinkText href="https://gilmanbrew.com/">
            Mad Oak Barn 'n' yard
          </LinkText>
          <LinkText href="https://gilmanbrew.com/">NIDO's backyard</LinkText>
        </TextWrapper>
      </ColumnWrapper>

      <ColumnWrapper>
        <TextWrapper>
          <Text weight="bold" size="xs" as="p">
            Big Supporters of
          </Text>
          <LinkText href="https://gilmanbrew.com/">Oakland Roots</LinkText>
        </TextWrapper>
      </ColumnWrapper>
    </div>
  );
}

function TextWrapper({ children }: PropsWithChildren) {
  return <div className="flex flex-col w-full gap-y-1">{children}</div>;
}
