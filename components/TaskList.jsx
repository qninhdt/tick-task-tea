import styles from "@/styles/TaskList.module.scss"
import { withAppStore } from "store"
import IconButton from "./IconButton"
import TaskListItem from "./TaskListItem"

import PlusSVG from "@/assets/icons/plus.svg"

function TaskList({ 
    store,
    onCreateTask,
    onChangeTask,
    onDeleteTask
}) {
    let { tasks } = store

    return (
        <div className={styles['task-list']}>
            <div className={styles['task-list-inner']}>
                <div className={styles['task-list-controls']}>
                    <div className={styles['task-list-controls-right']}>
                        <IconButton svg={PlusSVG} color="white" onClick={onCreateTask}/>
                        {/* <IconButton svg={PlusSVG} /> */}
                    </div>
                </div>
                <div className={styles['task-list-content']}>
                    {tasks.map(task => (
                        <TaskListItem 
                            onClick={()=>onChangeTask(task.id)}
                            onDelete={()=>onDeleteTask(task.id) }
                            {...task} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default withAppStore(TaskList)