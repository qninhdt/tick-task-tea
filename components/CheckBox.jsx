import cn from "classname"
import styles from "@/styles/CheckBox.module.scss"
import Icon from "./Icon"

import CheckSVG from "@/assets/icons/check.svg"

export default function CheckBox({
    value,
    color,
    big, 
    small,
    rounded,
    disabled,
    onChange,
    className,
    ...props
}) {

    let _className = cn(
        styles['checkbox'],
        color && styles[`checkbox-${color}`],
        big   && styles['checkbox-big'],
        small && styles['checkbox-small'],
        rounded && styles['checkbox-rounded'],
        value && styles['checkbox-checked'], 
        className
    )

    const toggle = () => {
        value = !value
        onChange(value)  
    }

    return (
        <button
            onClick={toggle}
            className={_className}
            role="checkbox"
            {...props}>
            <Icon svg={CheckSVG} small className={styles['checkbox-icon']}/> 
        </button>
    )
}