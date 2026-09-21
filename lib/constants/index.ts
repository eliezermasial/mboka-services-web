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
  {name: "salle de fetes", descr: "pour vos fetes", src: "/salle-fete.jpg", slug: "salle-de-fetes"},
  {name: "conference", descr: "pour vos conferences et reunion", src: "/salle-vide.jpg", slug: "conference"},
  {name: "reunions", descr: "des reunions de qualite", src: "/salle-reunion.jpg", slug: "reunions"},
  {name: "restaurant", descr: "des cuisines de qualite", src: "/restaurant.jpg", slug: "restaurant"},
]