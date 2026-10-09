"use client";

import { useState } from "react";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";


const steps = [
  { num: "01", title: "Choisissez votre univers",
    desc: "Identifiez le domaine qui correspond à votre projet parmi nos 6 expertises."
  },
  { num: "02", title: "Précisez votre besoin",
    desc: "Partagez le contexte, vos priorités et le résultat attendu à travers un brief guidé."
  },
  { num: "03", title: "Validez avec un conseiller",
    desc: "Un membre de notre équipe reprend votre demande avec vous et définit la meilleure approche."
  },
  { num: "04", title: "Suivez la prise en charge",
    desc: "Nous coordonnons l’intervention et restons disponibles jusqu’à la finalisation du service."
  },
];

export function HowItWorks () {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section className="bg-[#0C1E3C] ">
      <Container className="max-md:py-20">
        <div className="flex flex-col gap-15 overflow-x-hidden max-md:scale-105 md:py-10">

          <motion.div className="flex flex-col justify-between gap-8 max-md:gap-10"
            viewport={{ once: true}} transition={{ duration: 0.6}}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col items-center md:mb-15">
              <div className="flex flex-col justify-center max-md:items-center">
                <span className="text-gold text-center leading-[1.05] font-pacifico
                  font-medium uppercase tracking-[0.25em] text-xs"
                >
                  {"Simple & rapide"}
                </span>

                <div className="flex items-center">
                  <hr className="text-gold/65 w-20"/>
                  <Dot size={30} className="text-or" />
                  <hr className="text-gold/65 w-20"/>
                </div>
              </div>

              <div className="scale-100 mt-5">
                <h2 className="text-3xl md:text-5xl max-w-2xl leading-[1.05] font-oswald text-white/90 text-center">
                  {"Réservé en moins de 3 minutes "}
                </h2>
              </div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative overflow-hidden">
            {steps.map((step, index) => (
              <motion.div key={step.num} className="flex flex-col items-center relative"
                viewport={{ once: true, amount: 0.20}} transition={{ duration: 0.6}}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              >
                <div className={cn(`w-18 h-18 rounded-full flex items-center justify-center
                  mx-auto mb-6 relative  border border-white/15 transition-all delay-100`,
                    index === 0 && hoveredIndex !== null && hoveredIndex !== 0
                    ? "bg-white/8 text-white" : index === hoveredIndex || (index === 0 && hoveredIndex === null)
                    ? "bg-gold text-primary" : "bg-white/8 text-white"
                  )}
                  onMouseEnter={()=> setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className={cn(`text-xl font-bold font-oswald`,
                    index === 0 && hoveredIndex !== null && hoveredIndex !== 0
                      ? "text-white/85" : index === hoveredIndex || (index === 0 && hoveredIndex === null)
                      ? "text-primary" : "text-white/85"
                    )}
                  >
                    {step.num}
                  </span>
                </div>

                <h3 className={cn(`text-lg font-bold font-oswald text-white/85 mb-3 transition-all delay-100`,
                  index === 0 && hoveredIndex !== null && hoveredIndex !== 0
                    ? "text-white/85" : index === hoveredIndex || (index === 0 && hoveredIndex === null)
                    ? "text-gold" : "text-white/85"
                  )}
                >
                  {step.title}
                </h3>
                <p className="max-md:w-[85%] text-center text-sm md:text-base font-sans text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div className="flex items-center justify-center mt-3"
            viewport={{ once: true, amount: 0.20}} transition={{ duration: 0.6}}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          >
            <Button className="group bg-gold/85 max-md:w-full text-primary  border-2 border-or
              hover:text-white/85 hover:bg-gold/85 transition-color delay-100"
            >
              {"Request Quote"}
              <span className="transition-transform translate-x-2 duration-400 group-hover:translate-x-4">
                →
              </span>
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}