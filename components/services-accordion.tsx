"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./services-accordion.module.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "inmobiliario",
        title: "Derecho Inmobiliario",
        description: "Seguridad jurídica en compraventas, hipotecas, donaciones y fideicomisos. Gestionamos su patrimonio con rigor.",
        link: "/services#inmobiliario"
    },
    {
        id: "corporativo",
        title: "Servicios Corporativos",
        description: "Estrategia legal para empresas: Constituciones, Fusiones, Poderes y Actas de Asamblea.",
        link: "/services#corporativo"
    },
    {
        id: "sucesiones",
        title: "Sucesiones y Testamentos",
        description: "Protección del legado familiar. Testamentos, sucesiones testamentarias e intestamentarias.",
        link: "/services#sucesiones"
    },
    {
        id: "tramites",
        title: "Fe Pública y Ratificaciones",
        description: "Certificaciones, Fe de Hechos y trámites urgentes con la eficiencia que su tiempo requiere.",
        link: "/services#tramites"
    }
];

export function ServicesAccordion() {
    const [activeId, setActiveId] = useState<string | null>("inmobiliario");

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Áreas de Práctica</h2>

                <div className={styles.list}>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`${styles.item} ${activeId === service.id ? styles.active : ""}`}
                            onMouseEnter={() => setActiveId(service.id)}
                        >
                            <div className={styles.header}>
                                <span className={styles.number}>0{services.indexOf(service) + 1}</span>
                                <h3 className={styles.title}>{service.title}</h3>
                                <motion.div
                                    className={styles.icon}
                                    animate={{ rotate: activeId === service.id ? -45 : 0 }}
                                >
                                    <ArrowRight size={24} />
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {activeId === service.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={styles.contentWrapper}
                                    >
                                        <div className={styles.content}>
                                            <p>{service.description}</p>
                                            <Link href={service.link} className={styles.link}>
                                                Consultar Detalles
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
