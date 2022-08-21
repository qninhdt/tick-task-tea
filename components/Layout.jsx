import styles from "@/styles/Layout.module.scss"
import cn from "classname"
import Logo from "./Logo"

export default function Layout({ children, ...props }) {

    return (
        <div className={styles.layout}>
            <Logo/>
            {children}
        </div>
    )
}