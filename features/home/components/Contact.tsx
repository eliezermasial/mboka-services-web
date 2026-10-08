"use client";


import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Dot } from "lucide-react";
import { motion } from "motion/react";

export function Contact () {
    return (
        <Section className="bg-primary">
            <Container>
                <div>
                    <motion.div className="flex flex-col justify-between gap-8 max-md:gap-10"
                        viewport={{ once: true}} transition={{ duration: 0.6}}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex flex-col items-center md:mb-15">
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
                            <div className="scale-100 mt-5">
                                <h2 className="text-3xl md:text-5xl max-w-2xl leading-[1.05]
                                    font-oswald text-white text-center">
                                    {"Vous avez un besoin ?"}
                                    <br/>
                                    <span className="text-gold mt-5">Parlons-en.</span>
                                </h2>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}