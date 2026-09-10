import { routing } from "./routing";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig( async ({requestLocale}) => {
    const locale = await requestLocale;

    if(!locale || ! routing.locales.includes(locale as "fr" | "en")) {
        return {
            locale: routing.defaultLocale,
            messages: (
                await import(
                    `@/dictionnaire/${routing.defaultLocale}.json`
                )
            ).default,
        }
    };

    return {
        locale,
        messages: (await import(`@/dictionnaire/${locale}.json`) ).default
    }
})