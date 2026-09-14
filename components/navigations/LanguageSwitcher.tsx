import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import { useLocale } from "next-intl";

const languages:("fr" | "en")[] = ["fr", "en"];


export function LanguageSwitcher () {
    const router= useRouter()
    const pathName= usePathname()
    const locale = useLocale()
    
    const handleChangeLanguage = (locale: "fr" | "en") => {
        return router.replace(pathName,{locale});
    }
    return (
        <div role="group" aria-label="Language selector"
            className={cn(`
                flex items-center gap-0.5 rounded-md p-0.5 bg-white/10`,
            )} 
        >
            {languages.map((language) => (
                <button key={language}
                        className={cn(`flex items-center gap-1 rounded px-2 py-0.5 uppercase cursor-pointer text-[11px]
                        font-semibold transition-all duration-200`,
                        locale === language ? "bg-white/80 text-primary" : "text-white/70 hover:text-white"
                    )}
                    aria-current={locale === language ? "true": undefined}
                    onClick={() => handleChangeLanguage(language)}
                >
                    <span>{language === "fr" ? '🇫🇷': '🇬🇧'}</span>
                </button>
            ))}
        </div>
    )
}