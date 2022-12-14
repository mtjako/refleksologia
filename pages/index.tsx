import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Hero } from "../components/Hero";
import { Offert } from "../components/Offert";
import { Description } from "../components/Description";
import { Features } from "../components/Features";
import { Contact } from "../components/Contact";
import { Blog } from "../components/Blog";
import { Navigation } from "../components/Navigation";
import Footer from "../components/Footer";
import directus from "../lib/directus";

const Home: NextPage = ({ blog }) => {
  return (
    <div>
      <Head>
        <title>Refleksologia - Tomasz Kunc</title>
        <meta
          name="description"
          content="Twoje stopy potrzebują masażu po ciężkim dniu pracy , zrelaksowania się. Zadzwoń , napisz a stopy będą lżejsze uśmiechnięte i gotowe do dalszej pracy."
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Navigation />
      <Hero />
      <Offert />
      <Description />
      <Features />
      <Blog data={blog} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const resBlog = await directus.items("blog").readByQuery({
    limit: -1,
    fields: ["obrazek", "tytul", "tresc"],
    sort: ["-date_created"],
  });
  const dataBlog = [];
  resBlog.data?.forEach((post, index) => {
    dataBlog.push({
      tytul: post.tytul,
      tresc: post.tresc,
      obrazek: `${process.env.DIRECTUS_URL}/assets/${post.obrazek}`,
    });
  });

  return {
    props: {
      blog: dataBlog,
    },
  };
};
