import { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from "react";
import clsx from "clsx";
import styles from "./faqs-button.module.css";

type FaqsButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isActive: boolean,
};

export default function FaqsButton({
  className,
  isActive,
  ...proxyProps
}: FaqsButtonProps) {
  const clsName = useMemo(() => clsx(styles.btn, className, {[styles.active]: isActive }), [className, isActive]);

  return <button className={clsName} {...proxyProps} />;
}
