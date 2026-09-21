"use client"

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { events } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Dot, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";


export function Events() {

    const [currentIndexImage, setCurrentIndexImage] = useState<number>(0)
    const url = events[currentIndexImage].slug;
    
    const handleChangeImage = (index: number) => {
        setCurrentIndexImage(index);
    };

    return (
        <Section className="bg-white/90">
            <Container className="max-md:py-20">
                <div className="flex flex-col gap-15 overflow-x-hidden max-md:scale-105 md:py-10">
                    <div className="flex flex-col justify-between gap-8 max-md:gap-10">
                        <div className="flex flex-col items-center md:mb-15">
                            <div className="flex flex-col justify-center max-md:items-center">
                                <span className="text-onPrimary text-center leading-[1.05] font-pacifico
                                    font-medium uppercase tracking-[0.25em] text-xs"
                                >
                                    {"Événements"}
                                </span>
                                <div className="flex items-center">
                                    <hr className="text-gold/65 w-24"/>
                                    <Dot size={30} className="text-or" />
                                    <hr className="text-gold/65 w-24"/>
                                </div>
                            </div>
                            <div className="scale-100 mt-5">
                                <h2 className="text-3xl md:text-5xl max-w-2xl leading-[1.05]
                                    font-oswald text-primary text-center">
                                    {"Des espaces prêts pour recevoir, célébrer et réunir"}
                                </h2>
                            </div>
                        </div>
                        <div className="flex max-md:flex-col scale-100 gap-8 justify-between">
                            <p className="max-w-2xl leading-relaxed text-black/55 text-base">
                                {"Mariage, conférence, réception ou cérémonie libre : choisissez l'espace adapte, puis contactez-nous pour recevoir une proposition selon votre date, votre format et vos besoins."}
                            </p>
                            
                            <Button href="events" className="bg-transparent text-onPrimary border-onPrimary
                                border-3 hover:bg-onPrimary hover:text-white whitespace-nowrap md:w-52"
                            >
                                {"Nos evenements"}
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-5 max-lg:flex-col">

                        <div className="relative h-100 w-full max-w-180 overflow-hidden rounded-xl md:h-150">
                            <Image
                                src={events[currentIndexImage].src}
                                alt="Événement"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 hover:scale-105"

                            />

                            <div className="absolute inset-0 bg-black/20" />

                            <Badge className="font-oswald">
                                {events[currentIndexImage].name}
                            </Badge>

                            <Button href={`${url}`} className="absolute z-50 bottom-7 md:bottom-18 border-2 border-white right-5 md:right-10 rounded-full
                             bg-primary/25 w-15 h-15">
                                <MoveUpRight size={20} className="text-white w-full" />
                            </Button>

                            <div className="absolute inset-x-0 bottom-0 md:bottom-10 z-10 p-5">
                                <h2 className="text-4xl font-bold font-oswald capitalize text-white">
                                    {events[currentIndexImage].name}
                                </h2>
                            
                                <p className="mt-3 text-base">
                                    {events[currentIndexImage].descr}
                                </p>
                            
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
                            </div>
                        </div>

                        <div className="flex h-full w-full max-w-full lg:max-w-100 flex-col gap-6">
                            <div className="relative h-100 w-full rounded-3xl md:max-w-97.5 hidden lg:inline-block">
                                <Image
                                    src="/evenement.jpg"
                                    alt="Événement"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                            
                            <h3 className="font-oswald text-3xl font-bold leading-tight text-primary">
                                Nos propositions
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                {events.map((event, index) => (
                                    <button key={event.name}
                                        className={cn(`rounded-xl border border-primary/20 p-2 shadow-sm text-sm
                                            font-bold transition-all duration-100 capitalize hover:text-gold/85`,
                                            currentIndexImage === index ?
                                            "bg-primary/65 text-white/85 text-nowrap hover:text-none":"bg-white text-primary/85"
                                        )}
                                        onClick={()=>handleChangeImage(index)}
                                    >
                                        {event.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}