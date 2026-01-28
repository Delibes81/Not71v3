"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Use a small timeout to ensure it runs after any immediate browser restoration
        const timeout = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant", // Force instant jump
            });
        }, 10);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
}
