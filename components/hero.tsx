"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./hero.module.css";
import { Button } from "./ui/button";

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section className={styles.hero}>
            {/* Background layer - using CSS gradient for performance, or video if asset available */}
            <div className={styles.background}>
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className={styles.label}>
                        <span>Notaría 71 CDMX</span>
                        <div className={styles.line}></div>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className={styles.title}>
                        Certeza Jurídica.<br />
                        <span className={styles.accent}>Legado.</span> Confianza.
                    </motion.h1>

                    <motion.p variants={itemVariants} className={styles.subtitle}>
                        Una notaría de excelencia que redefine la experiencia jurídica en México.
                        Tradición y vanguardia al servicio de su patrimonio.
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.actions}>
                        <Button className={styles.ctaPrimary}>Iniciar Trámite</Button>
                        <span className={styles.scrollHint}>Deslice para descubrir</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
