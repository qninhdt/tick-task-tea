import cn from "classname"
import styles from "@/styles/Logo.module.scss"

export default function Logo() {

    return (
        <div className={styles.logo}>
            <span>TICK</span>
            <span>TASK</span>
            <span>TEA</span>
        </div>
    )
}