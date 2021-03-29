import Head from "next/head";

function HeadBoy({ title }) {
  const defaultTitle = "Home";

  return (
    <Head>
      <title>{`Parfum | ${title ? title : defaultTitle}`}</title>
    </Head>
  );
}

export default HeadBoy;
