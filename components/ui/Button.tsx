"use client";

import { cn } from "@/lib/utils/cn";
import { Link } from "@/i18n/navigation";


type RequestQuoteProps = {
    href?: string,
    className?: string,
    children: React.ReactNode,
};

export function Button ({children, className, href="/"}: RequestQuoteProps) {

    return (
        <Link href={`/${href}`}
            className={cn(
                `flex items-center text-xs xs:text-sm justify-center bg-onPrimary font-sans px-6 py-3
                text-center text-white rounded-lg hover:bg-primary transition-all shadow font-semibold`,
                className
            )}
        >
            {children}
        </Link>
    )
}