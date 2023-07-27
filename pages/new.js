import { NextPage } from "next";
import Head from "next/head";
import {
  Layout,
  ContentGrid,
  FullBleedWrapper,
  Flex,
} from "@components/common";
import { Heading, Text } from "@components/common";
import { SplineRotation } from "@components/SplineRotation";
import Image from "next/image";
export function New() {
  return (
    <>
      <Head>
        <title>Tiny Hipos FC</title>
        <meta name="description" content="Co-ed futbol team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <FullBleedWrapper insideContentWrapper>
          <SplineRotation />
        </FullBleedWrapper>
        {/* core content section */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/assets/logo.svg"
            alt="Tinny Hippos Logo"
            // className="dark:invert"
            width={620}
            height={200}
            priority
          />
          <Text
            size="md"
            as="h3"
            weight="regular"
            variant="secondary"
            scale
            css={{ "@bp1": { fontSize: "$lg" } }}
          >
            Co ed Futbol • East Bay (All Day), CA
          </Text>
          {/* Parent Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4">
            {/* core content section */}
            <div className="sm:col-span-2 xl:col-span-3 space-y-4">
              {/* team info section */}
              <div>
                <div className="flex w-full">
                  <Text size="md" weight="bold" scale>
                    Team Information
                  </Text>
                </div>
                {/* desktop child content grid */}
                <ContentGrid>
                  {/* Mobile container */}
                  <div className="bg-foreground rounded-lg py-5 px-3 flex flex-col sm:hidden space-y-4">
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
                        Eastern region of the San Francisco, Bay Area and
                        includes cities along the eastern shores of the San
                        Francisco Bay and San Pablo Bay.
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
                  <div className="hidden sm:block bg-foreground  flex-col p-5 space-y-5 rounded-t-lg sm:rounded-tl-lg sm:rounded-bl-lg">
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
                        Eastern region of the San Francisco, Bay Area and
                        includes cities along the eastern shores of the San
                        Francisco Bay and San Pablo Bay.
                      </Text>
                    </div>
                  </div>
                  {/* 2nd container */}
                  <div className="hidden sm:block bg-foreground flex-col p-5 space-y-5 rounded-tr-lg rounded-bl-lg">
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

              {/* formation secion */}
              <div>
                <div className="flex w-full">
                  <Text size="md" weight="bold" scale>
                    Formation
                  </Text>
                </div>
                <ContentGrid>
                  <div className="hidden sm:block bg-foreground  flex-col p-5 space-y-5 rounded-t-lg sm:rounded-tl-lg sm:rounded-bl-lg">
                    <div className="flex flex-col space-y-4">
                      <Text weight="bold" size="sm" as="p">
                        4-3-3
                      </Text>
                      <Text size="sm">
                        The extra player in midfield allows a stronger defense,
                        and the midfield could be staggered for different
                        effects. The three midfielders normally play closely
                        together to protect the defense, and move laterally
                        across the field as a coordinated unit.
                      </Text>
                      <Text>
                        The formation is usually played without wide
                        midfielders. The three forwards split across the field
                        to spread the attack, and may be expected to mark the
                        opposition full-backs as opposed to doubling back to
                        assist their own full-backs.
                      </Text>
                    </div>
                  </div>
                </ContentGrid>
              </div>
            </div>
            {/* side bar */}
            <div className="hidden xl:flex xl:col-span-1 w-full">
              Side bar component
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default New;
