import cn from "classname"
import styles from "@/styles/TaskListItem.module.scss"
import Icon from "./Icon"
import IconButton from "./IconButton"
import CheckBox from "./CheckBox"

import DragSVG from "@/assets/icons/grip-dots-vertical.svg"
import TimerSVG from "@/assets/icons/timer.svg"
import XmarkSVG from "@/assets/icons/xmark.svg"
import SkipSVG from "@/assets/icons/arrow-right-long-to-line.svg"

export default function TaskListItem({
    project, 
    title,
    time,
    color,
    onDelete,
    ...props
}) {

    let className = cn(
        styles['task-list-item'],
        styles[`task-list-item-${color}`]
    )

    const deleteTask = e => {
        e.stopPropagation()
        onDelete()
    }

    return (
        <div className={className} {...props}>
            <div className={styles['task-list-item-drag']}>
                <IconButton svg={DragSVG}/>
            </div>
            <div className={styles['task-list-item-checkbox']}>
                <CheckBox 
                    color={color}
                    onChange={()=>{}}
                />
            </div>
            <div className={styles['task-list-item-content']}>
                <div className={styles['task-list-item-project']}>{project||""}</div>
                <div className={styles['task-list-item-title']}>{title}</div>
                <div className={styles['task-list-item-info']}>
                    <div className={styles['task-list-item-time']}>
                        <Icon svg={TimerSVG} small/>
                        <small>{time}</small>
                    </div>
                </div>
            </div>
            <div className={styles['task-list-item-controls']}>
                <IconButton svg={SkipSVG} small color="orange" />
                <IconButton svg={XmarkSVG} small color="red" onClick={deleteTask}/>
            </div>
        </div>
    )
}