import clsx from "clsx";
import {ABOUT_US_ROUTE, clashDisplay, FAQS_ROUTE, HOME_ROUTE} from "@/shared/constants";
import styles from './footer.module.css';
import {NavLink} from "@/components";

export default function Footer() {
    return (
        <div className={clsx(styles.container, clashDisplay.className)}>
            <ul className={styles.linkList}>
                <li>
                    <NavLink href={ABOUT_US_ROUTE} activeClassname={styles.activeLink}>
                        about us
                    </NavLink>
                </li>
                <li>
                    <NavLink href={FAQS_ROUTE} activeClassname={styles.activeLink}>
                        faqs
                    </NavLink>
                </li>
                <li>
                    <NavLink href={HOME_ROUTE} activeClassname={styles.activeLink}>
                        collection
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

