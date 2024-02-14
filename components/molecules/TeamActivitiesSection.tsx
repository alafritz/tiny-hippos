import { LinkText, Text } from "@components/common";

export function TeamActivitiesSection() {
  return (
    <div className="flex flex-col py-10 gap-y-5">
      <Text weight="bold" size="sm" as="p">
        Team Activites
      </Text>
      <div className="flex flex-col">
        <Text weight="bold" size="xs" as="p">
          Post Match Spots
        </Text>
        <LinkText href="https://gilmanbrew.com/">Gilman Brewing</LinkText>
        <LinkText href="https://gilmanbrew.com/">
          Fieldwork Brewing Company
        </LinkText>
      </div>
      <div className="flex flex-col">
        <Text weight="bold" size="xs" as="p">
          Other Spots
        </Text>
        <LinkText href="https://gilmanbrew.com/">
          Mad Oak Barn 'n' yard
        </LinkText>
        <LinkText href="https://gilmanbrew.com/">NIDO's backyard</LinkText>
      </div>
      <div className="flex flex-col">
        <Text weight="bold" size="xs" as="p">
          Team Meal
        </Text>
        <LinkText href="https://gilmanbrew.com/">Sliver Pizza</LinkText>
      </div>
      <div className="flex flex-col">
        <Text weight="bold" size="xs" as="p">
          Big Supporters of
        </Text>
        <LinkText href="https://gilmanbrew.com/">Oakland Roots</LinkText>
      </div>
    </div>
  );
}
