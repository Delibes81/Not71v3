"use client";

import { motion } from "framer-motion";
import styles from "./editorial-section.module.css";
import Image from "next/image";
import { Button } from "./ui/button";

export function EditorialSection() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>

                {/* Text Column */}
                <div className={styles.textColumn}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.heading}>
                            La Notaría como <br /> <span className={styles.italic}>Institución de Confianza</span>
                        </h2>
                        <div className={styles.divider}></div>
                        <p className={styles.bodyText}>
                            En Notaría 71, entendemos el derecho notarial no solo como un trámite, sino como el arte de brindar certidumbre.
                            Bajo la titularidad del <strong>Lic. Eduardo J. Muñoz Pinchetti</strong>, nuestra notaría combina décadas de tradición
                            con una visión moderna y eficiente del servicio público.
                        </p>
                        <p className={styles.bodyText}>
                            Nos distinguimos por un trato personalizado, discreción absoluta y una ejecución impecable
                            en operaciones inmobiliarias, corporativas y sucesorias de alto nivel.
                        </p>
                        <Button className={styles.readMoreBtn} variant="outline" href="/nosotros">
                            Conozca al Equipo
                        </Button>
                    </motion.div>
                </div>

                {/* Image Column */}
                <div className={styles.imageColumn}>
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Abstract Architectural or Portrait Image */}
                        <div className={styles.imageContainer}>
                            <Image
                                src="/notary-portrait.png"
                                alt="Lic. Eduardo J. Muñoz Pinchetti"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.portrait}
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
