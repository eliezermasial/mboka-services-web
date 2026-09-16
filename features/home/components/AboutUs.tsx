import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Phone } from "lucide-react";
import { advantages, images } from "@/lib/constants";
import { Button } from "../../../components/ui/Button";
import { Section } from "../../../components/ui/Section";
import { Container } from "../../../components/ui/Container";


export function AboutUs() {

    return (
        <Section className="bg-white/99 max-md:px-3">
            <Container>
                <div className="grid grid-cols-1 gap-35 md:gap-25 max-md:py-20 pt-10
                    lg:grid-cols-2 lg:items-center lg:gap-16"
                >
                    <div className="relative max-md:scale-105 border-3 border-gold/60 rounded-2xl p-3 pr-0">
                        <div className="rounded-3xl z-10 zoom-120 bg-white shadow-2xl p-3 pt-1">
                            <div className="grid grid-cols-4 grid-rows-3 gap-1">
                                {images.map((image, index) => (
                                    <div key={image.alt}
                                        className={cn("relative overflow-hidden rounded-md",
                                            "min-h-22.5 sm:min-h-30 ",
                                            image.className
                                        )}
                                    >
                                        <Image src={image.src} alt={image.alt} fill priority={index === 0}
                                            className="object-cover transition-transform duration-500 hover:scale-115"
                                            sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 12vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute -bottom-8 left-0 z-20 flex items-center gap-4 px-5 py-4
                            bg-primary shadow-lg sm:px-6 sm:py-5 rounded-2xl"
                        >
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center 
                                border border-gold/40 bg-gold/10 sm:h-16 sm:w-16 rounded-xl"
                            >
                                <span className="text-2xl font-bold font-oswald text-gold sm:text-3xl">
                                    24h
                                </span>
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                                    {"WHO-WE-ARE"}
                                </span>
                                <span className="mt-1 block whitespace-nowrap text-sm font-bold text-white font-oswald sm:text-base">
                                    {"Disponibité"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative md:pl-10 max-md:scale-105 ">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-pacifico font-medium uppercase tracking-[0.25em] text-onPrimary">
                                {"WHO-WE-ARE"} ?
                            </span>
                        </div>
                        <h2 className="text-3xl my-5 md:text-5xl font-oswald font-bold leading-[1.15] text-primary">
                            Des services pensés
                            <br />
                            <span className="text-onPrimary">
                                Autour de vos besoins
                            </span>
                        </h2>
                        <p className="max-w-xl text-md font-medium leading-7
                            text-text font-semidbold sm:text-lg sm:leading-8"
                        >
                            {"Mboka Services est une plateforme professionnelle qui rassemble plusieurs domaines de services dans un seul endroit. Nous facilitons la mise en relation entre vous et notre équipe de professionnels qualifiés."}
                        </p>
                        <div className="mt-8 flex flex-col gap-5 ">
                            {advantages.map((advantage, index) => (
                                <div key={advantage}
                                    className="group flex min-h-18 items-center gap-4 rounded-xl border border-primary/10
                                        bg-gray-300/55 px-4 py-3 transition-all duration-100
                                        hover:border-gold/50 hover:bg-white hover:shadow-xl hover:shadow-cmyk/65
                                    "
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center font-bold
                                        rounded-lg bg-onPrimary font-sans transition-all duration-100 text-white
                                        group-hover:bg-gold group-hover:text-primary text-[15px] shadow-sm"
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <span dir="auto" className="font-bold align-inherit leading-5
                                        xs:text-sm sm:text-base text-primary"
                                    >
                                        {advantage}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex gap-2">
                            <Button href="about" className="rounded-lg text-sm md:text-base  px-3 py-3 font-bold
                                transition-colors whitespace-nowrap text-white hover:text-white/74
                                bg-linear-to-r from-primary/78 to-onPrimary hover:from-primary/60"
                            >
                                {"Qui sommes-nous ?"}
                            </Button>

                            <Button className="inline-flex items-center gap-2 rounded-lg bg-transparent px-3 py-3
                                border border-primary/10 font-bold hover:border-primary/30 text-onPrimary text-sm
                                md:text-base shadow-none transition-colors hover:underline hover:bg-transparent"
                            >
                                <Phone size={18} className="text-gold" />
                                <span>Contact</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}