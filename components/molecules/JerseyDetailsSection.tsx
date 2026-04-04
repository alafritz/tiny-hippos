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
        Jersey details
      </Text>
      <CardWrapper>
        <div className="flex flex-col lg:flex-row gap-y-5 gap-x-[20px]">
          {/* Jersey images */}
          <div className="flex gap-[10px] min-h-[300px] lg:w-1/2">
            <div className="relative w-[200px] shrink-0 overflow-hidden rounded-[10px]">
              <Image
                src="/assets/a-jersey.png"
                layout="fill"
                objectFit="cover"
                alt="a jersey"
              />
            </div>
            <div className="relative w-[200px] shrink-0 overflow-hidden rounded-[10px]">
              <Image
                src="/assets/b-jersey.png"
                layout="fill"
                objectFit="cover"
                alt="b jersey"
              />
            </div>
            <div className="flex-1 bg-[#A59AFD] rounded-[10px]" />
          </div>
          {/* Details and sponsors */}
          <div className="flex flex-col grid-cols-2 gap-y-8 md:grid md:gap-8 lg:flex lg:flex-col lg:w-1/2">
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
  return <div className="w-full border" />;
}

// return <div className="w-full border border-dotted border-border" />;