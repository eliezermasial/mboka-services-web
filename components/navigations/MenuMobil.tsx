import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { Link } from "@/i18n/navigation";
import { Tractor, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { motion, AnimatePresence } from "motion/react";

type MobileProps = {
    handleClosed: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function MenuMobile ({handleClosed}: MobileProps) {

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex flex-col items-end bg-slate-950/80 backdrop-blur-sm md:hidden"
            >
                <motion.div className="flex h-full max-h-dvh w-[85%] max-w-sm gap-3 flex-col overflow-y-auto
                    border-l border-white/5 bg-[#071426] text-white shadow-2xl"
                    initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                >
                    <div className="flex items-center justify-between border-b border-white/5 p-5">
                        <Logo />
                        <LanguageSwitcher />
                        <button type="button" onClick={handleClosed} aria-label="Fermer le menu"
                            className="flex size-10 items-center justify-center rounded-xl border border-white/10
                            bg-white/5 text-slate-300 transition-colors hover:bg-white/10"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    <div className="flex flex-1 flex-col gap-6 px-4 py-6">
                        <div className="space-y-4">
                            <h3 className="flex items-center gap-3 px-4 text-xs font-bold
                                tracking-[0.2em] text-amber-400 uppercase"
                            >
                                <Tractor size={20} />
                                Matériel
                            </h3>
                            <nav className="ml-4 flex flex-col gap-1 border-l-2 border-amber-400/30 pl-4">
                                <Link href="" className="rounded-lg border border-white/10 bg-white/3 px-3 py-3 text-sm text-slate-300
                                    hover:bg-amber-400/10 hover:text-amber-400 transition-colors"
                                >
                                    Tracteurs
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="border-t border-white/10 p-4">
                        <Button className="bg-gold/95">
                            Demander un devis
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}