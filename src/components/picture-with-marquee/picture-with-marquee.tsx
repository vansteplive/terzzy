import clsx from "clsx";
import { cloneElement, FC, isValidElement, ReactNode, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { Picture, PictureProps } from "../picture";
import styles from './picture-with-marquee.module.css';

type PictureWithMarqueeProps = PictureProps & {
    children: ReactNode;
    className?: string;
    marqueeClassName?: string;
};

export const PictureWithMarquee: FC<PictureWithMarqueeProps> = ({
    children,
    className,
    marqueeClassName,
    width,
    height,
    ...props
}) => {
    // TODO: Добавить бегущую строку
    return (
        <div className={clsx(styles.container, className)} style={{ width: width ?? 'fit-content', height }}>
            <Picture width={width} height={height} {...props} />
            <div className={clsx(styles.marquee, marqueeClassName)}>
                {children}
            </div>
            {/* <Marquee className={clsx(styles.marquee, marqueeClassName)}>
                {children}
            </Marquee> */}
        </div>
    );
};
