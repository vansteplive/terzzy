import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import QrCodeSrc from '@/assets/images/qr-code.svg';
import styles from './qr-code.module.css'

export const QrCode: FC = () => {
    // TODO: добавить реальную ссылку
    return (
        <Link href="/" className={styles.linkContainer}>
            <Image src={QrCodeSrc} width={120} height={120} alt="qr-code" />
        </Link>
    );
};
