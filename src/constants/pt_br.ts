export const texts = {
  navigation: {
    ceremony: 'Cerimônia',
    accommodation: 'Hospedagens',
    beautySalons: 'Salão',
    transport: 'Transporte',
  },

  header: {
    title: 'Save the Date',
    altText: 'Mariana e Luis Felipe',
    date: {
      dayOfWeek: 'Sábado',
      month: 'Abril',
      day: '25',
      year: '2026',
      time: '10:30',
    },
    message: `Prepare-se para viver esse momento com a gente!
Estamos muito felizes em compartilhar esse dia tão especial com vocês.
Decidimos criar esta página para que vocês possam se organizar com antecedência, com informações sobre hospedagem, salões e transporte.`,
  },

  ceremony: {
    title: 'Igreja do Colégio das Irmãs',
    subtitle: 'Capela de Nossa Senhora dos Remédios',
    address: {
      street: 'Rua Tomás Aldano, 36 - Porto Velho',
      city: 'Itajubá - MG, 37501-022',
    },
    mapButton: 'Abrir no Google Maps',
    mapLink: 'https://maps.app.goo.gl/HzjZ2D5pyXZSP9yW6',
  },

  accommodation: {
    title: 'Hospedagem',
    buttonText: 'Ver Disponibilidade',
  },

  beautySalons: {
    title: 'Salão de Beleza',
  },

  counter: {
    celebrationText: '🎉 Chegou o grande dia!',
    countdownText: 'Contagem regressiva para o grande dia',
  },

  transport: {
    title: 'Transporte',
    buttons: {
      appleStore: 'Apple Store',
      googlePlay: 'Google Play',
    },
  },

  footer: {
    names: 'Mariana & Luis Felipe',
    date: '25.04.2026',
  },
} as const;

export const hotels = [
  {
    name: 'Gontijo Inn Hotel',
    adress: 'R Cel. Rennó nº: 247 - Centro',
    phone: '(35) 3622-4646',
    cel: '(35) 99720-4646',
    link: 'https://www.booking.com/Share-nLlZrX',
    email: 'reservas@gontijoinn.com.br',
  },
  {
    name: 'Hotel Amantykir',
    adress: 'R Dona Maria Carneiro, 241 - Boa Vista',
    phone: '(35) 3622-5252',
    cel: '(35) 98862-6749',
    link: 'https://www.booking.com/Share-v5kwdx',
    email: 'reservas@hotelamantykir.com.br',
  },
  {
    name: 'Hotel Bramig',
    adress: 'R Dona Maria Carneiro, 76 - Boa Vista',
    phone: '(35) 3623-5252',
    cel: '(35) 98862-6748',
    link: 'https://www.booking.com/Share-TPOR96',
    email: 'reservas@hotelbramig.com.br',
  },
  {
    name: 'Hotel Coroados',
    adress: 'R São Judas Tadeu, 555 - BPS',
    phone: '(35) 3622-1977',
    cel: '(35) 3622-1977',
    link: 'https://coroados-itajuba.minas-gerais-hotels.com/pt/',
    email: 'reservas@hotelcoroados.com.br',
  },
  {
    name: 'Hotel Itajubá Flat',
    adress: 'R Antonio Correa Cardoso, 165 - Varginha',
    phone: '(35) 3622-2210',
    cel: '(35) 99713-8842',
    link: 'https://www.booking.com/Share-N3YcbE',
    email: 'contato@itajubaflat.com.br',
  },
  {
    name: 'Palace Hotel',
    adress: 'R José Gomes Bustamante, 17 - Morro Chick',
    phone: '(35) 3623-4500',
    cel: '(35) 98834-6191',
    link: 'https://www.booking.com/Share-kycLi6B',
    email: 'rrpalacehotel@yahoo.com.br',
  },
  {
    name: 'Hotel Oriente',
    adress: 'R Miguel Braga, 195 - Centro',
    phone: '(35) 3623-5317',
    cel: '(35) 99865-8860',
    link: 'https://www.booking.com/Share-5Afhpnd',
    email: 'hotelorienteitajuba@gmail.com',
  },
  {
    name: 'Hotel Centenário',
    adress: 'R Cel Rennó, 117 - Centro',
    phone: '(35) 3622-2293',
    cel: '(35) 98860-0389',
    link: 'https://www.booking.com/Share-ipiB3Qs',
    email: 'hotelcentenariojf@hotmail.com',
  },
] as const;

export const salons = [
  {
    name: 'Nadiane Carvalho Beauty',
    phone: '(35) 99251-2383',
    insta: '@nadiane.carvalho',
    address: 'R Dr. Silvestre Ferraz, 76 Sala 1 - Centro',
  },
  {
    name: 'Thaisy Guimarães Studio',
    phone: '(35) 99838-4158',
    insta: '@thaisystudio',
    address: 'R Eng. Pedro Fonseca Paiva, 259 - Avenida',
  },
  {
    name: 'Glam Beauty Lounge',
    phone: '(35) 98898-9343',
    insta: '@glam_beauty_lounge',
    address: 'R Dr. Vicente Sales Dias 101 - Varginha',
  },
  {
    name: 'Villa Venuta',
    phone: '(35) 98851-2977',
    insta: '@villavenuta',
    address: 'R Dr. Américo de Oliveira, 15 - Centro',
  },
  {
    name: 'Spazzio Salão',
    phone: '(35) 98889-5266',
    insta: '@spazziosalao',
    address: 'R Dr. Américo de Oliveira, 13 - Centro',
  },
  {
    name: 'Carina Santana - Maquiadora',
    phone: '(35) 98842-4677',
    insta: '@carinasantana_beauty',
  },
  {
    name: 'TB Beauty',
    phone: '(35) 98434-7303',
    insta: '@tbbeautyoficial',
    address: 'R Dr. Américo de Oliveira, 670 Sala 2 - Centro',
  },
] as const;

export const transportOptions = [
  {
    name: 'ItaCar',
    icon: '/wedding/itacar.png',
    apple: 'https://apps.apple.com/br/app/itacar-passageiro/id1492454469',
    googlePlay:
      'https://play.google.com/store/apps/details?id=br.com.itacar.passenger.drivermachine&pcampaignid=web_share/',
  },
] as const;

export const images = {
  hero: '/wedding/noivado.jpg',
  logo: '/wedding/logo-black.png',
  namesCalligraphy: '/wedding/names-calligraphy.png',
} as const;
