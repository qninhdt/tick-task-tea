import styles from "@/styles/TaskDetail.module.scss"
import CheckBox from "./CheckBox"
import EditableText from "./EditableText"
import TextArea from "./TextArea"

import AlignLeftSVG from "@/assets/icons/align-left.svg"
import EditSVG from "@/assets/icons/pen-to-square.svg"
import CalendarSVG from "@/assets/icons/calendar-clock.svg"

import Icon from "./Icon"
import Button from "./Button"
import { withAppStore } from "store"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function TaskDetail({
    action,
    task,
    store,
    onChange,
    onCreate,
}) {
    const colors = [
        { name: "nature", value: "#1abc9c" },
        { name: "green" , value: "#2ecc71" },
        { name: "blue"  , value: "#3498db" },
        { name: "red"   , value: "#e74c3c" },
        { name: "yellow", value: "#f1c40f" },
        { name: "orange", value: "#e67e22" },
        { name: "gray"  , value: "#7f8c8d" },
        { name: "purple", value: "#9b59b6" },
    ]

    const setTitle       = title       => onChange({ ...task, title })
    const setDescription = description => onChange({ ...task, description })
    const setColor       = color       => onChange({ ...task, color })
    const setTime        = time        => onChange({ ...task, time })

    const cancelTask = () => {
        onChange(null)
    }

    const renderButtons = () => (
        <div className={styles['task-detail-buttons']}>
            <Button color="blue" rounded onClick={onCreate}>Add Task</Button>
            <Button outline rounded onClick={cancelTask}>Cancel</Button>
        </div>
    )

    return (
        <div className={styles['task-detail']}>
            <div className={styles['task-detail-head']}>
                <div className={styles['task-detail-checkbox']}>
                    {action == "update" 
                        ? <CheckBox color={task.color}/> 
                        : <Icon svg={EditSVG} color="gray" />}
                </div>
                <div className={styles['task-detail-title']}>
                    <small>{task.project||""}</small>
                    <EditableText 
                        color={task.color}
                        value={task.title} 
                        onChange={setTitle}
                        fontSize="15px"
                        placeholder="Task name"
                    />
                </div>
            </div>
            <div className={styles['task-detail-body']}>

                <div className={styles['task-detail-color-picker']}>
                    {colors.map(({ name, value }) => (
                        <span 
                            active={name==task.color ? "true" : "false"} 
                            style={{ backgroundColor: value }}
                            onClick={()=>setColor(name)}>
                        </span>
                    ))}
                </div>

                <div className={styles['task-detail-description-input']}>
                    <div className={styles['task-detail-description-icon']}>
                        <Icon svg={AlignLeftSVG} color="gray" small/>
                        <span role="line"></span>
                    </div>
                    <TextArea 
                        className={styles['task-detail-description']} 
                        minHeight="150px"
                        maxHeight="150px"
                        height="150px" 
                        width="240px" 
                        maxWidth="240px"
                        placeholder="Type your description here"
                        value={task.description}
                        onChange={setDescription}
                    />
                </div>  
                
                <div className={styles["task-detail-datepicker"]}>
                    
                    <div className={styles['task-detail-datepicker-icon']}>
                        <Icon svg={CalendarSVG} color="gray" />
                    </div>

                    <DatePicker
                        selected={task.time}
                        onChange={setTime}
                        timeInputLabel="Time:"
                        dateFormat="h:mm aa dd/MM/yyyy"
                        showTimeInput
                    />
                </div> 
                
                { action == 'create' && renderButtons() }
            </div>
        </div>
    )
}

export default withAppStore(TaskDetail)