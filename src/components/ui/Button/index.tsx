import type { ButtonHTMLAttributes } from "react";
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secundary" | "danger";
    fullWidth?: boolean;
}

export function Button({ children, variant = "primary", fullWidth, className, ...props }: ButtonProps) {
    return (<button className={`
                        ${styles.button} 
                        ${styles[variant]}
                        ${fullWidth ? styles.fullWidth : ""}
                        ${className ?? ""}`}{...props}>{children}
            </button>
    );
}