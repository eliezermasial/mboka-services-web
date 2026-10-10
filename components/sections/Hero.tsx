"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CircleChevronLeft, ShieldCheck, ThumbsUp } from "lucide-react";


const images = [
    {src: "/artisan1.jpg", alt: "image artisan one"},
    {src: "/artisan2.jpg", alt: "image artisan two"},
    {src: "/artisan3.jpg", alt: "image artisan troi"}
] as const;

const trustStats = [
  { value: "+ 1200", label: "successful", icon: ShieldCheck},
  { value: "+ 99.4%", label: "customer", icon: ThumbsUp},
  { value: "24h/7j", label: "guaranteed", icon: CircleChevronLeft},
] as const;

export function Hero() {

    const t = useTranslations("HomePage");
    const btn = useTranslations("btn");
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

        <section className="pt-10 sm:pt-15 lg:pt-20 relative overflow-hidden z-10 max-md:px-3 h-full">
            <Image key={currentImageIndex} src={images[currentImageIndex].src} fill loading="eager" alt="image champs"
                className={cn(`block absolute inset-y-0 w-full bg-cover max-md:object-cover
                    bg-center bg-no-repeat scale-115`, "scale-115", "animate-fade-in"
                )}
            />
            <div className={cn(`absolute inset-0 bg-linear-to-r from-primary/75
                via-[#01241f]/90 via-70% to-gold/40 border-none`
            )}/>

            <Container className="relative z-10 flex h-full  max-md:items-center scale-105 py-30">
                <div className="flex flex-col w-full gap-5 max-md:px-0 md:px-3 lg:px-6">
                    <div className="mt-10">
                        <div className="flex absolute left-4 md:left-6 lg:left-14 top-30 items-center gap-3
                            bg-white/20 px-3 py-1 rounded-xl shadow shadow-onPrimary/20 justify-start z-10"
                        >
                            <span className="text-xs uppercase text-or/80 font-sans font-medium">
                                {t("badge")}
                            </span>
                        </div>
                        
                        <motion.div className="md:w-[70%]"
                            initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true}} transition={{ duration: 0.6}}
                        >
                            <h1 className={cn("display-lg leading-tight text-white font-oswald font-bold mt-5")}>
                                {t("title")}
                                <br/>
                                <span className={cn("block leading-tight font-oswald  text-gold mt-1")}>
                                    {t("sous-title")}
                                </span>
                            </h1>
                        </motion.div>
                        <motion.div className="mt-3"
                            initial={{ opacity: 0, x: -90 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true}} transition={{ duration: 0.6}}
                        >
                            <p className="text-white/70 text-base leading-relaxed font-medium font-sans">
                                {t("description").split(",").map((text, index, array) => (
                                    <span key={index}>
                                        {text.trim()}
                                        {index < array.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </motion.div>
                    </div>

                    <motion.div className="flex justify-start gap-5 py-1 mt-3 lg:w-[70%] "
                        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true}} transition={{ duration: 0.6}}
                    >
                        <Button className="group bg-gold max-md:w-full text-nowrap hover:bg-or/80
                            border-2 border-or text-primary"
                        >
                            {btn("quote")}
                            <span className="transition-transform translate-x-1 md:translate-x-2 duration-400
                                group-hover:translate-x-3"
                            >
                                →
                            </span>
                        </Button>
                        <Button className="bg-onprimary/20 max-md:w-full hover:bg-white/20 border-2
                            hover:text-gold border-onPrimary text-white/85 max-md:text-nowrap"
                        >
                            {btn("contact")}
                        </Button>
                    </motion.div>

                    <div className=" flex max-lg:flex-col mt-3 md:mt-7 lg:mt-15 max-md:items-center gap-3 lg:gap-5 justify-between">
                        {trustStats.map((stat) => {
                            const Icon = stat.icon

                            return (
                                <motion.div key={stat.value} className="flex gap-3 items-center w-full lg:w-[30%] bg-primary 
                                    rounded-lg shadow-sm shadow-white/15 hover:bg-primary/80  px-6 py-3"
                                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5}} transition={{ duration: 0.6}}
                                >
                                    <div className="bg-white/15 border border-gold/15 p-2 rounded-lg">
                                        <Icon size={25} className="text-gold" />
                                    </div>
                                    <div className="inline-flex flex-col">
                                        <span className="text-xl md:text-2xl font-pacifico text-white/88 font-bold">
                                            {stat.value}
                                        </span>
                                        <span className="text-sm font-medium font-sans text-white/55">
                                            {t(stat.label)}
                                        </span>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}

