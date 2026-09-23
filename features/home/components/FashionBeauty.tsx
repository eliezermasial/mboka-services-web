
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { advantages } from "@/lib/constants";
import { Dot } from "lucide-react";
import Image from "next/image";


export function FashionBeauty(){
    return(
        <Section className="bg-white/99  max-md:px-3">
            <Container className="max-md:py-20">
                <div className="flex flex-col gap-10 md:gap-20 overflow-hidden max-md:scale-105">
                    <div className="">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-pacifico font-medium uppercase tracking-[0.25em] text-onPrimary">
                                {"Mode & beauté"} ?
                            </span>
                            <div className="flex items-center">
                                <hr className="text-gold/65 w-24"/>
                                <Dot size={30} className="text-or" />
                                <hr className="text-gold/65 w-24"/>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2 className="text-3xl text-center mb-8 md:text-5xl font-oswald leading-[1.05] text-primary">
                                Révélez votre style
                            </h2>
                            <p className="inline-block md:hidden max-w-xl text-md font-medium leading-7
                                text-text font-semidbold sm:text-lg sm:leading-8"
                            >
                                {"Coiffure, make-up professionnel, make-up événementiel et couture sur mesure — notre équipe vous accompagne pour sublimer votre image."}
                            </p>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col  gap-10">
                        <div className="flex flex-col w-full justify-center gap-10 md:gap-15 px-2">
                            <div className="relative  md:mt-20 min-h-100 md:zoom-110
                                  "
                            >
                                <Image src={"/artisan2.jpg"} alt={""} fill loading="lazy"
                                    className="object-cover transition-transform shadow-xl duration-500 rounded-2xl"
                                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 12vw"
                                />
                            </div>
                            <div className="hidden md:flex gap-2">
                                <Button href="about" className="rounded-lg text-sm md:text-base  px-3 py-3 font-bold
                                    transition-colors whitespace-nowrap text-white hover:text-white/74
                                    bg-linear-to-r from-primary/78 to-onPrimary hover:from-primary/60"
                                >
                                    {"Découvrir mode & beauté"}
                                </Button>
                            </div>
                        </div>

                    <div className="relative md:pl-10 max-md:scale-105 w-full pb-5">
                        
                        <p className="hidden md:inline-block max-w-xl text-md font-medium 
                            text-text font-semidbold sm:text-lg sm:leading-8 leading-7"
                        >
                            {"Coiffure, make-up professionnel, make-up événementiel et couture sur mesure — notre équipe vous accompagne pour sublimer votre image."}
                        </p>
                        <div className="flex flex-col gap-5 mt-5 max-md:px-2">
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
                        <div className="mt-5 block md:hidden max-md:px-2">
                            <Button href="about" className="rounded-lg text-sm md:text-base  px-3 py-3 font-bold
                                transition-colors whitespace-nowrap text-white hover:text-white/74
                                bg-linear-to-r from-primary/78 to-onPrimary hover:from-primary/60"
                            >
                                {"Découvrir mode & beauté"}
                            </Button>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}