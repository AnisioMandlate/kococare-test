import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon-32x32.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Kococare",
  keywords: "dogs, dog parenting",
  description:
    "We are a passionate, diverse group, building a wellness platform for pets.",
};

export default Meta;
