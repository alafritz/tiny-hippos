import { ContentGrid, Text } from "@components/common";

export function TeamInfoSection() {
  return (
    <div>
      <div className="flex w-full">
        <Text size="md" weight="bold" scale>
          Team Information
        </Text>
      </div>
      {/* child content grid */}
      <ContentGrid>
        {/* Mobile view container */}
        <div className="flex flex-col px-3 py-5 space-y-4 rounded-lg bg-foreground sm:hidden">
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Owners
            </Text>
            <Text size="sm">Player owned and operated</Text>
          </div>
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Founded
            </Text>
            <Text>2015 - Originally called Calicraft F.C.</Text>
          </div>
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Location
            </Text>
            <Text>East Bay, California</Text>
            <Text variant="secondary" size="xs">
              Eastern region of the San Francisco, Bay Area and includes cities
              along the eastern shores of the San Francisco Bay and San Pablo
              Bay.
            </Text>
          </div>
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Leagues
            </Text>
            <Text>BAASL - 11 v 11 Co-ed</Text>
            <Text> BAASL - 8 v 8 Co-ed</Text>
          </div>
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Grounds
            </Text>
            <Text>Tom Bates Regional Sports Complex</Text>
            <Text variant="secondary"> 37.8761°N, -122.3082°W</Text>
          </div>
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Gabe Catalfo Fields
            </Text>
            <Text variant="secondary"> 37.8761°N, -122.3082°W</Text>
          </div>
        </div>

        {/* desktop view */}
        {/* first container */}
        <div className="flex-col hidden p-5 space-y-5 rounded-t-lg sm:block bg-foreground sm:rounded-tl-lg sm:rounded-bl-lg">
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Owners
            </Text>
            <Text size="sm">Player owned and operated</Text>
          </div>
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Founded
            </Text>
            <Text>2015 - Originally called Calicraft F.C.</Text>
          </div>
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Location
            </Text>
            <Text>East Bay, California</Text>
            <Text variant="secondary">
              Eastern region of the San Francisco, Bay Area and includes cities
              along the eastern shores of the San Francisco Bay and San Pablo
              Bay.
            </Text>
          </div>
        </div>
        {/* 2nd container */}
        <div className="flex-col hidden p-5 space-y-5 rounded-tr-lg rounded-br-lg sm:block bg-foreground">
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Leagues
            </Text>
            <Text>BAASL - 11 v 11 Co-ed</Text>
            <Text> BAASL - 8 v 8 Co-ed</Text>
          </div>
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Grounds
            </Text>
            <Text>Tom Bates Regional Sports Complex</Text>
            <Text variant="secondary"> 37.8761°N, -122.3082°W</Text>
          </div>
          <div className="flex flex-col">
            <Text weight="bold" size="sm" as="p">
              Gabe Catalfo Fields
            </Text>
            <Text variant="secondary"> 37.8761°N, -122.3082°W</Text>
          </div>
        </div>
      </ContentGrid>
    </div>
  );
}
