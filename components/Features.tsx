import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";

const features = [
  { name: "Łagodzi stres" },
  { name: "Wprowadza organizm w stan głębokiej relaksacji" },
  { name: "Wspomaga proces detoksykacji" },
  { name: "Usprawnia funkcjonowanie układu nerwowego" },
  { name: "Pomaga w walce z bólem" },
  { name: "Pozytywnie wpływa na układ hormonalny" },
  { name: "Poprawia pracę układu krążenia" },
  { name: "Usuwa złogi i toksyny, przynosząc ulgę obolałym stopom" },
  { name: "Zlikwiduje bóle" },
  { name: "Oczyści organizm" },
  { name: "Pomoże w depresji, nerwicy" },
  { name: "Zwiększy odporność Twojego organizmu" },
  { name: "Poprawi sen, przywróci energię" },
  { name: "Wyciszy i zwiększy odporność na stres" },
];

export const Features: NextPage = () => {
  return (
    <div className="bg-white" id={"zaletyrefleksologi"}>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-lime-600">
            Refleksologia stóp
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Zalety Refleksologii
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Refleksologia jest optymalnym zabiegiem profilaktyki zdrowotnej
            zarówno w przypadku dzieci, jak i dorosłych. Przewagą refleksologii
            stóp nad innymi zabiegami jest fakt, iż nie obowiązuje tu żadna
            granica wiekowa.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-7 sm:gap-x-6 sm:gap-y-4 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
