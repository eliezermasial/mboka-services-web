"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { LanguageSwitcher } from "../navigations/LanguageSwitcher";


export function PreHedear () {

    return (
        <div className={cn(`fixed z-100 top-0 w-full bg-linear-to-r from-primary to-onPrimary/65 py-2`,
            
        )}>
            <Container className={cn("flex h-10 items-center text-sm font-oswald justify-between")}> 
                <div className="flex items-center gap-5">
                    <MapPin size={18} />
                    <span className="font-normal text-white/70">Kinshasa, RDC </span>
                </div>
                <div className={cn("flex justify-around gap-5 text-md")}>
                    <div className=" hidden md:flex justify-between items-center text-white/70 gap-4">
                        <Link href={""} className={cn("font-normal hover:text-gold transition line-clamp-1")}>
                            614 651 150
                        </Link>
                        <Link href={""} className={cn("font-normal hover:text-gold transition line-clamp-1")}>
                            WhatsApp
                        </Link>
                    </div>
                    <LanguageSwitcher />
                </div>
            </Container>
        </div>
    )
}