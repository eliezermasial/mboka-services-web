import Image from "next/image";
import { Dot } from "lucide-react";
import { domains} from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardParagraphy, CardTitle } from "@/components/ui/Card";


export function Habitats () {
    return (
        <Section className="bg-gray-900/75">
            <Container className="max-md:py-30">
                <div className="flex flex-col gap-15 overflow-x-hidden max-md:scale-105 md:py-10 md:gap-15">
                    <div className="flex max-md:flex-col p-2 justify-between gap-5 max-md:gap-8">
                        <div>
                            <div className="flex flex-col justify-center max-md:items-center">
                                <span className="text-gold leading-[1.05] font-pacifico
                                    font-medium uppercase tracking-[0.25em] text-xs"
                                >
                                    {"Habitat & construction"}
                                </span>
                                <div className="flex items-center">
                                    <hr className="text-gold/65 w-24"/>
                                    <Dot size={30} className="text-or" />
                                    <hr className="text-gold/65 w-24 lg:w-32"/>
                                </div>
                            </div>
                            <div className="scale-100">
                                <h2 className="text-3xl mb-5 md:text-5xl mt-5 max-w-3xl 
                                    font-oswald text-white leading-[1.05] max-md:text-center"
                                >
                                    {"Des solutions d’habitat pensées pour votre quotidien"}
                                </h2>
                                <p className="md:max-w-xl mt-10 text-base leading-relaxed text-white/75">
                                    {"De la conception à l’aménagement, nous vous accompagnons dans vos projets avec des services en plomberie, électricité, maçonnerie, peinture, architecture et architecture intérieure."}
                                </p>
                            </div>
                        </div>
                        <div className="flex md:items-end-safe mt-3 scale-100">
                            <Button href="machinery" className="bg-transparent font-oswald font-bold capitalize
                                text-white/75 border-onPrimary
                                border-3 hover:bg-onPrimary hover:text-white whitespace-nowrap max-md:w-full  "
                            >
                                {"Nos services"}
                            </Button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {domains.map((item) => (
                            <Card  className="group relative h-130 w-full p-0.5 md:max-w-97.5 border-2
                                overflow-hidden rounded-2xl border-b-0 border-dashed hover:shadow-lg delay-200
                                border-or/55 transition-transform shadow-gray-500/30 scale-100 hover:scale-99"
                                key={item.number}
                            >
                                <Image src={item.image} alt={item.title} fill loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/10" />

                                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t
                                    from-primary via-gray-950/45 to-transparent"
                                />

                                <Badge className="font-oswald">
                                    {"Habitat & construction"}
                                </Badge>

                                <Card className="absolute h-36 w-32 right-2 md:right-4 top-4 z-10
                                    border-2 border-white shadow-none"
                                >
                                    <Image src={item.image} alt={item.title} fill loading="lazy"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover rounded-2xl"
                                    />
                                </Card>
                                <CardContent className="absolute inset-x-0 bottom-0 z-10 p-5">
                                    <CardTitle className="text-2xl font-bold font-oswald text-white">
                                        {item.title}
                                    </CardTitle>

                                    <CardParagraphy className="mt-3 text-sm">
                                        {item.description}
                                    </CardParagraphy>

                                    <div className="group/link mt-3 inline-flex items-center gap-1
                                        font-bold font-sans text-sm uppercase tracking-wide text-gold/95"
                                    >
                                        <span>{"view more"}</span>
                                        <span className="group-hover/link:translate-x-1
                                            transition-transform duration-300"
                                        >
                                            →
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}