import {Button, Picture, PictureWithSlider} from "@/components";
import MonkeyNftSrc from "@/assets/images/monkey-nft.png";
import MiniLogoSrc from '@/assets/images/mini-logo.svg';
import StarSrc from '@/assets/images/star.svg';
import styles from './main-block.module.css';
import clsx from "clsx";
import { clashDisplay } from "@/shared/constants";
import Image from "next/image";

export default function MainBlock() {
    return (
        <div className={clsx(clashDisplay.className, styles.container)}>
            <div className={styles.imageBlock}>
                <div className={styles.sliderContainer}>
                    <PictureWithSlider position="vertical">
                        <Picture src={MonkeyNftSrc} alt="monkey" width={530} height={575} />
                        <Picture src={MonkeyNftSrc} alt="monkey" width={530} height={575} />
                        <Picture src={MonkeyNftSrc} alt="monkey" width={530} height={575} />
                        <Picture src={MonkeyNftSrc} alt="monkey" width={530} height={575} />
                    </PictureWithSlider>
                </div>

                <div className={styles.blockWithPictures}>
                    <div className={styles.firstPicture}>
                        <Image quality={100} src={MiniLogoSrc} alt="Terzzy 3d studio" />
                        <Picture src={MonkeyNftSrc} alt="monkey" width={260} height={330} />
                        <p className={styles.nft}>nft</p>
                    </div>
                    <Picture className={styles.secondPicture} src={MonkeyNftSrc} alt="monkey" width={260} height={330} />
                </div>
            </div>

            <div className={styles.bottomBlock}>
                <Image className={styles.starIcon} src={StarSrc} width={50} height={50} alt="star" />
                <h2>professional</h2>
                <div className={styles.descriptionBlock}>
                    <Button className={styles.aboutUsBtn}>About us</Button>
                    <p className={styles.descriptionText}>
                        Our firm offers product design for different purposes, starting from the development phase,
                        testing up to visualization for online stores, presentations, websites, brochures, and advertisements.
                        Product sketches, CAD design for manufacturing, product realistic visualizations, 3D rendering
                        services are not the complete list of our competencies.
                    </p>
                </div>
            </div>
        </div>
    );
}
