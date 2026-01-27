import styles from "./nosotros.module.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function NosotrosPage() {
    return (
        <div className={styles.main}>
            <Header />

            <div className={`container ${styles.container}`}>
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/notary-portrait.png"
                            alt="Lic. Eduardo J. Muñoz Pinchetti y Equipo"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>

                <div className={styles.textColumn}>
                    <h1 className={styles.title}>Nuestra Notaría</h1>
                    <h2 className={styles.role}>Tradición, Ética y Excelencia</h2>
                    <div className={styles.divider}></div>

                    <div className={styles.bio}>
                        <p>
                            En Notaría 71, entendemos que la certeza jurídica es el cimiento de su patrimonio. Bajo la titularidad del <strong>Lic. Eduardo J. Muñoz Pinchetti</strong>, hemos conformado un equipo de abogados de élite, comprometidos con la excelencia y la discreción.
                        </p>
                        <p>
                            Nuestro cuerpo jurídico combina la experiencia de décadas con una visión moderna del derecho notarial. Cada miembro de nuestro equipo está altamente especializado en áreas clave: corporativo, inmobiliario y sucesiones, garantizando una atención integral y personalizada.
                        </p>
                    </div>

                    <div className={styles.credentials}>
                        <h3>Nuestro Compromiso</h3>
                        <ul>
                            <li>Atención personalizada por abogados senior.</li>
                            <li>Rigor técnico en cada instrumento notarial.</li>
                            <li>Eficiencia y transparencia en la gestión.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
