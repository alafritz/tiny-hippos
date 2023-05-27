import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (


    <div className={styles.container}>

      <Head>
        <title>Tiny Hippos F.C.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.340/build/spline-viewer.js"></Script>

      <div className={styles.splineviewer}>
        <spline-viewer loading-anim url="https://prod.spline.design/2VBfQlbkZu9po01U/scene.splinecode"></spline-viewer>
      </div>



      <main>
        <h1 className={styles.title}>
          Tiny Hippos F.C.
        </h1>

        <p className={styles.description}>
          An East Bay Sunday Fútbol Team - Coming soon...
        </p>


      </main>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
