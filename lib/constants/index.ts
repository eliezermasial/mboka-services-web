export const images = [
    {
        src: "/artisan3.jpg",
        alt: "Tracteur agricole",
        className: "col-span-2 row-span-2",
    },
    {
        src: "/artisan2.jpg",
        alt: "Mini tracteur agricole",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/artisan1.jpg",
        alt: "Agricol Équipement",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/photographe.jpg",
        alt: "photographe africaine",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/mariage.jpg",
        alt: "photo de mariage",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/plumber.jpg",
        alt: "plumberie",
        className: "col-span-2 row-span-1"
    },
    {
        src:"/reunion.jpg",
        alt: "reunion burreau",
        className: "col-span-2 row-span-1"
    }
] as const;

export const advantages = [
    "Habitat & construction",
    "Technique & maintenance",
    "Photographie",
    "Mode & beauté",
    "Événement",
    "Services sociaux"
] as const;
export const services = [
  {
    number: "01",
    title: "Habitat et construction",
    services: [
      {name: "Plomberie & électricité"},
      {name: "maçonnerie & peinture"},
      {name: "architecture..."}
    ],
    image: "/habitat.jpg",
    href: "/services/habitat-construction",
  },
  {
    number: "02",
    title: "Technique et maintenance",
    services: [
      {name: "Maintenance électronique"},
      {name:"automobile & climatisation."}
    ],
    image: "/tech.jpg",
    href: "/services/technique-maintenance",
  },
  {
    number: "03",
    title: "Photographie",
    services: [
      {name: "Studio & shooting professionnel."},
      {name: "événement & mariage "}
    ],
    image: "/shooting.jpg",
    href: "/services/photographie",
  },
  {
    number: "04",
    title: "Mode et beauté",
    services: [
      {name: "Coiffure, make-up"},
      {name: "couture professionnelle."}
    ],
    image: "/beaute.jpg",
    href: "/services/mode-beaute",
  },
  {
    number: "05",
    title: "Événement",
    services: [
      {name: "Location"},
      {name: "cuisine événementielle"},
      {name: "accompagnement"}
    ],
    image: "/evenement.jpg",
    href: "/services/evenement",
  },
  {
    number: "06",
    title: "Services sociaux",
    services: [
      {name: "Nettoyage professionnel",},
      {name:"billetterie de voyage."}
    ],
    image: "/artisan1.jpg",
    href: "/services/services-sociaux",
  },
] as const;

export const domains = [
  {
    number: "01",
    title: "Habitat et construction",
    services: [
      {name: "Plomberie & électricité"},
      {name: "maçonnerie & peinture"},
      {name: "architecture..."}
    ],
    image: "/habitat.jpg",
    href: "/services/habitat-construction",
  },
  {
    number: "02",
    title: "Technique et maintenance",
    services: [
      {name: "Maintenance électronique"},
      {name:"automobile & climatisation."}
    ],
    image: "/tech.jpg",
    href: "/services/technique-maintenance",
  },
  {
    number: "03",
    title: "Photographie",
    services: [
      {name: "Studio & shooting professionnel."},
      {name: "événement & mariage "}
    ],
    image: "/shooting.jpg",
    href: "/services/photographie",
  },
  {
    number: "04",
    title: "Mode et beauté",
    services: [
      {name: "Coiffure, make-up"},
      {name: "couture professionnelle."}
    ],
    image: "/beaute.jpg",
    href: "/services/mode-beaute",
  },
  {
    number: "05",
    title: "Événement",
    services: [
      {name: "Location"},
      {name: "cuisine événementielle"},
      {name: "accompagnement"}
    ],
    image: "/evenement.jpg",
    href: "/services/evenement",
  },
  {
    number: "06",
    title: "Services sociaux",
    services: [
      {name: "Nettoyage professionnel",},
      {name:"billetterie de voyage."}
    ],
    image: "/artisan1.jpg",
    href: "/services/services-sociaux",
  },
] as const;

export const events = [
  {
    name: "Location",
    descr: "Des espaces adaptés pour accueillir vos fêtes, conférences, réunions et autres événements.",
    image: "/salle-vide.jpg",
    slug: "location",
    services: [
      {
          name: "Salles de fêtes",
          descr: "Des espaces adaptés pour vos fêtes et célébrations.",
          src: "/salle-fete.jpg",
          slug: "salles-de-fetes",
      },
            {
                name: "Conférences",
                descr: "Des espaces adaptés pour vos conférences et réunions.",
                src: "/evenement.jpg",
                slug: "conferences",
            },
            {
                name: "Réunions",
                descr: "Des espaces adaptés pour vos réunions professionnelles.",
                src: "/salle-vide.jpg",
                slug: "reunions",
            },
            {
                name: "Anniversaires",
                descr: "Des espaces adaptés pour vos anniversaires.",
                src: "/anniversaire.jpg",
                slug: "anniversaires",
            },
        ],
    },
    {
        name: "Cuisine événementielle",
        descr: "Des prestations culinaires pensées pour accompagner vos événements et réceptions.",
        image: "/cuisine.jpg",
        slug: "Event-Catering",
        services: [
            {
                name: "Mariages",
                descr: "Des prestations culinaires adaptées à vos mariages.",
                src: "/cuisine-mariage.jpg",
                slug: "mariages",
            },
            {
                name: "Réceptions",
                descr: "Des prestations culinaires adaptées à vos réceptions.",
                src: "/restaurant.jpg",
                slug: "receptions",
            },
        ],
    },
] as const;

export const modeBeauty = {
    services: [
        {
        name: "Coiffure femme",
        descr: "Coiffures professionnelles",
        image: "/mode-beauty.jpg",
        },
        {
        name: "Make-up professionnel",
        descr: "Maquillage professionnel et soigné",
        image: "/make-up-prof.jpg",
        },
        {
        name: "Make-up événementiel",
        descr: "Look parfait pour vos événements",
        image: "/make-up-event.jpg",
        },
        {
        name: "Couture professionnelle",
        descr: "Création et retouches sur mesure",
        image: "/mode-beauty2.jpg",
        },
    ],

    gallery: [
        { img: "/makeup.jpg", alt: "evenement"},
        { img: "/mode-beauty2.jpg", alt: "mode et beauté" },
        { img: "/make-up-prof.jpg", alt: "make up professionnel"},
        { img: "/make-up-event.jpg", alt: "make up evenementielle"}
    ],
} as const;

export const realisations = [
  {
    cat: "Architecture intérieure",
    domain: "Habitat & Construction",
    desc: "Choisissez le moyen de contact qui vous convient le mieux.",
    img: "/make-up-event.jpg",
    alt: "Salon moderne réalisé par Mboka Services",
    size: "large",
  },
  {
    cat: "Photographie mariage",
    domain: "Photographie",
    desc: "Choisissez le moyen de contact qui vous convient le mieux.",
    img: "/makeup.jpg",
    alt: "Photographie de mariage",
    size: "tall",
  },
  {
    cat: "Décoration événement",
    domain: "Événement",
    desc: "Choisissez le moyen de contact qui vous convient le mieux.",
    img: "/make-up-prof.jpg",
    alt: "Décoration florale événement",
    size: "normal",
  },
  {
    cat: "Make-up événementiel",
    domain: "Mode & Beauté",
    desc: "Choisissez le moyen de contact qui vous convient le mieux.",
    img: "/mode-beauty2.jpg",
    alt: "Make-up professionnel",
    size: "normal",
  },
  {
    cat: "Mariage",
    domain: "Événement",
    desc: "Choisissez le moyen de contact qui vous convient le mieux.",
    img: "/new.jpg",
    alt: "Cérémonie de mariage",
    size: "tall",
  },
  {
    cat: "Architecture",
    domain: "Habitat & Construction",
    desc: "Choisissez le moyen de contact qui vous convient le mieux.",
    img: "/Architecture.jpg",
    alt: "Salon élégant rénovation",
    size: "large",
  },
];

