import cn from "classname"
import styles from "@/styles/EditableText.module.scss"
import { useEffect, useRef, useState } from "react"
import IconButton from "./IconButton";

import XmarkSVG from "@/assets/icons/xmark.svg"

export default function EditableText({
    value,
    onChange,
    fontSize = "14px",
    placeholder = "",
    className,
    color,
    ...props
}) {
    let [isFocused, setIsFocused] = useState(false);
    let inputEl = useRef(null);

    className = cn(
        styles['editable-text'],
        isFocused && styles['editable-text-focused'],
        color && styles[`editable-text-${color}`],
        className
    )

    const onFocus = () => setIsFocused(true)

    const onEnter = (e) => {
        if (e.code == 'Enter') {
            setIsFocused(false)
            inputEl.current.blur()
        }
    }

    const onCancel = (e) => {
        onChange("")
    }

    const onUnFocus = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsFocused(false)
            inputEl.current.blur()
        }
    }
    

    return (    
        <div 
            className={className}
            onFocus={onFocus}
            onKeyDown={onEnter}
            onBlur={onUnFocus}
            {...props}
        >
            <input 
                type="text"
                spellCheck={false}
                value={value}
                style={{ fontSize: fontSize }}
                ref={inputEl}
                placeholder={placeholder}
                onChange={e=>onChange(e.target.value)}
                className={styles['editable-text-content']}
            />
            <IconButton 
                className={styles['editable-text-cancel-button']} 
                svg={XmarkSVG}
                small
                rounded
                onClick={onCancel}
            />
        </div>
    )
}