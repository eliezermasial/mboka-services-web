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

export const domains = [
  {
    number: "01",
    title: "Habitat et construction",
    description: "Plomberie, électricité, maçonnerie, peinture, architecture...",
    image: "/habitat.jpg",
    href: "/services/habitat-construction",
  },
  {
    number: "02",
    title: "Technique et maintenance",
    description: "Maintenance électronique, automobile et climatisation.",
    image: "/tech.jpg",
    href: "/services/technique-maintenance",
  },
  {
    number: "03",
    title: "Photographie",
    description: "Studio, événement, mariage et shooting professionnel.",
    image: "/shooting.jpg",
    href: "/services/photographie",
  },
  {
    number: "04",
    title: "Mode et beauté",
    description: "Coiffure, make-up et couture professionnelle.",
    image: "/beaute.jpg",
    href: "/services/mode-beaute",
  },
  {
    number: "05",
    title: "Événement",
    description: "Location, cuisine événementielle et accompagnement.",
    image: "/evenement.jpg",
    href: "/services/evenement",
  },
  {
    number: "06",
    title: "Services sociaux",
    description: "Nettoyage professionnel et billetterie de voyage.",
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
                src: "/salle-vide.jpg",
                slug: "conferences",
            },
            {
                name: "Réunions",
                descr: "Des espaces adaptés pour vos réunions professionnelles.",
                src: "/salle-reunion.jpg",
                slug: "reunions",
            },
            {
                name: "Anniversaires",
                descr: "Des espaces adaptés pour vos anniversaires.",
                src: "/salle-reunion.jpg",
                slug: "anniversaires",
            },
        ],
    },
    {
        name: "Cuisine événementielle",
        descr: "Des prestations culinaires pensées pour accompagner vos événements et réceptions.",
        image: "/restaurant.jpg",
        slug: "Event-Catering",
        services: [
            {
                name: "Mariages",
                descr: "Des prestations culinaires adaptées à vos mariages.",
                src: "/salle-reunion.jpg",
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