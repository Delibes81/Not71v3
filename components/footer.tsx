import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/logo.png"
                            alt="Notaría 71 CDMX"
                            width={240}
                            height={75}
                            className={styles.logo}
                        />
                    </div>
                    <p className={styles.text}>
                        Brindando seguridad jurídica y confianza en cada trámite.
                        Lic. Eduardo J. Muñoz Pinchetti.
                    </p>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.subHeading}>Enlaces Rápidos</h4>
                    <nav className={styles.footerNav}>
                        <Link href="/" className={styles.link}>Inicio</Link>
                        <Link href="/services" className={styles.link}>Servicios</Link>
                        <Link href="/nosotros" className={styles.link}>Nosotros</Link>
                        <Link href="/recursos" className={styles.link}>Recursos</Link>
                        <Link href="/contact" className={styles.link}>Contacto</Link>
                    </nav>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.subHeading}>Contacto</h4>
                    <div className={styles.contactItem}>
                        <MapPin size={18} className={styles.icon} />
                        <span>Alejandro Dumas 134, Polanco, Polanco III Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Phone size={18} className={styles.icon} />
                        <span>(55) 1234-5678</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Mail size={18} className={styles.icon} />
                        <span>contacto@notaria71.mx</span>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Notaría 71 CDMX. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
