import cn from "classname"
import styles from "@/styles/TextArea.module.scss"
import { useEffect, useRef, useState } from "react";

import XmarkSVG from "@/assets/icons/xmark.svg"
import IconButton from "./IconButton";

export default function TextArea({
    value,
    onChange,
    fontSize = '14px',
    className,
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    placeholder,
    ...props
}) {

    let style = {
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
        width,
        height,
        fontSize
    }

    let [isFocused, setIsFocused] = useState(false);
    let inputEl = useRef(null);

    className = cn(
        styles['textarea'],
        isFocused && styles['textarea-focused'],
        className
    )

    const onFocus = () => setIsFocused(true)

    const onCancel = (e) => {
        setCurrentValue("", null)
    }

    const onUnFocus = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsFocused(false)
            inputEl.current.blur()
        }
    }

    // auto update height
    useEffect(() => {
        inputEl.current.style.height = "0px"
        inputEl.current.style.height = (inputEl.current.scrollHeight) + "px"
    }, [value])

    return (
        <div 
            className={className}
            onFocus={onFocus}
            onBlur={onUnFocus}
            {...props}>
            <textarea 
                style={style}
                ref={inputEl}
                spellCheck={false}
                value={value}
                onChange={e=>onChange(e.target.value)}
                placeholder={placeholder}
                className={styles['textarea-content']}>
            </textarea>
            <IconButton 
                className={styles['textarea-cancel-button']} 
                svg={XmarkSVG}
                small
                rounded
                onClick={onCancel}
            />
        </div>
    )
}