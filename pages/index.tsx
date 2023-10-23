import { SplineRotation } from "@components/SplineRotation";
import { FullBleedWrapper, Layout, Text } from "@components/common";
import { TreeIcon, WaveIcon, WavesBorder } from "@components/icons";
import {
  FormationSection,
  JerseyDetailsSection,
  TeamInfoSection,
} from "@components/molecules";
import { TeamActivitiesSection } from "@components/molecules/TeamActivitiesSection";
import Head from "next/head";
import Image from "next/image";

export function New() {
  const waveCount = 14;
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
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* core content section */}
            <div className="space-y-4 sm:col-span-2 xl:col-span-3">
              <TeamInfoSection />
              <FormationSection />
              <JerseyDetailsSection />
              <div className="w-full space-y-4 xl:hidden bg-background">
                <WavesBorder className="mb-4" />
                <TeamActivitiesSection />
                <WavesBorder className="mt-4" />
              </div>
              <div className="hidden md:flex">
                <WavesBorder />
                <WavesBorder />
                <WavesBorder />
              </div>
              {/* footer */}
              <div className="flex items-center space-x-1">
                <TreeIcon />
                <Text variant="secondary" size="xs">
                  Made with in Oakland by Fritz and Gabe W.
                </Text>
              </div>
            </div>
            {/* side bar */}
            <div className="flex-col hidden w-full h-full space-y-4 xl:flex xl:col-span-1 bg-background">
              {/* todo: make the wave icon dynamic based on available width */}
              {/* <div className="flex ">
                {Array.from({ length: 20 }).map((_, idx) => {
                  return <WaveIcon className="-ml-0.3" />;
                })}
              </div> */}
              <WavesBorder className="mb-20" />

              <TeamActivitiesSection />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default New;

const waveCount = [];
