import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./button.module.css";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", href, children, ...props }, ref) => {
        const rootClassName = clsx(
            styles.button,
            styles[variant],
            className
        );

        if (href) {
            return (
                <Link href={href} className={rootClassName}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={rootClassName} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
