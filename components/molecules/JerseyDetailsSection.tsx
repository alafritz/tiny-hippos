import { ContentGrid, SectionWrapper, Text } from "@components/common";
import { CardWrapper } from "@components/common/CardWrapper.tsx";
import Image from "next/image";

export function JerseyDetailsSection() {
  return (
    <SectionWrapper>
      <Text size="md" weight="bold" scale>
        Jersey Details
      </Text>
      <CardWrapper>
        <div className="grid lg:grid-cols-2">
          {/* todo: replace with carousel */}
          <div className="relative flex h-full min-h-[300px]">
            <Image
              src="/assets/a-jersey.png"
              layout="fill"
              objectFit="contain"
              alt="jersey"
            />
          </div>
          <div className="flex flex-col p-5 space-y-8 rounded-tr-lg rounded-br-lg bg-foreground">
            <div className="flex flex-col space-y-2">
              <Text weight="bold">Details</Text>
              <div className="flex items-center space-x-4 whitespace-nowrap">
                <Text>Outfield color</Text>
                <div className="w-full border border-dashed border-border"></div>
                <Text>White</Text>
              </div>
              <div className="flex items-center space-x-4 whitespace-nowrap">
                <Text>Goalie Color</Text>
                <div className="w-full border border-dashed border-border"></div>
                <Text>Neon Green</Text>
              </div>
              <div className="flex items-center space-x-4 whitespace-nowrap">
                <Text>Brand</Text>
                <div className="w-full border border-dashed border-border"></div>
                <Text>Nike</Text>
              </div>
              <div className="flex items-center space-x-4 whitespace-nowrap">
                <Text>Style</Text>
                <div className="w-full border border-dashed border-border"></div>
                <Text>Academy 22</Text>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Text weight="bold">Sponsors</Text>
              <div className="flex items-center space-x-4 whitespace-nowrap">
                <Text>2023-present</Text>
                <div className="w-full border border-dashed border-border"></div>
                <Text>No Sponsorship</Text>
              </div>
              <div className="flex items-center space-x-4 whitespace-nowrap">
                <Text>2015-2023</Text>
                <div className="w-full border border-dashed border-border"></div>
                <Text>Calicraft Brewing Co.</Text>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
}
