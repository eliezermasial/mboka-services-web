"use client";

import Image from "next/image";
import { Dot } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { realisations } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardParagraphy } from "@/components/ui/Card";


/*
const tabFilters: string[] = [
    "Tout",
    "Habitat & Construction",
    "Photographie",
    "Événement",
    "Mode & Beauté"
] as const;*/

export function OurWork () {

    return (
        <Section className="bg-gray-900/75">
            <Container className="max-md:py-20">
                <div className="flex flex-col gap-10 overflow-hidden max-md:scale-105 md:pb-10">
                    <motion.div className="flex items-center flex-col p-2 justify-between gap-0 max-md:gap-8"
                        viewport={{ once: true}} transition={{ duration: 0.6}}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div>
                            <div className="flex flex-col justify-center max-md:items-center">
                                <span className="text-gold leading-[1.05] font-pacifico
                                    font-medium uppercase tracking-[0.25em] text-xs"
                                >
                                    {"Ce que nous avons accompli"}
                                </span>
                                <div className="flex items-center">
                                    <hr className="text-gold/65 w-24"/>
                                    <Dot size={30} className="text-or" />
                                    <hr className="text-gold/65 w-24 lg:w-43"/>
                                </div>
                            </div>
                            <div className="scale-100">
                                <h2 className="text-3xl mb-5 md:text-5xl mt-5 max-w-3xl 
                                    font-oswald text-white/90 leading-[1.05] max-md:text-center"
                                >
                                    {"Nos réalisations"}
                                </h2>
                            </div>
                        </div>
                        <div className="flex md:items-end-safe md:mt-10 scale-100">
                            <p className="md:max-w-xl text-center text-base leading-relaxed text-white/75">
                                {"De la conception à l’aménagement, nous vous accompagnons avec des services en plomberie, électricité, maçonnerie, peinture, architecture et architecture intérieure."}
                            </p>
                        </div>
                    </motion.div>

                    {/*<div className="flex items-center justify-between my-5">
                        <div className="flex gap-2 items-center flex-wrap">
                            {tabFilters.map((tab) => (
                                <button key={tab} className={cn(`px-5 py-2 rounded-full
                                        text-sm font-sans font-medium  transition-all cursor-pointer border-2
                                        border-[#F8F9FC]/15 text-gray-400  hover:border-blue-700
                                        `, isActived === tab ? "bg-blue-700 text-white/95":
                                        "bg-transparent hover:text-white/95"
                                    )}
                                    onClick={() => setIsActived(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>*/}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
                        {realisations.map((item, index) => (
                        <motion.div initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25}} transition={{ duration: 0.6}} key={`${item.cat}-${index}`}
                        >
                        <Card  className="group relative h-70 w-full md:max-w-97.5 border-2 border-gold/25
                            hover:scale-105 transition-transform scale-100 bg-primary overflow-hidden
                            rounded-xl shadow-gray-50/5 hover:shadow-lg delay-100"   
                        >
                            <Image src={item.img} alt={item.alt} fill loading="lazy"
                                className="object-cover transition-transform duration-500
                                scale-100 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 100vw"
                            />

                            <div className="absolute inset-0 bg-black/10" />

                            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t
                                from-gray-950 opacity-100 via-black/80 to-transparent"
                            />

                            <CardContent className="absolute inset-0 bottom-0 flex flex-col gap-1 justify-end p-5">
                                
                                <Badge className=" md:hidden md:group-hover:inline-flex">
                                    {item.domain}
                                </Badge>
                                <CardParagraphy className="text-xl font-sans font-medium text-white/75">
                                    {item.cat}
                                </CardParagraphy>
                                <CardParagraphy className="font-medium text-white/45">
                                    {item.desc}
                                </CardParagraphy>
                            </CardContent>
                            
                            <div className="absolute hidden top-3 right-5 w-4 h-4 rounded-full
                                transition-opacity bg-gold group-hover:inline-block"
                            />
                        </Card>
                        </motion.div>
                        ))}
                    </div>

                    <motion.div className="flex items-center justify-center mt-5 scale-100 overflow-hidden"
                        viewport={{ once: true, amount: 0.20}} transition={{ duration: 0.6}}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    >
                        <Button href="" className="bg-gold font-oswald font-bold capitalize
                            text-primary hover:bg-gold border-white/45 border-2 hover:border-gold/85
                            hover:text-primary/85 whitespace-nowrap"
                        >
                            {"Voir tous nos services"}
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
