import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { images } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import { Dot } from "lucide-react";
import Image from "next/image";

export function OurWork () {

    return (
        <Section className="bg-primary/75">
            <Container>
                <div className="flex flex-col gap-10">
                    <div className="flex items-center flex-col justify-center">
                        <div className="flex flex-col items-center">
                            <span className="text-gold leading-[1.05] text-xs font-pacifico font-medium uppercase tracking-[0.25em]">
                                {"Our Work"}
                            </span>
                            <div className="flex items-center">
                                <hr className="text-gold/65 w-24"/>
                                <Dot size={30} className="text-or" />
                                <hr className="text-gold/65  w-24"/>
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl my-5 max-w-3xl text-center
                            leading-[1.05] text-white font-oswald"
                        >
                            {"NOS RÉALISATIONS"}
                        </h2>
                        <p>
                            Découvrez quelques projets réalisés
                            par Mboka Services.
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-4 grid-rows-3 gap-1">
                            {images.map((image, index) => (
                                <div key={image.alt}
                                    className={cn("relative overflow-hidden rounded-md h-72",
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
                </div>
            </Container>
        </Section>
    )
}