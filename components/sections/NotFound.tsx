"use client";

import { MoveLeft } from "lucide-react";
import { Section } from "../ui/Section";
import { useTranslations } from "next-intl";
import { Container } from "../ui/Container";
import { useRouter } from "@/i18n/navigation";


export function NotFound () {

    const router = useRouter();

    const t = useTranslations("NotFound");
    
    return (

        <Section className="relative isolate overflow-hidden bg-[#F8F9FC]">
            <Container className="py-20">
                <div className="relative flex min-h-105 flex-col items-center text-center px-5 py-12
                    justify-center gap-6 overflow-hidden rounded-3xl md:min-h-12"
                >
                    <div className="pointer-events-none absolute -right-20
                        -top-80 size-64 rounded-full bg-gold/10 blur-3xl" 
                    />
                    <div className="pointer-events-none absolute -bottom-20
                        -left-20 size-64 rounded-full bg-primary/10 blur-3xl"
                    />
                    <span className="relative font-oswald text-8xl font-bold leading-none text-gold/35 sm:text-9xl">
                        {"404"}
                    </span>

                    <div className="relative -mt-4 flex flex-col items-center gap-4">
                        <h1 className="font-oswald font-bold leading-tight text-primary text-3xl sm:text-4xl md:text-5xl">
                            {t("title")}
                        </h1>
                        <p className="max-w-md text-sm leading-relaxed text-text/75 sm:text-base">
                            {t("description")}
                        </p>
                    </div>
                    <button className="group relative mt-4 inline-flex items-center gap-3 px-6 rounded-xl bg-primary
                        py-3.5 font-sans text-sm font-semibold text-white shadow-lg shadow-primary/15
                        transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl
                        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                        onClick={() => router.back()}
                    >
                        <MoveLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1"/>
                        {t("back")}
                    </button>
                </div>
            </Container>
        </Section>
    )
}