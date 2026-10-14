import { HeroRequestQuote } from "@/features/requestQuote/components/HeroRequestQuote";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "demande un devis",
    description:"page pour faire une demande selon votre choix"
};

export default function  RequestQuote () {

    return (
        <>
            <HeroRequestQuote />
        </>
    )
}