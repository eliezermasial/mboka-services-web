import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Dot } from "lucide-react";


export function Process() {
    return (
        <Section className="bg-cmyk">
            <Container>
                <div className="flex flex-col justify-center gap-10">
                    <div className="flex flex-col items-center gap-5 justify-center">
                        <div className="flex flex-col items-center">
                            <span className="text-onPrimary leading-[1.05] text-xs font-pacifico font-medium uppercase tracking-[0.25em]">
                                {"COMMENT ÇA MARCHE ?"}
                            </span>
                            <div className="flex items-center">
                                <hr className="text-onPrimary/40 w-24"/>
                                <Dot size={30} className="text-or" />
                                <hr className="text-onPrimary/40 w-24"/>
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl max-w-3xl text-center leading-[1.05] font-oswald text-primary">
                            {"Votre projet en 4 étapes simples "}
                        </h2>
                        <p className="text-text/75 max-w-2xl text-center">
                            Une chaîne de valeur fluide conçue pour vous décharger de toute contrainte technique et organisationnelle.
                        </p>
                    </div>
                    <div className="flex items-center justify-center ">
                        <div className="p-6 bg-primary">
                            <div>
                                <span>01</span>
                            </div>
                        </div>
                        <hr className="text-gold w-16"/>
                        <div className="p-6 bg-primary relative">
                                <span className="text-gold bg-onPrimary/35 p-2 absolute top-0 left-0">
                                    02
                                </span>
                        </div>
                        <hr className="text-gold w-16"/>
                        <div className="p-6 bg-primary">
                            <div>
                                <span>03</span>
                            </div>
                        </div>
                        <hr className="text-gold w-16"/>
                        <div className="p-6 bg-primary">
                            <div>
                                <span>04</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

                    </div>
                </div>
            </Container>
        </Section>
    )
}