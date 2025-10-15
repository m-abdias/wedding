import { Hotel, Scissors, Car, Church } from "lucide-react";

export default function Buttons() {
  return (
    <section className="text-center pb-14">
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-14">
        {/* Local da cerimônia */}
        <button
          onClick={() =>
            document
              .getElementById("cerimonia")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex flex-col items-center focus:outline-none transition-all duration-300"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 shadow-sm group-hover:shadow-md">
            <Church className="w-6 h-6 text-white" />
          </div>
          <span className="mt-2 text-xs sm:text-sm text-gray-700 uppercase tracking-widest font-light group-hover:text-pink-700">
            Cerimônia
          </span>
        </button>

        {/* Hospedagens */}
        <button
          onClick={() =>
            document
              .getElementById("hospedagem")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex flex-col items-center focus:outline-none transition-all duration-300"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 shadow-sm group-hover:shadow-md">
            <Hotel className="w-6 h-6 text-white" />
          </div>
          <span className="mt-2 text-xs sm:text-sm text-gray-700 uppercase tracking-widest font-light group-hover:text-orange-700">
            Hospedagens
          </span>
        </button>

        {/* Salão de beleza */}
        <button
          onClick={() =>
            document
              .getElementById("salao")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex flex-col items-center focus:outline-none transition-all duration-300"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 shadow-sm group-hover:shadow-md">
            <Scissors className="w-6 h-6 text-white" />
          </div>
          <span className="mt-2 text-xs sm:text-sm text-gray-700 uppercase tracking-widest font-light group-hover:text-gray-800">
            Salão
          </span>
        </button>

        {/* Transporte */}
        <button
          onClick={() =>
            document
              .getElementById("transporte")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex flex-col items-center focus:outline-none transition-all duration-300"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 shadow-sm group-hover:shadow-md">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="mt-2 text-xs sm:text-sm text-gray-700 uppercase tracking-widest font-light group-hover:text-gray-800">
            Transporte
          </span>
        </button>
      </div>
    </section>
  );
}
