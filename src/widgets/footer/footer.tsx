import clsx from "clsx";
import {ABOUT_US_ROUTE, clashDisplay, FAQS_ROUTE, HOME_ROUTE} from "@/shared/constants";
import styles from './footer.module.css';
import Link from "next/link";
import {useRouter} from "next/router";

export default function Footer() {
    const { pathname } = useRouter();

    console.log(pathname);

    return (
        <div className={clsx(styles.container, clashDisplay.className)}>
            <ul className={styles.linkList}>
                <li>
                    <Link
                        href={ABOUT_US_ROUTE}
                        className={clsx({ [styles.activeLink]: pathname === ABOUT_US_ROUTE})}
                    >
                        about us
                    </Link>
                </li>
                <li>
                    <Link
                        href={FAQS_ROUTE}
                        className={clsx({ [styles.activeLink]: pathname === FAQS_ROUTE})}
                    >
                        faqs
                    </Link>
                </li>
                <li>
                    <Link
                        href={HOME_ROUTE}
                        className={clsx({ [styles.activeLink]: pathname === HOME_ROUTE})}
                    >
                        collection
                    </Link>
                </li>
            </ul>
        </div>
    );
};

