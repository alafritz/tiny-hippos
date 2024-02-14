import { ContentGrid, Heading, Text } from "@components/common";
import Image from "next/image";

export function FormationSection() {
  return (
    <div className="flex flex-col gap-y-2.5">
      <div className="flex w-full">
        <Text size="md" weight="bold" scale>
          Formation
        </Text>
      </div>
      <ContentGrid>
        <div className="flex-col p-5 space-y-5 rounded-t-lg bg-foreground sm:rounded-tl-lg sm:rounded-bl-lg">
          <div className="flex flex-col space-y-4">
            <Text weight="bold" size="sm" as="p">
              4-3-3
            </Text>
            <Text size="sm">
              The extra player in midfield allows a stronger defense, and the
              midfield could be staggered for different effects. The three
              midfielders normally play closely together to protect the defense,
              and move laterally across the field as a coordinated unit.
            </Text>
            <Text>
              The formation is usually played without wide midfielders. The
              three forwards split across the field to spread the attack, and
              may be expected to mark the opposition full-backs as opposed to
              doubling back to assist their own full-backs.
            </Text>
          </div>
        </div>
        <div className="relative h-[590px]">
          <Image
            alt="soccer"
            src="/assets/soccer_pitch.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </ContentGrid>
    </div>
  );
}
