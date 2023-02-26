import clsx from "clsx";
import {
    Children,
    cloneElement,
    ReactElement,
    useEffect,
    useRef,
    useState} from "react";
import type { PictureProps } from '../picture';
import styles from './picture-with-slider.module.css';

type PictureWithSliderProps = {
    position: 'vertical' | 'horizontal'
    children: ReactElement<PictureProps> | ReactElement<PictureProps>[];
    offset?: number;
    className?: string;
}

const OFFSET = 10;

export default function PictureWithSlider({ children, offset = OFFSET, className }: PictureWithSliderProps) {
    const [isOpenSlider, setIsOpenSlider] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const childLength = Array.isArray(children) ? children.length - 1 : 1;
        const child = Array.isArray(children) ? children[0] : children;
        const height = Number(child.props.height) + (offset * childLength);
        containerRef.current.style.height = `${height}px`;
    }, [children, offset]);

    return (
        <div className={clsx(styles.container, className)} ref={containerRef}>
            {Children.map(children, (child, index) => {
                const childLength = Children.count(children);
                const updatedWidth = Number(child.props.width) - (offset * 2 * index);
                return cloneElement(child, {
                    className: clsx(styles.picture, child.props.className),
                    style: {
                        left: (Number(child.props.width) - updatedWidth) / 2,
                        bottom: offset * index + 5,
                        zIndex: childLength - index,
                    },
                    width: updatedWidth,
                    onClick: () => setIsOpenSlider((prev) => !prev),
                })
            })}
        </div>
    )
}
