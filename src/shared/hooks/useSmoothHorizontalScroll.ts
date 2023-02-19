import { useEffect, useRef, useState } from "react";

export const useSmoothHorizontalScroll = () => {
    const scrollContainerRef = useRef<HTMLElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    useEffect(() => {
        if (!scrollContainerRef.current) return;
        setIsAtEnd(scrollContainerRef.current.scrollWidth === scrollContainerRef.current.offsetWidth)
    }, [scrollContainerRef])

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        console.log('handleScroll', {
            scrollLeft: scrollContainerRef.current.scrollLeft,
            scrollWidth: scrollContainerRef.current.scrollWidth,
            offsetWidth: scrollContainerRef.current.offsetWidth,
        });

        setIsAtStart(scrollContainerRef.current.scrollLeft === 0);
        setIsAtEnd(
            Math.floor(
                scrollContainerRef.current?.scrollWidth -
                scrollContainerRef.current?.scrollLeft
            ) <= scrollContainerRef.current?.offsetWidth,
        )
    };

    const scrollTo = (shift: number) => {
        scrollContainerRef.current?.scrollTo({
            left: scrollContainerRef.current.scrollLeft + shift,
            behavior: 'smooth',
        })
    }

    return {
        scrollContainerRef,
        isAtStart,
        isAtEnd,
        handleScroll,
        scrollTo,
    }
};
