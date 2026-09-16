import { cn } from "@/lib/utils/cn";
import { Link, usePathname } from "@/i18n/navigation";


const navLinks = [
    {key: "home", href: "/"},
    {key: "Services", href: "/services"},
    {key: "Événements", href: "/events"},
    {key: "about", href: "/about"},
    {key: "contact", href: "/contact"},
] as const

export function Navigation () {
    const pathname = usePathname()

    return (
        <nav  className={cn(`hidden lg:flex justify-center items-center gap-2`)}>
            {navLinks.map((item) => (
                <Link key={item.key} href={item.href}
                    className={cn(`capitalize  text-base font-semibold transition-all
                    font-oswald p-2 rounded-lg`,
                    pathname === item.href ? "bg-primary text-white/55 px-2 py-1" : "text-primary hover:text-gold/55 "
                )}
                >
                    {item.key}
                </Link>
            ))}
        </nav>
    )
}