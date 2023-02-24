import {Button, Picture, PictureWithMarquee, PictureWithSlider, QrCode} from "@/components";
import MonkeyNftSrc from "@/assets/images/monkey-nft.png";
import MiniLogoSrc from '@/assets/images/mini-logo.svg';
import StarSrc from '@/assets/images/star.svg';
import Star2Src from '@/assets/images/star2.svg';
import FurnitureSrc from '@/assets/images/furniture.png';
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
                    <div className={styles.additionalPicturesContainer}>
                        <div className={styles.additionalPictures}>
                            <Picture src={MonkeyNftSrc} alt="monkey" width={270} height={190} />
                            <Picture src={MonkeyNftSrc} alt="monkey" width={270} height={190} />
                            <Image className={styles.secondStarIcon} src={Star2Src} width={45} height={96} alt="star" />
                        </div>
                        <div className={styles.additionalPicturesDescriptionContainer}>
                            <p>
                                NFT literally means &quot;non-fungible tokens&quot;. This is a kind oftokens where
                                each instance is unique. We will help you realize your idea, image, character, art
                                form into a virtual object using the latest computer technologies.
                            </p>
                            <QrCode />
                        </div>
                    </div>
                </div>  
            </div>

            <div className={styles.bottomBlock}>
                <div className={styles.bottomBlockChildFirst}>
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
                <div className={styles.bottomBlockChildSecond}>
                    <Image className={styles.furnitureImg} src={FurnitureSrc} width={609} height={175} alt="furniture" />
                    <PictureWithMarquee
                        src={MonkeyNftSrc}
                        width={415}
                        height={546}
                        alt="test"
                        className={styles.marquee}
                    >
                            <p className={styles.marqueeText}>
                                terzzy
                            </p>
                            <p className={styles.marqueeText}>
                                terzzy
                            </p>
                            <p className={styles.marqueeText}>
                                terzzy
                            </p>
                            <p className={styles.marqueeText}>
                                terzzy
                            </p>
                        </PictureWithMarquee>
                    <div className={styles.furnitureDescription}>
                        <h3 className={styles.furniTitle}>Furniture</h3>
                        <p className={styles.descriptionText}>
                            The capabilities of 3D furniture modeling programs allow you to
                            compose and view objects in a three-dimensional form.
                        </p>
                        <Button className={styles.orderBtn}>
                            order now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
