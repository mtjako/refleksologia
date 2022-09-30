import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navigation } from "../../components/Navigation";
import styles from "../styles/Home.module.css";
import directus from "../../lib/directus";
import Footer from "../../components/Footer";

export const Post: NextPage = ({ post }) => {
  console.log(post);

  return (
    <>
      <Navigation />
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={post.obrazek}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div class="md:pt-8">
              <p class="text-lime-500 font-bold text-center md:text-left">
                Blog
              </p>

              <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                {post.tytul}
              </h1>

              <div
                class="text-gray-500 sm:text-lg mb-6 md:mb-8"
                dangerouslySetInnerHTML={{ __html: post.tresc }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;

export const getStaticProps = async ({ params }: any) => {
  const res = await directus.items("blog").readByQuery({
    filter: { tytul: params.tytul },
    fields: ["tytul", "tresc", "obrazek"],
  });
  return {
    props: {
      post: {
        tytul: res.data[0].tytul,
        tresc: res.data[0].tresc,
        obrazek: `${process.env.DIRECTUS_URL}/assets/${res.data[0].obrazek}`,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const res = await directus.items("blog").readByQuery({
    limit: -1,
    fields: ["tytul"],
  });

  return {
    paths: res?.data?.map((post) => ({
      params: {
        tytul: post.tytul,
      },
    })),
    fallback: false,
  };
};
