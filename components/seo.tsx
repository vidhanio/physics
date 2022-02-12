import Head from "next/head";
import { Post } from "types";

type Props = {
  path?: string;
};

function SEO({ path }: Props) {
  const title = path ? `vidhan - ${path}` : "vidhan";
  const url = path ? `https://vidhan.io/${path}` : "https://vidhan.io";

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <title>{title}</title>
      <meta name="description" content="vidhan's home on the internet." />
      <meta name="theme-color" content="#6466e9" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="og:title" content={title} />
      <meta name="og:description" content="vidhan's home on the internet." />
      <meta name="og:image" content="https://vidhan.io/images/og-image.png" />
      <meta name="og:url" content={url} />
      <meta name="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vidhanio" />
      <meta name="twitter:creator" content="@vidhanio" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="vidhan's home on the internet."
      />
      <meta
        name="twitter:image"
        content="https://vidhan.io/images/og-image.png"
      />
      <meta name="og:url" content={url} />
    </Head>
  );
}

export default SEO;
