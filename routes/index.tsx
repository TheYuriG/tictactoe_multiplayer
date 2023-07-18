//? Create customized Head with appropriate meta tags
import { Head } from "$fresh/runtime.ts";
//? Components
import { Features } from "../components/UI/Features.tsx";
import { Hero } from "../components/UI/Hero.tsx";
import { Layout } from "../components/base/Layout.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Multiplayer Tic Tac Toe</title>
      </Head>
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </>
  );
}
