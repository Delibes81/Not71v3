import styles from "./contact.module.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className={styles.main}>
            <Header />

            <div className={`container ${styles.container}`}>

                <div className={styles.infoColumn}>
                    <h1 className={styles.heading}>Contacto</h1>
                    <p className={styles.intro}>
                        Estamos listos para asistirle. Agende una cita o visítenos en nuestras oficinas.
                    </p>

                    <div className={styles.details}>
                        <div className={styles.item}>
                            <MapPin className={styles.icon} />
                            <div>
                                <h3>Dirección</h3>
                                <p>Alejandro Dumas 134, Polanco, Polanco III Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <Phone className={styles.icon} />
                            <div>
                                <h3>Teléfono</h3>
                                <p>+52 (55) 1234 5678</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <Mail className={styles.icon} />
                            <div>
                                <h3>Email</h3>
                                <p>contacto@notaria71.mx</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Glass Form */}
                <div className={styles.formColumn}>
                    <form className={styles.form}>
                        <h2 className={styles.formTitle}>Envíenos un mensaje</h2>

                        <div className={styles.group}>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" placeholder="Su nombre completo" />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id="email" placeholder="nombre@empresa.com" />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" rows={4} placeholder="¿Cómo podemos ayudarle?"></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Enviar Mensaje</button>
                    </form>
                </div>

            </div>

            <Footer />
        </div>
    );
}
