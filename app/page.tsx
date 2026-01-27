import styles from "./page.module.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { EditorialSection } from "@/components/editorial-section";
import { ServicesAccordion } from "@/components/services-accordion";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.content}>
        <Hero />
        <EditorialSection />
        <ServicesAccordion />
      </div>

      <Footer />
    </div>
  );
}
