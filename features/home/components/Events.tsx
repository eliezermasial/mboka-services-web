"use client"

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { events } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Dot } from "lucide-react";


export function Events() {

    const [currentIndexEvent, SetCurrentIndexEvent] = useState<number>(0);
    const [currentIndexService, setCurrentIndexService] = useState<number>(0)
    const [direction, setDirection] = useState<1 | -1>(1);

    const currentEvent = events[currentIndexEvent];
    const currentService = currentEvent.services;

    const handleChangeImage = (index: number) => {
        SetCurrentIndexEvent(index);
        setCurrentIndexService(0);
    };

    const handleServiceNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        setDirection(1);

        setCurrentIndexService(
            (prev) => Math.min(prev + 1, currentService.length - 1)
        );
    }

    const handleServicePrevious = (e: React.MouseEvent<HTMLButtonElement>) => { 
        e.preventDefault();

        setDirection(-1);
        setCurrentIndexService((prev) => Math.max(prev - 1, 0));
    }

    return (
        <Section className="bg-white/90">
            <Container className="max-md:py-15">
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
                            <p className="max-w-2xl max-md:text-justify leading-relaxed text-black/55 text-base">
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
                         
                        <Link href={`events/${currentEvent.slug}`}
                            className="group relative h-40 w-full max-w-180 overflow-hidden rounded-xl md:h-120"
                        >
                            <Image
                                src={currentEvent.image}
                                alt="Événement"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/10" />

                            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t
                                from-primary via-gray-950/55 to-transparent"
                            />

                            <Badge className="font-oswald">
                                {currentEvent.name}
                            </Badge>

                            <div className="absolute inset-x-0 bottom-3 md:bottom-10 z-10 max-md:px-5 md:p-5">
                                <h2 className="text-2xl hidden md:text-4xl md:inline-flex font-bold font-oswald capitalize text-white">
                                    {currentEvent.name}
                                </h2>
                                <p className=" mt-1 md:mt-3 max-w-90 text-base text-white">
                                    {currentEvent.descr}
                                </p>
                            </div>
                        </Link>
                        
                        <div className="flex h-full w-full max-w-full lg:max-w-100 flex-col gap-2">
                            
                            <div className="relative h-80 w-full rounded-3xl lg:max-w-97.5">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={currentIndexService}
                                        initial={{ x: direction * 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: direction * -100, opacity: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0.5"
                                    >
                                    <Image
                                        src={currentService[currentIndexService].src}
                                        alt="Événement"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover rounded-xl"
                                    />
                                    
                                    <div className="absolute inset-0 rounded-xl bg-black/25" />

                                    <Button className="group rounded-full p-3 absolute top-10 bg-white right-5 shadow
                                        hover:bg-white hover:scale-105"
                                    >
                                        <ArrowUpRight size={20} className="text-primary group-hover:text-gold"/>
                                    </Button>
                                    
                                    <div className="absolute inset-x-0 bottom-10 z-10 p-5">
                                        <h3 className="text-2xl font-bold font-oswald capitalize text-white">
                                            {currentService[currentIndexService].name}
                                        </h3>
                                    
                                        <p className="mt-3 text-base text-white font-sans">
                                            {currentService[currentIndexService].descr}
                                        </p>
                                    </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            
                            <div  className="flex flex-col gap-5 bg-white/75 rounded-2xl p-5 border border-primary/15 shadow">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex gap-2">
                                        <span className="text-primary/80 text-md font-bold font-oswald">
                                            0{currentIndexService + 1}/0{currentService.length}
                                        </span>
                                    </div>
                                    <div className="inline-flex gap-2">
                                        <button className={cn(`inline-flex items-center transition-all delay-100 border p-3 shadow-2xl shadow-white  rounded-full text-2xl justify-center`,
                                            currentIndexService === 0 ? "bg-white border-primary/15" : "bg-primary/85 cursor-pointer border-primary/80"
                                            )}
                                            onClick={handleServicePrevious}
                                            disabled={currentIndexService === 0 }
                                        >
                                            <ChevronLeft size={20} className={cn(currentIndexService === 0 ? "text-primary/25" : "text-white")} />
                                        </button>

                                        <button className={cn(`inline-flex items-center transition-all delay-100 bg-primary border-2 p-3 border-white/85 rounded-full text-2xl justify-center`,
                                            currentIndexService ===  currentService.length - 1 ? "bg-white border-primary/15" : "bg-primary/95 border-primary/45 cursor-pointer"
                                            )}
                                            onClick={handleServiceNext}
                                            disabled={currentIndexService === currentService.length - 1 }
                                        >
                                            <ChevronRight size={20} className={cn(currentIndexService ===  currentService.length - 1 ? "text-primary/45": "text-white")}/>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                {events.map((event, index) => (
                                    <button key={event.name}
                                        className={cn(`rounded-xl border border-primary/20 p-2 shadow-sm text-sm
                                            font-bold transition-all w-full text-nowrap duration-100 capitalize hover:text-gold/85`,
                                            currentIndexEvent === index ?
                                            "bg-primary/65 text-white/85 hover:text-none" :
                                            "bg-white text-primary/85"
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
                </div>
            </Container>
        </Section>
    )
}