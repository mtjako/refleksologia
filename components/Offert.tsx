import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const Offert: NextPage = () => {
  const data = [
    {
      title: "Refleksologia stóp",
      description: "",
      icon: "",
    },
    {
      title: "Chiropraktyka stóp",
      description: "",
      icon: "",
    },
    {
      title: "Dopasujemy harmonogram zabiegów do pacjenta",
      description: "",
      icon: "",
    },
  ];
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12" id={"oferta"}>
      <div className="max-w-7xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Oferta
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Może to ten czas by doprowadzić swoje stopy do lekkości, dobrego
            samopoczucia i uśmiechu radości z życia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
          {data.map((item, index) => (
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-lime-500 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
