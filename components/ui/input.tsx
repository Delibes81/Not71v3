import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./input.module.css";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, id, ...props }, ref) => {
        return (
            <div className={styles.container}>
                {label && (
                    <label htmlFor={id} className={styles.label}>
                        {label}
                    </label>
                )}
                <input
                    id={id}
                    ref={ref}
                    className={clsx(styles.input, error && styles.errorInput, className)}
                    {...props}
                />
                {error && <span className={styles.error}>{error}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
