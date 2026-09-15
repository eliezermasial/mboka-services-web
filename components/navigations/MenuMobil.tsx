import { cn } from "@/lib/utils/cn";
import { Link } from "@/i18n/navigation";
import { Logo } from "../ui/Logo";
import { X } from "lucide-react";

type MobileProps = {
    handleClosed: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function MenuMobile ({handleClosed}: MobileProps) {


    return (
        <div className={cn("fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex flex-col items-end md:hidden")}>
            <div className="flex flex-col w-[80%] h-full max-h-screen bg-cmyk overflow-y-auto">
                <div className="flex justify-between border border-b-gray-300 px-3 py-5">
                    <Logo />
                    <button className={cn(`flex justify-center bg-white items-center md:hidden p-2
                        border border-gray-300 rounded-xl cursor-pointer`)}
                        onClick={handleClosed}
                    >
                        <X size={24} color="gray" />
                    </button>
                </div>
                <div className=" bg-white flex flex-col gap-5 text-black px-3 py-5">
                    <Link href="/">
                        Accueil
                    </Link>
                    <div>
                        <h3>Matériel</h3>
                        <nav className="flex flex-col">
                            <Link href="">Tracteurs</Link>
                            <Link href={""}>Mini tracteurs</Link>
                            <Link href={""}>Tracteurs chenilles</Link>
                            <Link href={""}>Motoculteurs</Link>
                            <Link href={""}>Outillage agricole</Link>
                        </nav>
                    </div>
                </div>
                <div className="h-screen flex flex-col justify-around gap-1 md:gap-3 px-3 py-1 md:py-3">

                </div>
            </div>
        </div>
    )
}