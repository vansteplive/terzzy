import Link from "next/link";
import clsx from "clsx";

import { Button } from "@/components";
import styles from "./header.module.css";
import { clashDisplay } from "@/shared/constants";

export default function Header() {
  const clsName = clsx(styles.header, clashDisplay.className);

  return (
    <header className={clsName}>
      <Link className={styles.logo} href="/">
        Terzzy
      </Link>
      <div className={styles.rightBlock}>
        <p className={styles.quality}>guarantee quality</p>
        <Button>order now</Button>
      </div>
    </header>
  );
}
