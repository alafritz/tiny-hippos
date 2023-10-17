import { SplineRotation } from "@components/SplineRotation";
import { FullBleedWrapper, Layout, Text } from "@components/common";
import {
  FormationSection,
  JerseyDetailsSection,
  TeamInfoSection,
} from "@components/molecules";
import { TeamActivitiesSection } from "@components/molecules/TeamActivitiesSection";
import Head from "next/head";
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
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* core content section */}
            <div className="space-y-4 sm:col-span-2 xl:col-span-3">
              <TeamInfoSection />
              <FormationSection />
              <JerseyDetailsSection />
              <div className="w-full space-y-4 xl:hidden bg-background">
                <TeamActivitiesSection />
              </div>
            </div>
            {/* side bar */}
            <div className="flex-col hidden w-full h-full pt-20 space-y-4 xl:flex xl:col-span-1 bg-background">
              <TeamActivitiesSection />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default New;
