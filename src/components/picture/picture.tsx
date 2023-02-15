import Image, {ImageProps} from "next/image";
import styles from './picture.module.css';
import clsx from "clsx";

export type PictureProps = ImageProps;

export default function Picture({ className, ...props }: PictureProps) {
    return (
        <Image className={clsx(styles.picture, className)} {...props} />
    );
}
