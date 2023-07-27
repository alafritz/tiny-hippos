import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className={"antialiased"}>
        <Head>
          {/* <link
              rel="preload"
              href="/fonts/Format_1452.otf"
              as="font"
              type="font/otf"
              crossOrigin="anonymous"
            /> */}
          {/* <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
              rel="stylesheet"
            /> */}
          {/* For stitches ssr: https://stitches.dev/docs/server-side-rendering */}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body className="light-theme">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
