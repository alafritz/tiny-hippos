import { NextPage } from "next";
import Head from "next/head";
import {
  Layout,
  ContentGrid,
  FullBleedWrapper,
  Flex,
  Text,
  LinkText,
} from "@components/common";
import { SplineRotation } from "@components/SplineRotation";
import Image from "next/image";
import { Content } from "next/font/google";
import {
  FormationSection,
  JerseyDetailsSection,
  TeamInfoSection,
} from "@components/molecules";

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
            </div>
            {/* side bar */}
            <div className="flex-col hidden w-full h-full xl:flex xl:col-span-1 bg-slate-500">
              <Text weight="bold" size="sm" as="p">
                Team Activites
              </Text>
              <Text weight="bold" size="xs" as="p">
                Post Match Spots
              </Text>
              <LinkText href="https://gilmanbrew.com/">Gilman Brewing</LinkText>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default New;
