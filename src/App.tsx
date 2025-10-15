import { useState, useEffect } from "react";
import { MapPin, Hotel, Scissors, Car, Mail, Phone } from "lucide-react";

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zM6.328 17.176l2.305-3.992h1.6l-2.466 4.268a1.221 1.221 0 01-1.44.59c-.67-.2-.973-.962-.597-1.47l.598-.396zm3.517-6.1l2.297-3.975a.983.983 0 011.7 0l.364.63-2.118 3.688H9.845zm6.46 7.872c-.54 0-1.026-.323-1.23-.82l-1.803-3.16h1.6l1.69 2.96a.96.96 0 01-.257 1.32zm2.542-1.53l-.598.398a.999.999 0 01-1.375-.304l-2.466-4.268h1.6l2.305 3.992a.972.972 0 01-.466 1.182z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
  </svg>
);

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative">
        <div className="relative h-[100vh] overflow-hidden">
          <img
            src="/wedding/Imagem do WhatsApp de 2025-10-14 à(s) 20.29.08_0123b258.jpg"
            alt="Mariana e Luis Felipe"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/90 to-transparent" />

          <div className="absolute bottom-24 md:bottom-32 left-1/2 transform -translate-x-1/2 z-10">
            <img
              src="/wedding/logo black.png"
              alt="M&L Logo"
              className="w-24 h-24 md:w-32 md:h-32 animate-fade-in drop-shadow-2xl"
            />
          </div>
        </div>

        <div
          className="relative -mt-20
          px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">
              Save the Date
            </p>

            <div className="mb-4 flex justify-center">
              <img
                src="/wedding/names-calligraphy.png"
                alt="Mariana e Luis Felipe"
                className="w-full max-w-md h-auto"
              />
            </div>

            <div className="flex items-center justify-center gap-4 md:gap-6 mb-12">
              <div className="text-center border-t border-b border-gray-300 py-3 px-6 min-w-[100px]">
                <p className="font-serif text-xs uppercase tracking-widest text-gray-600">
                  Sábado
                </p>
              </div>

              <div className="text-center border-l border-r border-gray-300 px-6 md:px-8">
                <p className="font-serif text-xs uppercase tracking-widest text-gray-600 mb-1">
                  Abril
                </p>
                <p className="font-serif text-6xl md:text-7xl text-gray-800 font-light leading-none my-2">
                  25
                </p>
                <p className="font-serif text-xl md:text-2xl text-gray-700 tracking-wide">
                  2026
                </p>
              </div>

              <div className="text-center border-t border-b border-gray-300 py-3 px-6 min-w-[100px]">
                <p className="font-serif text-xs uppercase tracking-widest text-gray-600">
                  10:30
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Prepare-se para viver esse momento com a gente! <br />
              Nosso casamento será em Itajubá, e estamos muito felizes em
              compartilhar esse dia tão especial com vocês.
              <br />
              Decidimos criar esta página para que você possa confirmar seu
              interesse e se organizar com antecedência, com informações sobre
              hospedagem, salões de beleza e transporte por aplicativo.
            </p>

            <div
              className="py-20 grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center"
              style={{ marginTop: "-2rem", marginBottom: "1rem" }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("hospedagem")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex flex-col items-center gap-1 px-4 py-3 bg-white border-gray-300 rounded-2xl hover:border-green-400 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <Hotel className="w-6 h-6 text-green-500" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-600">
                  Hospedagens
                </span>
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("salao")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex flex-col items-center gap-1 px-4 py-3 bg-white border-gray-300 rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <Scissors className="w-6 h-6 text-pink-500" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600">
                  Salões
                </span>
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("transporte")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex flex-col items-center gap-1 px-4 py-3 bg-white border-gray-300 rounded-2xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <Car className="w-6 h-6 text-orange-500" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600">
                  Transporte
                </span>
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("cerimonia")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex flex-col items-center gap-1 px-4 py-3 bg-white border-gray-300 rounded-2xl hover:border-red-400 hover:bg-red-50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <MapPin className="w-6 h-6 text-red-500" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-red-600">
                  Cerimônia
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="cerimonia" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16">
            Cerimônia
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-sm p-8 shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Igreja do Colégio das Irmãs
              </h3>
              <p className="text-gray-600 mb-2">
                Capela de Nossa Senhora dos Remédios
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Rua Tomás Aldano, 36 - Porto Velho
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Itajubá - MG, 37501-022
              </p>
              <a
                href="https://maps.app.goo.gl/HzjZ2D5pyXZSP9yW6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 border border-red-400 text-red-600 px-6 py-3 rounded-full hover:bg-red-50 transition-colors text-sm font-medium"
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="hospedagem" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Hotel className="w-8 h-8 mx-auto mb-4 text-green-500" />
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Hospedagem
            </h2>
            <p className="text-gray-600">Sugestões de hotéis e flats</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Gontijo Inn Hotel",
                adress: "R Cel. Rennó nº: 247 - Centro",
                phone: "(35) 3622-4646",
                cel: "(35) 99720-4646",
                link: "https://www.booking.com/Share-nLlZrX",
                email: "reservas@gontijoinn.com.br",
              },
              {
                name: "Hotel Amantykir",
                adress: "R Dona Maria Carneiro, 241 - Boa Vista",
                phone: "(35) 3622-5252",
                cel: "(35) 98862-6749",
                link: "https://www.booking.com/Share-v5kwdx",
                email: "reservas@hotelamantykir.com.br",
              },
              {
                name: "Hotel Bramig",
                adress: "R Dona Maria Carneiro, 76 - Boa Vista",
                phone: "(35) 3623-5252",
                cel: "(35) 98862-6748",
                link: "https://www.booking.com/Share-TPOR96",
                email: "reservas@hotelbramig.com.br",
              },
              {
                name: "Hotel Coroados",
                adress: "R São Judas Tadeu, 555 - BPS",
                phone: "(35) 3622-1977",
                cel: "(35) 3622-1977",
                link: "https://coroados-itajuba.minas-gerais-hotels.com/pt/",
                email: "reservas@hotelcoroados.com.br",
              },
              {
                name: "Hotel Itajubá Flat",
                adress: "R Antonio Correa Cardoso, 165 - Varginha",
                phone: "(35) 3622-2210",
                cel: "(35) 99713-8842",
                link: "https://www.booking.com/Share-N3YcbE",
                email: "contato@itajubaflat.com.br",
              },
              {
                name: "Palace Hotel",
                adress: "R José Gomes Bustamante, 17 - Morro Chick",
                phone: "(35) 3623-4500",
                cel: "(35) 98834-6191",
                link: "https://www.booking.com/Share-kycLi6B",
                email: "rrpalacehotel@yahoo.com.br",
              },
              {
                name: "Hotel Oriente",
                adress: "R Miguel Braga, 195 - Centro",
                phone: "(35) 3623-5317",
                cel: "(35) 99865-8860",
                link: "https://www.booking.com/Share-5Afhpnd",
                email: "hotelorienteitajuba@gmail.com",
              },
              {
                name: "Hotel Centenário",
                adress: "R Cel Rennó, 117 - Centro",
                phone: "(35) 3622-2293",
                cel: "(35) 98860-0389",
                link: "https://www.booking.com/Share-ipiB3Qs",
                email: "hotelcentenariojf@hotmail.com",
              },
            ].map((hotel, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-sm p-6 hover:border-green-300 transition-colors"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {hotel.name}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {hotel.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {hotel.adress}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {hotel.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <WhatsAppIcon />
                    {hotel.cel}
                  </p>
                </div>
                <a
                  href={hotel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:border-green-400 hover:text-green-500 transition-colors text-sm"
                >
                  Ver Disponibilidade
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div id="salao">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Scissors className="w-8 h-8 mx-auto mb-4 text-pink-500" />
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                    Salões de Beleza
                  </h2>
                  <p className="text-gray-600">Para você chegar impecável</p>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  {
                    name: "Nadiane Carvalho Beauty",
                    phone: "(35) 99251-2383",
                    insta: "@nadiane.carvalho",
                    address: "R Dr. Silvestre Ferraz, 76 Sala 1 - Centro",
                  },
                  {
                    name: "Thaisy Guimarães Studio",
                    phone: "(35) 99838-4158",
                    insta: "@thaisystd",
                    address: "R Eng. Pedro Fonseca Paiva, 259 - Avenida",
                  },
                  {
                    name: "Glam Beauty Lounge",
                    phone: "(35) 98898-9343",
                    insta: "@glam_beauty_lounge",
                    address: "R Dr. Vicente Sales Dias 101 - Varginha",
                  },
                  {
                    name: "Villa Venuta",
                    phone: "(35) 98851-2977",
                    insta: "@villavenuta",
                    address: "R Dr. Américo de Oliveira, 15 - Centro",
                  },
                  {
                    name: "Spazzio Salão",
                    phone: "(35) 98889-5266",
                    insta: "@spazziosalao",
                    address: "R Dr. Américo de Oliveira, 13 - Centro",
                  },
                ].map((salon, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-sm p-6 bg-white"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {salon.name}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-500">
                      <p className="flex items-center gap-2">
                        <WhatsAppIcon />
                        {salon.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <InstagramIcon />
                        {salon.insta}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {salon.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="transporte">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Car className="w-8 h-8 mx-auto mb-4 text-orange-500" />
                  <h2 className="text-3xl font-light text-gray-900 mb-4">
                    Transporte
                  </h2>
                  <p className="text-gray-600">Se beber não dirija</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    name: "ItaCar",
                    icon: "/wedding/itacar.png",
                    apple:
                      "https://apps.apple.com/br/app/itacar-passageiro/id1492454469 ",
                    googlePlay:
                      "https://play.google.com/store/apps/details?id=br.com.itacar.passenger.drivermachine&pcampaignid=web_share/",
                  },
                ].map((transport, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={transport.icon}
                        alt={transport.name}
                        className="w-12 h-12 object-contain"
                      />
                      <h3 className="text-xl font-medium text-gray-900">
                        {transport.name}
                      </h3>
                    </div>

                    <div className="flex justify-center gap-4">
                      <a
                        href={transport.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 border border-orange-400 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-50 transition-colors"
                      >
                        <AppleIcon />
                        <span>Apple Store</span>
                      </a>
                      <a
                        href={transport.googlePlay}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-orange-400 hover:text-orange-500 transition-colors"
                      >
                        <GooglePlayIcon />
                        <span>Google Play</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 text-white text-white rounded-full shadow-lg hover:bg-gradient-to-r from-pink-600 to-orange-600 text-white transition-all duration-300 z-50"
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      )}

      <footer className="border-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/wedding/logo colorido.png"
            alt="M&L Logo"
            className="w-16 h-16 mx-auto mb-4 opacity-60"
          />
          <p className="text-sm text-gray-400">25.04.2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
