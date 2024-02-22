import {
  ContentGrid,
  Heading,
  SectionWrapper,
  Text,
  CardWrapper,
} from "@components/common";

import Image from "next/image";

export function FormationSection() {
  return (
    <SectionWrapper>
      <Text size="md" weight="bold" scale>
        Formation
      </Text>
      <CardWrapper>
        <div className="flex flex-col space-y-5">
          <Text weight="bold" size="sm" as="p">
            4-3-3
          </Text>
          <ContentGrid>
            <Text size="sm">
              The extra player in midfield allows for a stronger defense, and the
              midfield could be staggered for different effects. The three
              midfielders normally play closely together to protect the defense,
              and move laterally across the field as a coordinated unit.
            </Text>
            <Text size="sm">
              This formation is usually played without wide midfielders. The
              three forwards are split across the field to spread the attack, and
              may be expected to mark the opposition full-backs as opposed to
              doubling back to assist their own full-backs.
            </Text>
          </ContentGrid>
        </div>
        <div className="relative h-[560px] mx-auto max-w-[440px] rounded-lg overflow-hidden">
          <Image
            alt="soccer"
            src="/assets/soccerpitch.png"
            layout="fill"
            priority
            objectFit="cover"
          />
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
}
