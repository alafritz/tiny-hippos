import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className={"antialiased"}>
        <Head>
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
