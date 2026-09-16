"use client";

import { useState } from "react";
import { Logo } from "../ui/Logo";
import { cn } from "@/lib/utils/cn";
import { FormHeader } from "./FormHeader";
import { Container } from "../ui/Container";
import { useScroll } from "@/hooks/useScroll";
import { TextAlignCenter } from "lucide-react";
import { Navigation } from "../navigations/Navigation";
import { MenuMobile } from "../navigations/MenuMobil";


export function Header () {
    const isScrolled = useScroll();
    const [openMobil, setIsOpen] = useState<boolean>(false);

    const handleOpenMobil = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(true);
    }

    const handleClosed = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setIsOpen(false);
    }

    return (
        <header className={cn(`h-17 w-full transition-discrete bg-white
            shadow-sm flex items-center py-5 border-b border-white/45`,
            isScrolled ? "fixed z-100 top-0" : "relative"
            )}
        >
            <Container className={cn("flex justify-between w-full")}>
                <Logo />
                <Navigation />
                <FormHeader className="hidden md:flex lg:hidden items-center" />
                
                <div className="flex justify-baseline items-center gap-5 ">
                    <FormHeader />
                    <button className="bg-linear-to-r from-primary/78 to-onPrimary hover:from-primary/60 px-6 py-2
                        rounded-xl text-white/85 font-oswald shadow shadow-onPrimary/35 transition-all"
                    >
                        Request Quote
                    </button>
                    <button className={cn(`flex justify-center items-center lg:hidden p-1
                        border-2 border-primary/25 rounded-lg shadow shadow-primary/15 cursor-pointer`)}
                        onClick={handleOpenMobil}
                    >
                        <TextAlignCenter size={27} className="text-primary"/>
                    </button>
                </div>
            </Container>
            {openMobil && (
                <MenuMobile handleClosed={handleClosed} />
            )}
        </header>
    )
}