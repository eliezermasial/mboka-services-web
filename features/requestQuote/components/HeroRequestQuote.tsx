"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Clock3, ShieldCheck, UserRound } from "lucide-react";


const trustIcons = [Clock3, ShieldCheck, UserRound] as const;

export function HeroRequestQuote() {

    const t = useTranslations("HeroRequestQuote");
    
    const trustStats = t.raw("trustStats") as {
        value: string,
        label: string,
    } [];

    return (
        <section className="pt-10 sm:pt-15 lg:pt-20 md:bg-[#0C1E3C]/85
            relative overflow-hidden z-10 max-md:px-3 px-6 h-full"
        >
            <Image src="/contact.jpg" fill priority alt="Un professionnel préparant un projet"
                className={cn(`block md:hidden absolute inset-y-0 w-full bg-cover max-md:object-cover
                    bg-center bg-no-repeat scale-115`, "scale-115", "animate-fade-in"
                )}
            />
            <div className={cn(`inline-block md:hidden absolute inset-0 bg-linear-to-r from-primary/85
                via-[#0C1E3C]/55 via-70% to-[#01241f]/90 border-none`
                )}
            />

            <Container className="relative z-10 flex h-full  max-md:items-center scale-105 pt-30 pb-10 md:py-30">
                <div className="flex flex-col w-full gap-5 max-md:px-0 md:px-3 lg:px-6">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col items-center gap-8 md:flex-row">
                            <div className="w-full md:w-1/2">
                                <motion.h1 className="display-lg leading-tight text-white font-oswald font-bold mt-5"
                                    initial={{ opacity: 0, x: -90 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true}} transition={{ duration: 0.6}}
                                >
                                    {t("title")}
                                    <span className="block leading-tight font-oswald text-gold mt-1">
                                        {t("subtitle")}
                                    </span>
                                </motion.h1>
                                <motion.p className="mt-5 text-white/70 text-base leading-snug font-medium font-sans"
                                    initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true}} transition={{ duration: 0.6}}
                                >
                                    {t("description")}
                                </motion.p>
                            </div>

                            <div className=" hidden md:inline-block relative h-64 w-full overflow-hidden rounded-xl md:h-96 md:w-1/2">
                                <Image src="/contact.jpg" fill priority alt={t("imageAlt")}
                                    className="object-cover object-center opacity-70" sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-r
                                    from-primary via-primary/30 to-transparent"
                                />
                                <div className="absolute inset-0 bg-[#0C1E3C]/20" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 lg:mt-15 flex flex-row items-stretch justify-between gap-2 sm:gap-3 lg:gap-5">
                        {trustStats.map((stat, index) => {
                            const Icon = trustIcons[index]

                            return (
                                <motion.div key={stat.value} className="flex min-w-0 flex-1 max-md:flex-col items-center 
                                    px-2 sm:gap-3 sm:px-4 lg:px-6 py-3 bg-primary rounded-lg shadow-sm
                                    shadow-white/15 hover:bg-primary/80 transition-colors gap-2"
                                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5}} transition={{ duration: 0.6}}
                                >
                                    <div className="rounded-lg border border-gold/15 bg-white/15p-1.5 sm:p-2">
                                        <Icon size={20} className="text-gold sm:size-6"/>
                                    </div>
                                    <div className="flex min-w-0 flex-col gap-1 text-white/75">
                                        <span className="text-sm font-oswald font-semibold sm:text-lg lg:text-2xl">
                                            {stat.value}
                                        </span>
                                        <span className="sm:text-xs md:text-sm max-md:text-center font-medium text-white/55 font-sans">
                                            {stat.label}
                                        </span>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}