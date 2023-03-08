import Head from "next/head";
import Image from "next/image";
import AbstractFigureSrc from "@/assets/images/abstract-figure.png";
import StarSrc from "@/assets/images/star.svg";
import MonkeyNft from "@/assets/images/monkey-nft.png";
import styles from "./index.module.css";
import { MainBlock } from "@/widgets";
import clsx from "clsx";
import { useHorizontalScroll, useSmoothHorizontalScroll } from "@/shared/hooks";

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
        <Image
          priority
          src={AbstractFigureSrc}
          width={450}
          height={730}
          alt="abstract figure"
        />
        <Image
          className={styles.starIcon}
          src={StarSrc}
          width={30}
          height={30}
          alt="star icon"
        />
        <MainBlock />
        <section>
          <div className={styles.block}>
            <div className={styles.sections}>
              <h2 className={styles.title}>BRANDS</h2>
              <div className={styles.brandLogo}></div>
              <div className={styles.sectionOne}>
                <div className={styles.sectionOnePlusThree}>
                  <div className={styles.firstPhotos}>
                    <Image
                      className={styles.brandIcon}
                      src={MonkeyNft}
                      width={230}
                      height={215}
                      alt="brand icon"
                    />
                    <Image
                      className={styles.brandIcon}
                      src={MonkeyNft}
                      width={230}
                      height={215}
                      alt="brand icon"
                    />
                    <Image
                      className={styles.brandIcon}
                      src={MonkeyNft}
                      width={230}
                      height={215}
                      alt="brand icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionThree}>
              <div>
                <Image
                  className={styles.brandIcon}
                  src={MonkeyNft}
                  width={232}
                  height={324}
                  alt="brand icon"
                />
                <Image
                  className={styles.brandIcon}
                  src={MonkeyNft}
                  width={232}
                  height={324}
                  alt="brand icon"
                />
                <Image
                  className={styles.brandIcon}
                  src={MonkeyNft}
                  width={232}
                  height={324}
                  alt="brand icon"
                />
                <div>
                  <p className={styles.textCharacter}>
                    When you have an idea for a new animated character,
                    conveying all the needed details in a 2D drawing may be
                    challenging. 3D character modeling can help make your life a
                    lot easier and allow you to create your dream character.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.secondString}>
            <div className={styles.sectionTwo}>
              <h1 className={styles.mainText}>CLOTHING</h1>
              <p className={styles.textClothing}>
                With the help of 3D technology, clothes can be sold simply by
                showing them on the monitor of your computer, tablet or
                smartphone, even without prior tailoring and all this reduces
                the cost of fabric for sewing experimental samples by up to 60%.
              </p>
            </div>
            <div className={styles.secondPhotos}>
              <Image
                className={styles.brandIcon}
                src={MonkeyNft}
                width={230}
                height={215}
                alt="brand icon"
              />
              <Image
                className={styles.brandIcon}
                src={MonkeyNft}
                width={230}
                height={215}
                alt="brand icon"
              />
              <Image
                className={styles.brandIcon}
                src={MonkeyNft}
                width={230}
                height={215}
                alt="brand icon"
              />
            </div>
            <Image
              className={styles.starIcon}
              src={StarSrc}
              width={30}
              height={30}
              alt="star icon"
            />
          </div>
        </section>
      </main>
    </>
  );
}
