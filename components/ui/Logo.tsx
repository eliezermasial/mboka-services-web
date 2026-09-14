import { cn } from "@/lib/utils/cn";
import { Link } from "@/i18n/navigation";


export function Logo () {

    return (
        <Link href={"/"}>
        <div className="flex gap-2 items-center p-1">
            <div className={cn(`relative bg-linear-to-l from-primary/78 to-onPrimary flex z-10 justify-center items-center
                p-5 h-11 w-11  rounded-xl shadow shadow-gold/25`)}
            >
                <div className=" relative rounded-full border-t border-dashed border-gold">
                    <span className="text-xl font-pacifico uppercase font-extrabold text-white/95 ">M</span>
                </div>
            </div>
            <div className="hidden md:flex flex-col">
                <div className="inline-flex gap-1">
                    <span translate="no" className={cn(`font-pacifico text-primary text-sm font-bold capitalize`)}>
                    mboka
                    </span>
                    <span translate="no" className={cn(`font-oswald text-onPrimary font-medium text-sm capitalize`)}>
                        services
                    </span>
                </div>
                <p className="text-sm font-pacifico font-medium capitalize text-gold/80">
                    excellence & conciergerie
                </p>
            </div>
        </div>
        </Link>
    )
}