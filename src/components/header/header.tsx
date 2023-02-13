import Link from "next/link";
import { useMemo } from "react";
import clsx from "clsx";

import { Button } from "../button";
import styles from "./header.module.css";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  const clsName = useMemo(() => clsx(styles.header, className), [className]);

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
