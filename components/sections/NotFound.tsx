"use client";

import { MoveLeft } from "lucide-react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { useRouter } from "@/i18n/navigation";


export function NotFound () {

    const router = useRouter();

    return (
        <Section className="bg-white">
            <Container>
                <div className="flex flex-col items-center min-h-70 justify-center gap-5">
                    <h1 className="text-4xl leading-tight text-primary max-md:text-center
                        font-oswald font-medium mt-5"
                    >
                        {"Cette page n'existe pas"}
                    </h1>
                    
                    <p className="text-base font-sans text-text text-center font-medium">
                        Elle est peut-etre en construction <br/>
                        veuillez retourner a la page
                        <span className="bg-gold text-white p-1 mx-1 rounded-md">
                            {"d'accueil"}
                        </span>
                    </p>
                    
                    <button className="group inline-flex items-center text-lg text-gold gap-5
                        p-1 hover:text-gold/55 cursor-pointer capitalize font-sans"
                        onClick={() => router.back()}
                    >
                        <MoveLeft size={25} className="text-gold transition-transform
                            group-hover:translate-x-3 translate-x-2 duration-400"
                        />
                        retourn
                    </button>
                </div>
            </Container>
        </Section>
    )
}