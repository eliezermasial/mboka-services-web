import { useEffect, useState } from "react";

export function useScroll () {

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
    useEffect(() => {
        const handleScrolled = () => {
            setIsScrolled(window.scrollY > 0);
        }

        handleScrolled();

        window.addEventListener("scroll", handleScrolled);
        return () => {
            window.removeEventListener("scroll", handleScrolled);
        }
    }, []);

    return isScrolled;
}