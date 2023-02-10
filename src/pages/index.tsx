import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enstore</title>
        <meta
          name="description"
          content="This is the best website builder app you can find because it is made with love❤️"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-2xl">Hello world from Sandeep and Vaibhav</h1>
        <p className="text-sm">
          This is the best website builder app you can find because it is made
          with love and it is free.
        </p>
      </main>
    </>
  );
};

export default Home;
