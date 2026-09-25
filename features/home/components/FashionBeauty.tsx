"use client";

import Image from "next/image";
import { useState } from "react";
import {  Dot, MoveLeft, MoveRight } from "lucide-react";
import { modeBeauty } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";


export function FashionBeauty(){

    const [isHover, setIsHover] = useState<boolean>(false)
    const [currentIndex, setCurrentImage] = useState<number>(0);
    const [currentIndexGallery, setCurrentIndexGallery] = useState<number>(0);
    const [startX, setStartX] = useState<number>(0); 

    const currentServices = modeBeauty.services[currentIndex];
    const currentGallery = modeBeauty.gallery[currentIndexGallery];

    const handleMouseEnter = (index: number) => {
        setIsHover(true);
        setCurrentImage(index);
    }

    const handleMouseLeave = () => {
        setIsHover(false)
        setCurrentImage(0);
    }

    const next = () => {

        setCurrentIndexGallery(
            (prev) => Math.min(prev + 1, modeBeauty.gallery.length - 1)
        );
    }

    const previous = () => {
        setCurrentIndexGallery(
            (prev) => Math.max(prev - 1, 0)
        );
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {

        const value = e.touches[0].clientX;

        setStartX(value);
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const endX = e.changedTouches[0].clientX;
        const distance = endX - startX;

        if(Math.abs(distance) < 50) return;

        if(distance < startX) {

            return next();

        } else {
            return previous();
        }
    } 

    
    return(
        <Section className="bg-white/99  max-md:px-3">
            <Container className="max-md:py-20">
                <div className="flex flex-col gap-10 lg:gap-20 overflow-hidden max-md:scale-105">
                    <div className="">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-pacifico font-medium uppercase tracking-[0.25em] text-onPrimary">
                                {"Mode & beauté"} ?
                            </span>
                            <div className="flex items-center">
                                <hr className="text-gold/65 w-24"/>
                                <Dot size={30} className="text-or" />
                                <hr className="text-gold/65 w-24"/>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2 className="text-3xl text-center mb-8 md:text-5xl font-oswald leading-[1.05] text-primary">
                                Révélez votre style
                            </h2>
                            <p className="inline-block max-md:text-justify lg:hidden lg:max-w-xl text-md font-medium leading-7
                                text-text font-semidbold sm:text-lg sm:leading-8 md:text-center"
                            >
                                {"Coiffure, make-up professionnel, make-up événementiel et couture sur mesure notre équipe vous accompagne pour sublimer votre image."}
                            </p>
                        </div>
                    </div>
                    <div className="flex max-lg:flex-col  gap-10">
                        <div className="flex flex-col  w-full justify-center gap-10 md:gap-15 px-2">
                            <div className="flex flex-col items-center md:hidden">
                                <div className="flex items-center gap-5">
                                    <MoveLeft size={20} className="text-gold" />
                                    <span className="text-primary/65 text-sm font-sans">
                                        {currentIndexGallery + 1} / {modeBeauty.gallery.length}
                                    </span>
                                    <MoveRight size={20} className="text-gold" />
                                </div>
                            </div>

                            <div className="group relative lg:mt-20 min-h-100 max-md:scale-105 
                                shadow-lg rounded-2xl md:zoom-110"
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                <Image src={ isHover ? currentServices.image : "/makeup.jpg"} alt={currentServices.name} fill loading="lazy"
                                    className="object-cover hidden md:inline-block md:shadow-xl group-hover:scale-103 duration-500 rounded-xl"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                
                                <Image src={currentGallery.img} alt={currentGallery.alt} fill loading="lazy"
                                    className="object-cover inline-block md:hidden md:shadow-xl group-hover:scale-103 duration-500 rounded-xl"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="hidden md:flex gap-2">
                                <Button href="mode-beauty" className="rounded-lg text-sm md:text-base  px-3 py-3 font-bold
                                    transition-colors whitespace-nowrap text-white hover:text-white/74
                                    bg-linear-to-r from-primary/78 to-onPrimary hover:from-primary/60"
                                >
                                    {"Découvrir Nos Styles"}
                                </Button>
                            </div>
                        </div>

                        <div className="relative lg:pl-10 max-md:scale-105 w-full pb-5">
                            
                            <p className="hidden lg:inline-block max-w-xl text-md font-medium 
                                text-text font-semidbold sm:text-lg sm:leading-8 leading-7"
                            >
                                {"Coiffure, make-up professionnel, make-up événementiel et couture sur mesure — notre équipe vous accompagne pour sublimer votre image."}
                            </p>

                            <div className="flex flex-col gap-3 md:gap-5 mt-5 max-md:px-3"
                                onMouseLeave={() => handleMouseLeave()}
                            >
                                {modeBeauty.services.map((item, index) => (
                                    <div key={item.name}
                                        className="group flex min-h-18 items-center gap-4 rounded-xl border hover:border-primary/10
                                            hover:bg-gray-300/55 px-4 py-3 transition-all duration-100
                                            border-gold/50 bg-white hover:shadow-xl hover:shadow-cmyk/65
                                        "
                                        onMouseEnter={()=> handleMouseEnter(index)}
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center font-bold
                                            rounded-lg group-hover:bg-onPrimary font-sans transition-all duration-100 group-hover:text-white
                                            bg-gold text-[15px] shadow-sm text-primary/75"
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </div>
                                        
                                        <div className="inline-flex flex-col gap-1">
                                            <span dir="auto" className="font-bold align-inherit leading-5
                                                xs:text-sm sm:text-base text-primary/95"
                                            >
                                                {item.name}
                                            </span>
                                            <span className="max-md:text-sm font-medium align-inherit leading-5 text-primary/75">
                                                {item.descr}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 block md:hidden max-md:px-2">
                                <Button href="about" className="rounded-lg text-sm md:text-base  px-3 py-3 font-bold
                                    transition-colors whitespace-nowrap text-white hover:text-white/74
                                    bg-linear-to-r from-primary/78 to-onPrimary hover:from-primary/60"
                                >
                                    {"Découvrir mode & beauté"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}