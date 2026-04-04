import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className={"antialiased"}>
        <Head>
  <style
    id="stitches"
    dangerouslySetInnerHTML={{ __html: getCssText() }}
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap"
    rel="stylesheet"
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
