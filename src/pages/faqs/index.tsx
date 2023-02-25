import { useHorizontalScroll } from "@/shared/hooks";
import Head from "next/head";
import styles from "./faqs.module.css";
import Image from "next/image";
import munkey from "@/assets/images/monkey-nft.png";
import { FaqsButton } from "@/components";
import {Faqs} from "@/widgets";
import {Message} from "@/components"
import { useState } from "react";
import {getMessage} from "@/shared/utils"


export default function FaqsPage() {
  const [selectedQuestion, setSelectedQuestion] = useState<number>()
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
              <FaqsButton isActive={selectedQuestion === 1} onClick={() => setSelectedQuestion(1)}>01/Characters</FaqsButton>
              <FaqsButton isActive={selectedQuestion === 2} onClick={() => setSelectedQuestion(2)}>02/Products for Amazon</FaqsButton>
              <FaqsButton isActive={selectedQuestion === 3} onClick={() => setSelectedQuestion(3)}>03/Characters</FaqsButton>
              <div>
                <FaqsButton isActive={selectedQuestion === 4} onClick={() => setSelectedQuestion(4)}>04/IndustrialProductDesign</FaqsButton>
                <FaqsButton isActive={selectedQuestion === 5} onClick={() => setSelectedQuestion(5)}>05/Furniture</FaqsButton>
                <div>
                  <FaqsButton isActive={selectedQuestion === 6} onClick={() => setSelectedQuestion(6)}>06/NFT</FaqsButton>
                  <FaqsButton isActive={selectedQuestion === 7} onClick={() => setSelectedQuestion(7)}>07/Character</FaqsButton>
                </div>
              </div>             
              <Faqs />
              {selectedQuestion !== undefined && <Message text={getMessage(selectedQuestion)} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
