"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./header.module.css";
import { Button } from "./ui/button";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className={`container ${styles.headerContainer}`}>
                    <Link href="/" className={styles.logoLink}>
                        <Image
                            src="/logo.png"
                            alt="Notaría 71 CDMX"
                            width={200}
                            height={60}
                            className={styles.logo}
                        />
                    </Link>

                    <nav className={styles.desktopNav}>
                        <Link href="/" className={styles.navLink}>Inicio</Link>
                        <Link href="/services" className={styles.navLink}>Servicios</Link>
                        <Link href="/nosotros" className={styles.navLink}>Nosotros</Link>
                        <Link href="/recursos" className={styles.navLink}>Recursos</Link>
                        <Link href="/contact" className={styles.navLink}>Contacto</Link>
                    </nav>

                    <button className={styles.menuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} color="#FFF" /> : <Menu size={24} color="#FFF" />}
                    </button>
                </div>
            </motion.header >

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className={styles.mobileNav}
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="container">
                            <nav className={styles.mobileNavLinks}>
                                <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                                <Link href="/services" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Servicios</Link>
                                <Link href="/nosotros" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
                                <Link href="/recursos" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Recursos</Link>
                                <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Contacto</Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
