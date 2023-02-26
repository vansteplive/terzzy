import { useHorizontalScroll } from "@/shared/hooks";
import Head from "next/head";
import styles from "./about-us.module.css";

export default function FaqsPage() {
    const scrollRef = useHorizontalScroll();

  return (
    <>
      <Head>
        <title>Faqs</title>
      </Head>
      <main ref={scrollRef} className={styles.content}>
      <div className={styles.aboutUs}>
            <p className={styles.information}>Our firm offers product design for different purposes, starting from the development phase, testing up to visualization for online stores, presentations, websites, brochures, and advertisements. Product sketches, CAD design for manufacturing, product realistic visualizations, 3D rendering services are not the complete list of our competencies.</p>
             <div className={styles.advance}>
                <div className={styles.years}>
                    <p>7</p> 
                    <p className={styles.info}>years of experience</p> 
                </div>  
                <div className={styles.number}>
                    <p>400+</p>
                    <p className={styles.info}>successful projects</p>
                </div>
                <div className={styles.team}>
                    <p>15</p>
                    <p className={styles.info}>team member</p>
                </div>
              </div> 
        </div> 
        <p className={styles.text}>ABOUT</p>  
        <div className={styles.secondString}>
            <p className={styles.text}>US</p>
        </div>
      </main>
    </>
  );
}