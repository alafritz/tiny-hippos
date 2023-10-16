import { ContentGrid, Text } from "@components/common";

export function JerseyDetailsSection() {
  return (
    <div>
      <div className="flex w-full">
        <Text size="md" weight="bold" scale>
          Jersey Details
        </Text>
      </div>
      <ContentGrid>
        <div className="flex bg-gray-700"></div>
        <div className="flex flex-col p-5 space-y-8 rounded-lg bg-foreground">
          <div className="flex flex-col space-y-2">
            <Text weight="bold">Details</Text>
            <div className="flex items-center space-x-4 whitespace-nowrap">
              <Text>Outfield color</Text>
              <div className="w-full border border-dashed border-secondary"></div>
              <Text>White</Text>
            </div>
            <div className="flex items-center space-x-4 whitespace-nowrap">
              <Text>Goalie Color</Text>
              <div className="w-full border border-dashed border-secondary"></div>
              <Text>Neon Green</Text>
            </div>
            <div className="flex items-center space-x-4 whitespace-nowrap">
              <Text>Brand</Text>
              <div className="w-full border border-dashed border-secondary"></div>
              <Text>Nike</Text>
            </div>
            <div className="flex items-center space-x-4 whitespace-nowrap">
              <Text>Style</Text>
              <div className="w-full border border-dashed border-secondary"></div>
              <Text>Academy 22</Text>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Text weight="bold">Sponsors</Text>
            <div className="flex items-center space-x-4 whitespace-nowrap">
              <Text>2023-present</Text>
              <div className="w-full border border-dashed border-secondary"></div>
              <Text>No Sponsorship</Text>
            </div>
            <div className="flex items-center space-x-4 whitespace-nowrap">
              <Text>2015-2023</Text>
              <div className="w-full border border-dashed border-secondary"></div>
              <Text>Calicraft Brewing Co.</Text>
            </div>
          </div>
        </div>
      </ContentGrid>
    </div>
  );
}
