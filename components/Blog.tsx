import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Blog: NextPage = ({ data }) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12" id={"blog"}>
      <div className="max-w-7xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Blog
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Zapraszamy na naszego bloga, gdzie znajdziesz wiele ciekawych
            artykułów o tematyce związanej z naszą działalnością.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {data.map((post, index) => (
            <Link key={index} href={`/post/${post.tytul}`}>
              <a
                href="#"
                className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
              >
                <img
                  src={post.obrazek}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                <div className="relative p-4 mt-auto">
                  <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
                    {post.tytul}
                  </h2>

                  <span className="text-lime-300 font-semibold">Czytaj...</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
