import Head from "next/head";
import Image from "next/image";
import AbstractFigureSrc from '@/assets/images/abstract-figure.png';
import StarSrc from '@/assets/images/star.svg';
import styles from './index.module.css'
import {MainBlock} from "@/widgets";
import {useHorizontalScroll, useSmoothHorizontalScroll} from "@/shared/hooks";

export default function Home() {
  // const { scrollContainerRef, handleScroll } = useSmoothHorizontalScroll();
  const scrollRef = useHorizontalScroll();

  return (
    <>
      <Head>
        <title>Terzzy</title>
        <meta name="description" content="Terzzy studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={scrollRef} className={styles.main}>
          <Image priority src={AbstractFigureSrc} width={450} height={730} alt="abstract figure" />
          <Image className={styles.starIcon} src={StarSrc} width={30} height={30} alt="star icon" />
          <MainBlock />
      </main>
    </>
  );
}
