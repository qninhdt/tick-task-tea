import cn from "classname"
import Icon from "./Icon"
import styles from "@/styles/IconButton.module.scss"

export default function IconButton({
    svg,
    big,
    small, 
    rounded,
    className,
    color,
    ...props
}) {

    let _className = cn(
        styles['icon-button'],
        big && styles['icon-button-big'],
        small && styles['icon-button-small'],
        color && styles[`icon-button-${color}`],
        rounded && styles['icon-button-rounded'],
        className
    )

    return (
        <button className={_className} {...props}>
            { svg && <Icon svg={svg} big={big} small={small} color={color}/> }
            <span></span>
        </button>
    )
}