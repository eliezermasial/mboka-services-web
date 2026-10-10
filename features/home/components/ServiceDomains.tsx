"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { services } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { CircleDashedCheck, Dot } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardParagraphy, CardTitle} from "@/components/ui/Card";


export function ServiceDomains () {
    
    return (
        <Section className="bg-primary/55">
            <Container className="max-md:py-30">
                <div className="flex flex-col gap-15 overflow-x-hidden max-md:scale-105 md:py-10 md:gap-20">
                    <div className="mb-5 flex items-center flex-col justify-center">
                        <motion.div className="flex flex-col items-center"
                            viewport={{ once: true, amount: 0.20}} transition={{ duration: 0.6}}
                            initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
                        >
                            <span className="text-gold leading-[1.05] text-xs font-pacifico font-medium uppercase tracking-[0.25em]">
                            {"Ce que nous proposons"}
                            </span>
                            <div className="flex items-center">
                                <hr className="text-gold/65 w-24"/>
                                <Dot size={30} className="text-or" />
                                <hr className="text-gold/65  w-24"/>
                            </div>
                        </motion.div>
                        <motion.h2 className="text-3xl md:text-5xl mt-5 max-w-3xl text-center overflow-hidden
                            leading-[1.05] text-white/90 font-oswald"
                            viewport={{ once: true, amount: 0.5}} transition={{ duration: 0.6}}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        >
                            {"Explorez Nos domaines d'expertise"}
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {services.map((item) => (
                        <Card key={item.title} className="group grid bg-white/4 gap-5 border-onPrimary/25 shadow-sm
                            hover:border-gold/10 hover:bg-white/8 shadow-onPrimary/8 transition-all delay-100"
                        >
                            <CardHeader className="group relative h-56 overflow-hidden rounded-b-md rounded-t-lg">
                                <Image src={item.image} alt={item.title}
                                    loading="lazy"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 ease-out
                                    group-hover:scale-110"
                                />
                            </CardHeader>
                            <CardContent className="px-6 gap-3 pb-4 inline-flex flex-col">
                                <CardTitle>{item.title} </CardTitle>
                                <div>
                                    {item.services.map((service) => (
                                        <div key={service.name} className="flex items-center gap-2">
                                            <CircleDashedCheck size={18} className="text-gray-500/45 
                                                group-hover:text-gold/25" strokeWidth={1.7}
                                            />
                                            <CardParagraphy  className="text-white/55 font-normal">
                                                {service.name}
                                            </CardParagraphy>
                                        </div>
                                    ))}
                                </div>
                                <Link href={""} className="group inline-flex py-1 items-center text-gold/75">
                                    <span>Découvrir</span>
                                    <span className="transition-transform translate-x-2 duration-400 group-hover:translate-x-3">
                                        →
                                    </span>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}