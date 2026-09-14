"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { useEffect, useState } from "react";
import { CircleChevronLeft, ShieldCheck, ThumbsUp } from "lucide-react";


const images = [
    {src: "/artisan1.jpg", alt: "image artisan one"},
    {src: "/artisan2.jpg", alt: "image artisan two"},
    {src: "/artisan3.jpg", alt: "image artisan troi"}
] as const;

const trustStats = [
  {
    value: "+ 1200",
    label: "interventions réussies",
    icon: ShieldCheck,
  },
  {
    value: "+ 99.4%",
    label: "taux de satisfaction",
    icon: ThumbsUp,
  },
  {
    value: "24h/7j",
    label: "disponibilité garantie",
    icon: CircleChevronLeft,
  },
] as const;

export function Hero() {

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        },2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Section className="relative overflow-hidden z-10 max-md:px-3 h-full mb-60">
            <Image
                key={currentImageIndex}
                src={images[currentImageIndex].src}
                alt="image champs"
                fill
                loading="eager"
                className={cn(`block absolute inset-y-0 w-full bg-cover bg-center bg-no-repeat scale-115`,
                    "scale-115", "animate-fade-in"
                )}
            />
            <div className={cn(`absolute inset-0 bg-linear-to-r from-primary/75
                via-[#01241f]/90 via-70% to-gold/40 border-none`
            )}/>

            <Container className="relative z-10 flex flex-col h-full justify-center max-md:items-center scale-105">
                <div className="flex flex-col gap-5 md:gap-5 max-md:px-0 md:px-6">
                    <div className="mt-10">
                        <div className="flex absolute left-4 md:left-14 top-3 md:-top-1 z-10 justify-start items-center gap-3
                            bg-white/20 px-3 py-1 rounded-xl shadow shadow-onPrimary/20"
                        >
                            <span className="text-xs uppercase text-or/80 font-sans font-medium">
                                excellence & conciergerie operrationnelle
                            </span>
                        </div>
                        
                        <div className="md:w-[70%] ">
                            <h1 className={cn("display-lg leading-tight text-white font-oswald font-bold mt-5")}>
                                Votre besoin,
                                <br/>
                                <span className={cn("block leading-tight font-oswald  text-gold mt-1")}>
                                    {"Notre solution."}
                                </span>
                            </h1>
                        </div>
                        <div className="mt-3">
                            <p  className="text-white/70 text-base leading-relaxed font-medium font-sans">
                               {"Des services professionnels pour accompagner vos besoins du quotidien,"}
                               <br/>
                               {"vos projets d'envergure et vos événements de prestige."}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-5 py-1 lg:w-[70%] ">
                        <Button className="group bg-gold max-md:w-full hover:bg-or/80 border-2 border-or text-primary">
                            {"RequestQuote"}
                            <span className="transition-transform translate-x-2 duration-400
                                group-hover:translate-x-3"
                            >
                                →
                            </span>
                        </Button>
                        <Button className="bg-onprimary/20 max-md:w-full hover:bg-white/20 border-2
                            hover:text-gold border-onPrimary text-white/90 max-md:text-nowrap"
                        >
                            {"Nous contacter"}
                        </Button>
                    </div>

                    <div className=" flex max-md:flex-col lg:mt-15 max-md:items-center gap-3 lg:gap-5 justify-between">
                        {trustStats.map((stat) => {

                            const Icon = stat.icon

                            return (
                                <div key={stat.value} className="flex gap-3 items-center w-full md:w-[30%] bg-primary 
                                    rounded-lg shadow-sm shadow-white/15 hover:bg-primary/80  px-6 py-3"
                                >
                                    <div className="bg-white/15 border border-gold/15 p-2 rounded-lg">
                                        <Icon size={25} className="text-gold" />
                                    </div>
                                    <div className="inline-flex flex-col">
                                        <span className="text-xl md:text-2xl font-pacifico text-white/88 font-bold">
                                            {stat.value}
                                        </span>
                                        <span className="text-sm font-medium font-sans text-white/55">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

