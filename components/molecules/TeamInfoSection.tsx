import {
  ColumnWrapper,
  ContentGrid,
  SectionWrapper,
  Text,
  TextWrapper,
  CardWrapper,
} from "@components/common";

export function TeamInfoSection() {
  return (
    <SectionWrapper>
      <Text size="md" weight="bold" scale>
        Team Information
      </Text>

      <CardWrapper>
        <ContentGrid>
          <ColumnWrapper>
            <TextWrapper>
              <Text weight="bold" size="sm" as="p">
                Owners
              </Text>
              <Text size="sm">Player owned and operated</Text>
            </TextWrapper>

            <TextWrapper>
              <Text weight="bold" size="sm" as="p">
                Founded
              </Text>
              <Text>2015 - Originally called Calicraft F.C.</Text>
            </TextWrapper>

            <TextWrapper>
              <Text weight="bold" size="sm" as="p">
                Location
              </Text>
              <Text>East Bay, California</Text>
              <Text variant="secondary" size="xs">
                Eastern region of the San Francisco, Bay Area and includes
                cities along the eastern shores of the San Francisco Bay and San
                Pablo Bay.
              </Text>
            </TextWrapper>
          </ColumnWrapper>

          <ColumnWrapper>
            <TextWrapper>
              <Text weight="bold" size="sm" as="p">
                Leagues
              </Text>
              <Text>BAASL - 11 v 11 Co-ed</Text>
              <Text> BAASL - 8 v 8 Co-ed</Text>
            </TextWrapper>

            <TextWrapper>
              <Text weight="bold" size="sm" as="p">
                Grounds
              </Text>
              <Text>Tom Bates Regional Sports Complex</Text>
              <Text variant="secondary"> 37.8761°N, -122.3082°W</Text>
              <Text>Gabe Catalfo Fields</Text>
              <Text variant="secondary"> 37.8761°N, -122.3082°W</Text>
            </TextWrapper>
          </ColumnWrapper>
        </ContentGrid>
      </CardWrapper>
    </SectionWrapper>
  );
}
