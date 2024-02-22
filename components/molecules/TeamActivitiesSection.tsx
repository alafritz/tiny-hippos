import { ColumnWrapper, LinkText, Text, TextWrapper } from "@components/common";

export function TeamActivitiesSection() {
  return (
    <div className="grid sm:grid-cols-3 gap-x-5 gap-y-5">
      <ColumnWrapper>
        <TextWrapper>
          <Text weight="bold" size="xs" as="p">
            Post Match Spots
          </Text>
          <LinkText href="https://gilmanbrew.com/">Gilman Brewing</LinkText>
          <LinkText href="https://fieldworkbrewing.com/berkeley/">Fieldwork Brewing</LinkText>
        </TextWrapper>
      </ColumnWrapper>

      <ColumnWrapper>
        <TextWrapper>
          <Text weight="bold" size="xs" as="p">
            Non Patch spots
          </Text>
          <LinkText href="https://www.madoakbar.com/">Mad Oak</LinkText>
          <LinkText href="https://www.backyardoakland.com/">NIDO's backyard</LinkText>
        </TextWrapper>
      </ColumnWrapper>

      <ColumnWrapper>
        <TextWrapper>
          <Text weight="bold" size="xs" as="p">
            Big Supporters of
          </Text>
          <LinkText href="https://www.oaklandrootssc.com/">Oakland Roots</LinkText>
        </TextWrapper>
      </ColumnWrapper>
    </div>
  );
}
