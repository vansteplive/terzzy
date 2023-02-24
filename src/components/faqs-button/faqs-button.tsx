import { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from "react";
import clsx from "clsx";
import styles from "./faqs-button.module.css";

type FaqsButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function FaqsButton({
  className,
  ...proxyProps
}: FaqsButtonProps) {
  const clsName = useMemo(() => clsx(styles.btn, className), [className]);

  return <button className={clsName} {...proxyProps} />;
}
