"use client";

import { useState } from "react";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";


const steps = [
  { num: "01", title: "Choisissez",
     desc: "Sélectionnez le service dont vous avez besoin parmi nos 6 domaines."
  },
  { num: "02", title: "Décrivez",
     desc: "Expliquez votre besoin à notre équipe via le formulaire."
  },
  { num: "03", title: "Contactez-nous",
     desc: "Choisissez le moyen de contact qui vous convient le mieux."
  },
  { num: "04", title: "Nous vous accompagnons",
     desc: "Notre équipe vous répond et prend en charge votre demande."
  },
];

export function HowItWorks () {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section className="bg-[#0C1E3C] ">
      <Container className="max-md:py-20">
        <div className="flex flex-col gap-20 overflow-x-hidden max-md:scale-105 md:py-10">
          
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
                <h2 className="text-3xl md:text-5xl max-w-2xl leading-[1.05] font-oswald text-white text-center">
                  {"Comment ça marche ? "}
                </h2>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            viewport={{ once: true, amount: 0.20}} transition={{ duration: 0.6}}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          >
            {steps.map((step, index) => (
              <div key={step.num} className="flex flex-col items-center justify-center relative">

                <div className={cn(`w-20 h-20 rounded-full flex items-center justify-center
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

              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}