import { cn } from "@/lib/utils/cn";
import { Search } from "lucide-react";


type FormProps = {
    className?: string,
};

export function FormHeader ({className}: FormProps) {

    return (
        <form className={cn(`hidden lg:flex items-center`,className)}>
            <div className="relative">
                <Search size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/15"
                />
                <input type="text" name="search" placeholder="... recherge"
                    className={cn(`bg-transparent px-10 w-52 py-1 rounded-xl border border-primary/15
                        shadow-primary/5 text-text/35 font-sans font-normal shadow outline-0
                        focus:outline-1 focus:outline-onPrimary/15 capitalize`
                    )}
                />
            </div>
        </form>
    )
}