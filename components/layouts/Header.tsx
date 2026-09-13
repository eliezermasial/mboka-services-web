"use client";

import { Logo } from "../ui/Logo";
import { cn } from "@/lib/utils/cn";
import { Container } from "../ui/Container";
import { Navigation } from "../navigations/Navigation";
import { Search, TextAlignCenter } from "lucide-react";


export function Header () {
    return (
        <header className={cn(`relative h-17 w-full transition-discrete bg-white border-b border-white/45
            shadow-sm flex items-center py-5`
            )}
        >
            <Container className={cn("flex justify-between w-full")}>
                <Logo />
                <Navigation />
                <form className="hidden md:flex lg:hidden items-center">
                    <div className="relative">
                        <Search size={20}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/15"
                        />
                        <input type="text" name="search" placeholder="... recherge"
                            className="bg-transparent px-10 w-52 py-1 rounded-xl border border-primary/15 shadow
                            shadow-primary/5 text-text/35 font-sans font-normal outline-0 focus:outline-1 focus:outline-onPrimary/15"
                        />
                    </div>
                </form>
                
                <div className="flex justify-baseline items-center gap-5 ">
                    <form className="hidden lg:flex items-center">
                        <div className="relative">
                            <Search size={20}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/15"
                            />
                            <input type="text" name="search" placeholder="...recherge"
                                className="bg-transparent px-10 w-52 py-1 capitalize text-sm rounded-xl border border-primary/15 shadow
                                shadow-primary/5 text-text/35 font-sans font-normal outline-0 focus:outline-1 focus:outline-onPrimary/15"
                            />
                        </div>
                    </form>
                    <button className="bg-linear-to-r from-primary/78 to-onPrimary px-6 py-2 transition-all
                        rounded-xl text-white/85 font-oswald shadow shadow-onPrimary/35 hover:from-primary/60"
                    >
                        Request Quote
                    </button>
                    <button className={cn(`flex justify-center items-center lg:hidden p-1
                        border-2 border-primary/25 rounded-lg shadow shadow-primary/15 cursor-pointer`)}
                    >
                        <TextAlignCenter size={27} className="text-primary"/>
                    </button>
                </div>
            </Container>
        </header>
    )
}