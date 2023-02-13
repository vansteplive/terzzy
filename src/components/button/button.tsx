import { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from "react";
import clsx from "clsx";
import styles from "./button.module.css";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ className, ...proxyProps }: ButtonProps) {
  const clsName = useMemo(() => clsx(styles.btn, className), [className]);

  return <button className={clsName} {...proxyProps} />;
}
