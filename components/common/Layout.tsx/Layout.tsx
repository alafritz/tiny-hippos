import { ContentWrapper } from "./ContentWrapper";
import { LayoutWrapper } from "./LayoutWrapper";
// import { Header } from "@components/Header";
// const Header = dynamic(() => import("./../Header") as any, {
//   ssr: false,
// });
type LayoutProps = {
  children?: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <ContentWrapper>
          {/* <Header />s */}
          {children}
          {/* <div className={"bg-gray-300"} style={{ marginTop: "auto" }}>
            this is a Footer
          </div> */}
          {/* <Footer /> */}
        </ContentWrapper>
      </LayoutWrapper>
    </>
  );
};
