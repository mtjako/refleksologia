import {
  PhoneIcon,
  EnvelopeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

export const Contact: NextPage = () => {
  return (
    <div className="bg-white" id={"kontakt"}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-3xl bg-lime-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center ">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Skontaktuj się z nami
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-lime-100">
              Twoje stopy potrzebują masażu po ciężkim dniu pracy ,
              zrelaksowania się. Zadzwoń, napisz a stopy będą lżejsze
              uśmiechnięte i gotowe do dalszej pracy.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <div className="flex mb-4">
              <p className="text-white text-2xl font-bold">Tomasz Kunc</p>
            </div>
            <div className="flex mb-2">
              <PhoneIcon
                width={28}
                height={28}
                className="text-lime-200 mr-2"
              />
              <a
                href="tel:609 180 519"
                className="text-white text-lg cursor-pointer"
              >
                609 180 519
              </a>
            </div>
            <div className="flex">
              <EnvelopeIcon
                width={28}
                height={28}
                className="text-lime-200 mr-2"
              />
              <a
                href="mailto:refleksologia_lubuskie@wp.pl"
                className="text-white text-lg cursor-pointer"
              >
                refleksologia_lubuskie@wp.pl
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
