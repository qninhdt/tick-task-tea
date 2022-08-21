import styles from "@/styles/Icon.module.scss"
import cn from "classname"

export default function Icon({ 
    svg, 
    big, 
    small, 
    color, 
    className, 
    ...props 
}) {
    let _className = cn(
        styles['icon'],
        big && styles['icon-big'],
        small && styles['icon-small'],
        color && styles[`icon-${color}`],
        className
    )

    let Svg = svg

    return (
        <span className={_className}><Svg/></span>
    )
}