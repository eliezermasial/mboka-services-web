"use client";

import Image from "next/image";
import { motion } from "motion/react";
import image from "@/public/contact.jpg"
import { Clock3, Dot,} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";


export function Contact () {

    const btn = useTranslations("btn");

    return (
        <Section className="bg-gray-900/75 py-16 md:py-24">
            <Container className="max-md:py-20">
                <div className="flex flex-col gap-15 overflow-x-hidden max-md:scale-105 md:py-10">
                    <div className="flex items-center p-2 justify-center gap-5 max-md:gap-8">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col justify-center max-md:items-center">
                                <span className="text-gold text-center leading-[1.05] font-pacifico
                                    font-medium uppercase tracking-[0.25em] text-xs"
                                >
                                    {"Prêt à commencer ?"}
                                </span>
                                <div className="flex items-center">
                                    <hr className="text-gold/65 w-24"/>
                                    <Dot size={30} className="text-or" />
                                    <hr className="text-gold/65 w-24"/>
                                </div>
                            </div>
                            <div>
                                <h2 className="mt-5 font-oswald text-3xl text-center leading-tight
                                    text-white sm:text-4xl lg:text-5xl"
                                >
                                    Vous avez un besoin ?
                                    <span className="mt-2 block text-gold">Parlons-en.</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="grid overflow-hidden rounded-3xl border border-white/15
                        bg-gray-900/40 shadow-2xl md:min-h-130 md:grid-cols-2"
                    >
                        <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 md:px-12 lg:px-14">
                            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.2 }}
                            >
                                <p className="max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                                    Un projet, un service à rechercher ou une question ?
                                    Décrivez-nous votre besoin et notre équipe vous accompagnera
                                    pour trouver une solution adaptée.
                                </p>
                            </motion.div>

                            <motion.div className="mt-8 flex flex-col gap-5 sm:flex-wrap"
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.2 }}
                            >
                                <Button href="" className="rounded-lg text-sm md:text-base px-3 py-3 font-bold
                                    transition-color delay-100 whitespace-nowrap text-white hover:text-white/74
                                    bg-linear-to-r from-primary/78 to-onPrimary hover:from-primary/60
                                    transition-all duration-300 hover:-translate-y-1"
                                >
                                    {btn("quote")}
                                </Button>
                                
                                <Button href="/contact" className="group h-12 text-sm md:text-base bg-transparent px-5
                                    border-2 text-white/75 hover:bg-white/10 hover:text-white gap-2 border-gold/75
                                    transition-all duration-300 hover:-translate-y-1"
                                >
                                    {btn("contact")}
                                    <span className="transition-transform translate-x-2 duration-400
                                        group-hover:translate-x-4">
                                        →
                                    </span>
                                </Button>
                            </motion.div>

                            <div className="mt-8 flex items-center gap-3">
                                <Clock3 className="size-5 shrink-0 text-gold" />
                                <span className="text-sm text-white/55">
                                    Une démarche simple, rapide et personnalisée.
                                </span>
                            </div>
                        </div>

                        <div className="relative min-h-80 overflow-hidden md:min-h-full md:rounded-l-3xl">
                            <Image src={image} fill sizes="(max-width: 768px) 100vw, 50vw"
                                alt="Une professionnelle échangeant au téléphone"
                                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-black/40
                                via-[#0C1E3C]/50 to-[#0C1E3C]/80"
                            />
                            <div className="absolute inset-0 hidden bg-linear-to-r md:block
                                from-[#0C1E3C]/70 via-transparent to-transparent"
                            />
                            <div className="absolute inset-0 bg-linear-to-b md:hidden
                                from-transparent via-transparent to-[#0C1E3C]/40"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
