import { SplineRotation } from "@components/SplineRotation";
import { FullBleedWrapper, Layout, Text } from "@components/common";
import { TreeIcon, WavesBorder } from "@components/icons";
import {
  FormationSection,
  JerseyDetailsSection,
  TeamInfoSection,
} from "@components/molecules";
import { TeamActivitiesSection } from "@components/molecules/TeamActivitiesSection";
import Head from "next/head";
import Image from "next/image";

export function Home() {
  return (
    <>
      <Head>
        <title>Tiny Hippos FC</title>
        <meta name="description" content="Co-ed fútbol team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <FullBleedWrapper insideContentWrapper>
          <SplineRotation />
        </FullBleedWrapper>
        {/* core content section */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/logo.svg"
            alt="Tinny Hippos Logo"
            width={620}
            height={100}
            priority
          />
          <Text
            size="md"
            as="h3"
            weight="regular"
            variant="secondary"
            scale
            className="pt-2.5"
          >
            Co-ed Fútbol Team • East Bay (All Day), CA
          </Text>

          <div className="pt-10 pb-20 space-y-10 lg:pb-40 lg:pt-20">
            <TeamInfoSection />
            <FormationSection />
            <JerseyDetailsSection />
            <WavesBorder />
            <TeamActivitiesSection />
            <WavesBorder />

            {/* footer */}
            <div className="flex items-center mb-40 space-x-1">
              <TreeIcon />
              <Text variant="secondary" size="xs">
                Made with in Oakland by Fritz and Gabe W.
              </Text>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Home;
