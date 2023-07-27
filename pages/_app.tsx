import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ThemeProvider } from "@components/ThemeProvider";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";

const space_grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--space-grotesk",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${space_grotesk.className}`} style={{ height: "100%" }}>
      <Component {...pageProps} />
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@0.9.340/build/spline-viewer.js"
      ></Script>
    </main>
    // <ThemeProvider>
    //   <Component {...pageProps} />
    // </ThemeProvider>
  );
}

export default MyApp;
