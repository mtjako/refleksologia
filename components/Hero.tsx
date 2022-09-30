import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const Hero: NextPage = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="max-w-7xl px-4 md:px-8 mx-auto">
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="xl:w-6/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
            <p className="text-lime-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
              Tomasz Kunc
            </p>

            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
              Refleksologia stóp
            </h1>

            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
              Twoje stopy potrzebują masażu po ciężkim dniu pracy ,
              zrelaksowania się. Zadzwoń , napisz a stopy będą lżejsze
              uśmiechnięte i gotowe do dalszej pracy.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <a
                href="#"
                className="inline-block bg-lime-500 hover:bg-lime-600 active:bg-lime-700 focus-visible:ring ring-lime-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Kontakt
              </a>
            </div>
          </div>

          <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
            <img
              src="/imgs/heroimg.jpg"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
