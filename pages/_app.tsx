import "styles/globals.css";
import "styles/prism.css";

import type { AppProps } from "next/app";
import Footer from "components/footer";
import { WrapperLayout } from "layouts/wrapper";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <WrapperLayout>
        <Component {...pageProps} />
      </WrapperLayout>
      <Footer
        footerItems={[
          {
            name: "source code",
            url: "https://github.com/vidhanio/physics",
          },
          {
            name: "github",
            url: "https://github.com/vidhanio",
          },
          {
            name: "twitter",
            url: "https://twitter.com/vidhanio",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/vidhanio/",
          },
        ]}
      />
    </>
  );
}
