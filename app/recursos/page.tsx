import styles from "./resources.module.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ResourcesPage() {
    return (
        <div className={styles.main}>
            <Header />

            <div className={`container ${styles.container}`}>
                <h1 className={styles.heading}>Trámites y Formularios</h1>
                <p className={styles.subtitle}>Solicite sus servicios notariales descargando los siguientes formularios o llenándolos en línea.</p>

                <div className={styles.grid}>
                    {[
                        { title: "Constitución de Empresas", desc: "Formulario para la creación de nuevas sociedades mercantiles y civiles." },
                        { title: "Testamentos", desc: "Solicitud de trámite testamentario y designación de herederos." },
                        { title: "Compraventa Inmobiliaria", desc: "Requisitos y formulario inicial para operaciones de compraventa." },
                        { title: "Poderes Notariales", desc: "Solicitud para el otorgamiento de poderes generales y especiales." },
                        { title: "Ratificación de Firmas", desc: "Formato para la ratificación de documentos privados." },
                        { title: "Cotejo de Documentos", desc: "Solicitud para la certificación de copias de documentos originales." }
                    ].map((item, i) => (
                        <div key={i} className={styles.card}>
                            <h2 className={styles.cardTitle}>{item.title}</h2>
                            <p className={styles.excerpt}>
                                {item.desc}
                            </p>
                            <a href="#" className={styles.link}>Llenar Formulario</a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
