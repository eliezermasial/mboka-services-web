"use client"

import Image from "next/image";
import img from "@/public/whyus.jpg";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Dot, Handshake, Layers3, MessageCircleMore, ShieldCheck, } from "lucide-react";


export const whyUs = [
    {
        id: 1,
        title: "Un accompagnement personnalisé",
        desc: "Nous prenons le temps de comprendre vos besoins afin de vous orienter vers une solution adaptée à votre projet.",
        icon: Handshake,
    },
    {
        id: 2,
        title: "Une diversité de services",
        desc: "De l'habitat à l'événementiel, en passant par la photographie, la beauté et la maintenance, nous centralisons vos demandes en un seul endroit.",
        icon: Layers3,
    },
    {
        id: 3,
        title: "Des démarches simples et rapides",
        desc: "Décrivez votre besoin, choisissez votre moyen de contact et échangez directement avec notre équipe pour faire avancer votre demande.",
        icon: MessageCircleMore,
    },
    {
        id: 4,
        title: "Une équipe à votre écoute",
        desc: "Nous restons attentifs à vos attentes et vous accompagnons tout au long de votre demande pour faciliter vos démarches.",
        icon: ShieldCheck,
    },
];

export function WhyUs() {

    return (
        <Section className="relative isolate overflow-hidden min-h-150 max-md:min-h-175">
            <Image src={img} alt="Champ illustrant nos engagements" fill priority sizes="100vw"
                className="object-cover object-center scale-110 animate-fade-in"
            />

            <div className="absolute inset-0 bg-linear-240 from-black via-black/95"/>

            <Container className="relative z-10 max-md:py-20">
                <div className="flex flex-col gap-10 overflow-hidden max-md:scale-105 md:pb-10">
                    <motion.div className="flex flex-col justify-between gap-8 max-md:gap-10"
                        viewport={{ once: true}} transition={{ duration: 0.6}}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex flex-col items-center md:mb-15">
                            <div className="flex flex-col justify-center max-md:items-center">
                                <span className="text-gold text-center leading-[1.05] font-pacifico
                                    font-medium uppercase tracking-[0.25em] text-xs"
                                >
                                    {"Notre engagement"}
                                </span>
                                <div className="flex items-center">
                                    <hr className="text-gold/65 w-20"/>
                                    <Dot size={30} className="text-or" />
                                    <hr className="text-gold/65 w-20"/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-10 scale-100 mt-5">
                                <h2 className="text-3xl md:text-5xl max-w-2xl leading-[1.05]
                                    text-white/90 text-center font-oswald"
                                >
                                    {"Pourquoi nous Choisir ?"}
                                </h2>
                                <p className="md:max-w-xl mt-1 text-center leading-relaxed text-white/55">
                                    {"De la conception à l’aménagement, nous vous accompagnons avec des services en plomberie, électricité, maçonnerie, peinture, architecture et architecture intérieure."}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10 mt-3 md:mt-10">
                        {whyUs.map((item) => {

                            const Icon = item.icon

                            return (
                                <motion.div key={item.id} className="overflow-hidden"
                                    viewport={{ once: true, amount: 0.25}} transition={{ duration: 0.6}}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                >
                                <Card className="group flex h-75 flex-col items-center justify-center
                                    rounded-2xl border-2 border-blue-200/35 bg-gray-900/45 p-6 text-center shadow-lg
                                    backdrop-blur-sm transition-all duration-300 hover:-translate-y-1
                                    hover:border-gold/15 hover:bg-gray-900/55"
                                >
                                    <CardHeader className="flex size-16 items-center justify-center rounded-2xl border 
                                        bg-gray-500/10 transition-colors duration-300 mb-5 border-gold/25
                                        group-hover:border-blue-200/35 group-hover:bg-gold/10"
                                    >
                                        <Icon size={32} strokeWidth={1.7}
                                            className="text-gold transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </CardHeader>

                                    <CardContent className="flex flex-col items-center gap-3 p-0">
                                        <h3 className="font-oswald text-xl font-semibold text-white/85
                                            transition-colors duration-300 group-hover:text-gold/85"
                                        >
                                            {item.title}
                                        </h3>

                                        <p className="max-w-xs text-sm leading-relaxed text-white/65">
                                            {item.desc}
                                        </p>

                                        <span className="mt-2 h-0.5 w-10 rounded-full bg-gold/70
                                            transition-all duration-300 group-hover:w-16"
                                        />
                                    </CardContent>
                                </Card>
                                </motion.div>
                            )
                        })}
                        
                    </div>
                </div>
            </Container>
        </Section>
    );
}