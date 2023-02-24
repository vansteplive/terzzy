import { useHorizontalScroll } from "@/shared/hooks";
import Head from "next/head";
import styles from "./faqs.module.css";
import Image from "next/image";
import munkey from "@/assets/images/monkey-nft.png";
import { FaqsButton } from "@/components";

export default function Faqs() {
  const scrollRef = useHorizontalScroll();

  return (
    <>
      <Head>
        <title>Faqs</title>
      </Head>
      <main ref={scrollRef} className={styles.content}>
        <Image
          priority
          className={styles.box}
          src={munkey}
          width={914}
          height={705}
          alt="abstract figure"
        />
        <div>
          <p className={styles.text}>SPECIALIST</p>
          <div className={styles.secondString}>
            <p className={styles.text}>MODE</p>
            <div className={styles.buttons}>
              <FaqsButton>01/Characters</FaqsButton>
              <FaqsButton>02/Products for Amazon</FaqsButton>
              <FaqsButton>03/Characters</FaqsButton>
              <div>
                <FaqsButton>04/IndustrialProductDesign</FaqsButton>
                <FaqsButton>05/Furniture</FaqsButton>
                <div>
                  <FaqsButton>06/NFT</FaqsButton>
                  <FaqsButton>07/Character</FaqsButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
