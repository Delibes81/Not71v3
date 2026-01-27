import styles from "./services.module.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { ServicesAccordion } from "@/components/services-accordion";

export default function ServicesPage() {
    return (
        <div className={styles.main}>
            <Header />

            {/* Page Hero */}
            <div className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src="/office-detail.png"
                        alt="Office Architecture"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.overlay}></div>
                </div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.title}>Nuestros Servicios</h1>
                    <p className={styles.subtitle}>Excelencia y rigor jurídico en cada trámite.</p>
                </div>
            </div>

            {/* Accordion Section - Reusing the component for consistency */}
            <div className={styles.content}>
                <ServicesAccordion />
            </div>

            <Footer />
        </div>
    );
}
