"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { useEffect, useState } from "react";


const images = [
    {src: "/artisan1.jpg", alt: "image artisan one"},
    {src: "/artisan2.jpg", alt: "image artisan two"},
    {src: "/artisan3.jpg", alt: "image artisan troi"}
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
        <Section className="relative overflow-hidden max-md:px-3 h-full lgh-120 mb-60">
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

            
            <Container className="relative z-10 flex flex-col h-full justify-center items-center scale-105">
                
                <div className="flex flex-col gap-8 md:gap-15 max-md:px-4 md:px-6">
                    <div>
                        <div className="flex justify-start items-center gap-3 mb-5">
                            <span className="text-sm uppercase text-gold font-sans font-bold">{"experience"} </span>
                            <hr className="text-gold w-15"/>
                        </div>
                        <h1 className={cn("display-lg leading-tight text-white font-oswald font-bold")}>
                           Plus de force pour votre terre,
                            <br/>
                            <span className={cn("block leading-tight text-gold mt-4 md:mt-2")}>
                                {"plus d'avenir pour votre récolte."}
                            </span>
                        </h1>
                        <div className="mt-5">
                            <p  className="text-white/75 text-lg leading-relaxed font-semibold font-sans">
                                professionnels
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p  className="text-white/75 text-lg leading-relaxed font-semibold font-sans">
                            Solutions agricoles intégrales pour professionnels,
                            exploitations agricoles et agriculteurs modernes.
                        </p>    
                    </div>
                </div>
                <div className="flex max-md:flex-col justify-start gap-5 ">
                    <button>
                        {"View machinery"}
                    </button>
                    <button className={cn(`bg-transparent border-3 border-white text-white
                        hover:bg-white hover:text-primary`)}
                    >
                        {"RequestQuote"}
                    </button>
                    </div>
                    <div className="flex items-center max-md:justify-center gap-5">
                        <span className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-[13px]">
                            {"Sales"}
                        </span>
                        <span className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-[13px]">
                            {"Rental"}
                        </span>
                        <span className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-[13px]">
                            {"Repair"}
                        </span>
                        <span className="bg-white/10 whitespace-nowrap border border-white/20 rounded-lg px-2 py-1 text-[13px]">
                            {"AgriculturalService"}
                        </span>
                    </div>

                    <div className="flex justify-between border-4 border-gold/50 z-10 border-b-none rounded-lg w-full">
                        <div className="flex flex-col md:hidden w-full px-4 py-4 items-center scale-115 justify-center">
                            
                            <span className="text-white/85 whitespace-nowrap">{"Yearsexperience"} </span>
                        </div>
                        <div className="flex flex-col md:hidden w-full px-8 py-3 scale-115 items-center justify-center">
                            
                            <span className="text-white/85">{"Commitment"} </span>
                        </div>
                        <div className="hidden md:flex w-full px-4 pt-5 pb-1 scale-115 justify-center">
                            
                        </div>
                    <div className=" hidden md:flex w-full px-4 pt-5 pb-1 scale-115 justify-center">
                            iueduoeu
                    </div>
                    <div className="hidden md:flex w-full px-4 pt-5 pb-1 scale-115 justify-center">
                        <span className="text-3xl font-bold font-mono text-gold">MULTI-BRAND</span>
                    </div>
                    <div className="hidden md:flex w-full px-4 pt-5 pb-1 scale-115 justify-center">
                        <span className="text-3xl font-bold font-mono text-gold">FAST</span>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

