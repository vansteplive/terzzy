import Link, {LinkProps} from "next/link";
import {FC, ReactNode, useMemo} from "react";
import clsx from "clsx";
import {useRouter} from "next/router";

type NavLinkProps = LinkProps & {
    children: ReactNode;
    className?: string;
    activeClassname?: string;
};

export const NavLink: FC<NavLinkProps> = ({activeClassname, children, className, href, ...props }) => {
    const { pathname } = useRouter();
    console.log({ pathname, href, children, result: pathname === href });
    const clsName = useMemo(() => (
        clsx(className, { [activeClassname!]: pathname === href && activeClassname })
    ), [activeClassname, className, href, pathname])

    return (
        <Link className={clsName} href={href} {...props}>
            {children}
        </Link>
    );
}
