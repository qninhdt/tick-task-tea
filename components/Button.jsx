import cn from "classname"
import Link from "@/components/Link";

import styles from "@/styles/Button.module.scss"

export default function Button({
    color,
    disabled,
    rounded,
    children,
    outline,
    light,
    className,
    ...props
}) {
    let ButtonElement;
    if (props.href) {
        if (props.href.startsWith('/')) {
            // next.js link
            ButtonElement = Link
        } else {
            // normal link
            ButtonElement = 'a'
        } 
    } else {
        // normal button
        ButtonElement = 'button'
    }

    let _className = cn(
        styles.btn,
        color   && styles[`btn-${color}`],
        rounded && styles['btn-rounded'], 
        outline && styles['btn-outline'],
        light   && styles['btn-light'],
        className
    )

    return (
        <ButtonElement
            className = {_className}
            disabled  = {disabled}
            role="button"
            {...props}
        >
            {children}
        </ButtonElement>
    )
}