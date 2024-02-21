import {
  ContentGrid,
  SectionWrapper,
  Text,
  CardWrapper,
} from "@components/common";

import Image from "next/image";
import { PropsWithChildren } from "react";

export function JerseyDetailsSection() {
  return (
    <SectionWrapper>
      <Text size="md" weight="bold" scale>
        Jersey Details
      </Text>
      <CardWrapper>
        <div className="grid lg:grid-cols-2 gap-y-5">
          {/* todo: replace with carousel */}
          <div className="relative flex h-full min-h-[300px]">
            <Image
              src="/assets/a-jersey.png"
              layout="fill"
              objectFit="contain"
              alt="jersey"
            />
          </div>
          <div className="flex flex-col grid-cols-2 gap-y-8 md:grid md:gap-8 lg:flex lg:flex-col">
            <SectionWrapper>
              <Text weight="bold">Details</Text>
              <TextBorderWrapper>
                <Text>Outfield color</Text>
                <DottedBorder />
                <Text>White</Text>
              </TextBorderWrapper>
              <TextBorderWrapper>
                <Text>Goalie color</Text>
                <DottedBorder />
                <Text>Neon Green</Text>
              </TextBorderWrapper>
              <TextBorderWrapper>
                <Text>Brand</Text>
                <DottedBorder />
                <Text>Nike</Text>
              </TextBorderWrapper>

              <TextBorderWrapper>
                <Text>Style</Text>
                <DottedBorder />
                <Text>Academy 22</Text>
              </TextBorderWrapper>
            </SectionWrapper>
            <SectionWrapper>
              <Text weight="bold">Sponsors</Text>
              <TextBorderWrapper>
                <Text>2023-present</Text>
                <DottedBorder />
                <Text>No Sponsorship</Text>
              </TextBorderWrapper>

              <TextBorderWrapper>
                <Text>2015-2023</Text>
                <DottedBorder />
                <Text>Calicraft Brewing Co.</Text>
              </TextBorderWrapper>
            </SectionWrapper>
          </div>
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
}

function TextBorderWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center space-x-4 whitespace-nowrap">
      {children}
    </div>
  );
}

function DottedBorder() {
  return <div className="w-full border border-dashed border-border" />;
}
