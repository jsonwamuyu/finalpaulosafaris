const links = [
    {
        id:1,
        url:"/",
        name:'HOME',
    },
    {
        id:2,
        url:"/destinations",
        name:'DESTINATIONS',
    },
    {
        id:3,
        url:"/about",
        name:'ABOUT US',
    },
    
    {
        id:4,
        url:"/blog",
        name:'BLOG',
    },

    {
        id:5,
        url:"/reservation",
        name:'CONTACT US',
    },

];

const safaris = [
  {
    id: 1,
    url: "/safaris/explore-kenya",
    imgUrl: "/safaris/explore-kenya/impala.jpg",
    title: "Explore Kenya (14 days)",
    location:
      "Aberdare N. Park, Samburu G. Reserve, Sweetwaters Sanctuary, Solio Ranch, L. Nakuru, Maasai Mara, L. Naivasha N. Park, Amboseli N. Park, Tsavo East & West N. Park",
    alt: "impalas",
  },
  {
    id: 2,
    url: "/safaris/great-kenya",
    imgUrl: "/safaris/great-kenya/bufallo.jpg",
    title: "Great Kenya (8 days)",
    location:
      "Tsavo East N. Park, Amboseli N. Park, Nairobi N. Park, L. Nakuru, Maasai Mara N. Park, L. Naivasha",
    alt: "bufallos",
  },
  {
    id: 3,
    url: "/safaris/northern-kenya-special",
    imgUrl: "/safaris/nothern-kenya/wildebeasts.jpg",
    title: "Northern Kenya Special (6 days)",
    location:
      "Aberdare N. Park, Samburu G. Reserve, Mt. Kenya & Sweetwaters Sanctuary",
    alt: "wildeasts",
  },
  {
    id: 4,
    url: "/safaris/tsavo-special",
    imgUrl: "/safaris/tsavo-special/elephants.jpg",
    title: "Tsavo Special (3 days)",
    location: "Tsavo East N. Park & Taita Hills Sanctuary",
    alt: "elephants",
  },

  {
    id: 5,
    url: "/safaris/nairobi-special",
    imgUrl: "/safaris/nairobi-special/leopard.jpg",
    title: "Nairobi Special (4 days)",
    location: "Nairibi N. Park , Giraffe Center, Karen Blixen",
    alt: "leopard",
  },

  {
    id: 6,
    url: "/safaris/big-five",
    imgUrl: "/safaris/big-five/lion.jpg",
    title: "Big Five (5 days)",
    location: "L Nakuru & Maasai Mara N. Park",
    alt: "lion",
  },
];

const flightsafaris = [
  {
    id: 1,
    url: "/flight-safaris/maasai-mara-amboseli",
    imgUrl: "/flightsafaris/amboseli-mara/elephant.jpg",
    title: "Maasai Mara & Amboseli  (4 nights)",
    location: "Maasai Mara & Amboseli National Parks",
    alt: "elephants",
  },
  {
    id: 2,
    url: "/flight-safaris/maasai-mara-special",
    imgUrl: "/flightsafaris/mara-special/ostrich.jpg",
    title: "Maasai Mara Special (3 days)",
    location: "Maasai Mara National Park",
    alt: "ostrich",
  },
];

const mombasasafaris = [
  {
    id: 1,
    url: "/mombasa-tours/dolphins-tour",
    imgUrl: "/mombasa-tours/dolphin-tour/main.jpg",
    title: "Dolphins Watching Tour",
    location: "Wasini Island Kenya",
    alt: "dolphins",
  },
  {
    id: 2,
    url: "/mombasa-tours/half-day-city-tour",
    imgUrl: "/mombasa-tours/city-tour/wood.jpg",
    title: "Mombasa City Half Day Tour",
    location:
      "Mombasa Old Town, Wood Carvings Center(Akamba), Croccodile Farm(Nyali)",
    alt: "mombasa",
  },
];
const prev_destination = [
  {
    id: 1,
    image: "/previewDestinations/mara.jpg",
    place: "Masai Mara Game Reserve",
    url: "/top-destinations/maasai-mara-game-reserve",
    alt: "antelope",
  },
  {
    id: 2,
    image: "/previewDestinations/amboseli.jpg",
    place: "Amboseli National Park",
    url: "/top-destinations/amboseli-national-park",
    alt: "elephants",
  },
  {
    id: 3,
    image: "/previewDestinations/serengeti.jpg",
    place: "Serengeti National Park",
    url: "/top-destinations/serengeti-national-park",
    alt: "wildebeasts",
  },

  {
    id: 4,
    image: "/previewDestinations/teast.jpg",
    place: "Tsavo East National Park",
    url: "/top-destinations/tsavo-east-national-park",
    alt: "elephants",
  },
  {
    id: 5,
    image: "/previewDestinations/twest.jpg",
    place: "Tsavo West National Park",
    url: "/top-destinations/tsavo-west-national-park",
    alt: "lizard",
  },
  {
    id: 6,
    image: "/previewDestinations/nakuru.jpg",
    place: "Lake Nakuru National Park",
    url: "/top-destinations/nakuru-national-park",
    alt: "bufallos",
  },
  {
    id: 7,
    image: "/previewDestinations/nairobi.jpg",
    place: "Nairobi National Park",
    url: "/top-destinations/nairobi-national-park",
    alt: "lions",
  },
];

const gallery = [
  {
    id: 1,
    image: "/boat.jpg",
    alt: "boat",
  },
  {
    id: 2,
    image: "/man.jpg",
    alt: "man",
  },
  {
    id: 3,
    image: "/boat1.jpg",
    alt: "boat",
  },
  {
    id: 4,
    image: "/tour.jpg",
    alt: "car",
  },
  {
    id: 5,
    image: "/cars.jpg",
    alt: "cars",
  },
  {
    id: 6,
    image: "/boat2.jpg",
    alt: "",
  },
];

const payments = [
  {
    id: 1,
    img: "/master.png",
    alt: "master card",
  },
  {
    id: 2,
    img: "/visa.png",
    alt: "visa card",
  },
  {
    id: 3,
    img: "/mpesa.png",
    alt: "mpesa",
  },
];

const footerlinks = [
  {
    id: 1,
    url: "/",
    name: "HOME",
  },
  {
    id: 2,
    url: "/destinations",
    name: "DESTINATIONS",
  },
  {
    id: 3,
    url: "/about",
    name: "ABOUT US",
  },

  {
    id: 4,
    url: "/blog",
    name: "BLOG",
  },

  {
    id: 5,
    url: "/reservation",
    name: "CONTACT US",
  },
  {
    id: 6,
    url: "/faqs",
    name: "FAQs",
  },
  {
    id: 8,
    url: "/information",
    name: "USEFUL INFO.",
  },
  {
    id: 9,
    url: "/terms_conditions",
    name: "TERMS & CONDITIONS",
  },
];

const bannerfooterlinks = [
  {
    id: 1,
    name: "Terms & Conditions",
    url: "/terms_conditions",
  },
  {
    id: 2,
    name: "Privacy & Policy",
    url: "/privacy",
  },
];

const amboseli = [
  {
    id: 1,
    img: "/amboseli/bird.jpg",
    alt: "bird",
  },
  {
    id: 2,
    img: "/amboseli/.elephants.jpg",
    alt: "elephants",
  },
  {
    id: 3,
    img: "/amboseli/wildebeast.jpg",
    alt: "wildebeast",
  },
  {
    id: 4,
    img: "/amboseli/hill.jpg",
    alt: "lake",
  },
  {
    id: 5,
    img: "/amboseli/flamingo.jpg",
    alt: "flamingos",
  },
  {
    id: 6,
    img: "/amboseli/wildebeasts.jpg",
    alt: "wildebeasts",
  },
];

const nakuru = [
  {
    id: 1,
    img: "/nakuru/rhino.jpg",
    alt: "rhino",
  },
  {
    id: 2,
    img: "/nakuru/baboon.jpg",
    alt: "baboon",
  },
  {
    id: 3,
    img: "/nakuru/nakuru3.jpg",
    alt: "rhino",
  },
  {
    id: 4,
    img: "/nakuru/bufallo.jpg",
    alt: "bufallo",
  },
  {
    id: 5,
    img: "/nakuru/hyna.jpg",
    alt: "hyna",
  },
  {
    id: 6,
    img: "/nakuru/nakuru1.jpg",
    alt: "rhino",
  },
];

const maasai = [
  {
    id: 1,
    img: "/maasai/giraffe.jpg",
    alt: "giraffe",
  },
  {
    id: 2,
    img: "/maasai/mara.jpg",
    alt: "car",
  },
  {
    id: 3,
    img: "/maasai/birds.jpg",
    alt: "birds",
  },
  {
    id: 4,
    img: "/maasai/mara3.jpg",
    alt: "entelopes",
  },
  {
    id: 5,
    img: "/maasai/mara4.jpg",
    alt: "lion",
  },
  {
    id: 6,
    img: "/maasai/mara5.jpg",
    alt: "leopard",
  },
];

const tsavowest = [
  {
    id: 1,
    img: "/tsavowest/lion.jpg",
    alt: "lion",
  },
  {
    id: 2,
    img: "/tsavowest/tourists.jpg",
    alt: "elephants",
  },
  {
    id: 3,
    img: "/tsavowest/welcome.jpg",
    alt: "welcome",
  },
  {
    id: 4,
    img: "/tsavowest/elephants.jpg",
    alt: "elephants",
  },
  {
    id: 5,
    img: "/tsavowest/twiga.jpg",
    alt: "giraffe",
  },
  {
    id: 6,
    img: "/maasai/elephant.jpg",
    alt: "elephants",
  },
];

const tsavoeast = [
  {
    id: 1,
    img: "/tsavoeast/lion.jpg",
    alt: "lion",
  },
  {
    id: 2,
    img: "/tsavoeast/giraffe.jpg",
    alt: "giraffe",
  },
  {
    id: 3,
    img: "/tsavoeast/elephant.jpg",
    alt: "elephants",
  },
  {
    id: 4,
    img: "/tsavoeast/ndovu.jpg",
    alt: "elephant",
  },
  {
    id: 5,
    img: "/tsavoeast/ndovu2.jpg",
    alt: "elephants",
  },
  {
    id: 6,
    img: "/tsavoeast/ostrich.jpg",
    alt: "ostrich",
  },
];

const serengeti = [
  {
    id: 1,
    img: "/serengeti/cheeter.jpg",
    alt: "cheeter",
  },
  {
    id: 2,
    img: "/serengeti/leopard.jpg",
    alt: "leopard",
  },
  {
    id: 3,
    img: "/serengeti/elephant.jpg",
    alt: "cheeter",
  },
  {
    id: 4,
    img: "/serengeti/cheeter.JPG",
    alt: "cheeter",
  },
  {
    id: 5,
    img: "/serengeti/sereng1.JPG",
    alt: "plains",
  },
  {
    id: 6,
    img: "/serengeti/lion.jpg",
    alt: "lion",
  },
];

const nairobi = [
  {
    id: 1,
    img: "/nairobi/nairobi.jpg",
    alt: "lions",
  },
  {
    id: 2,
    img: "/nairobi/zebras.jpg",
    alt: "zebras",
  },
  {
    id: 3,
    img: "/nairobi/bufallo.jpg",
    alt: "bufallo",
  },
  {
    id: 4,
    img: "/nairobi/impala.jpg",
    alt: "impalas",
  },
  {
    id: 5,
    img: "/nairobi/lion1.jpg",
    alt: "lion",
  },
  {
    id: 6,
    img: "/nairobi/giraffe.jpg",
    alt: "giraffe",
  },
];

export {
  safaris,
  links,
  prev_destination,
  gallery,
  footerlinks,
  amboseli,
  nakuru,
  maasai,
  tsavowest,
  tsavoeast,
  serengeti,
  nairobi,
  payments,
  bannerfooterlinks,
  mombasasafaris,
  flightsafaris,
};