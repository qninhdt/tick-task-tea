import StatisticBox from "@/components/StatisticBox"
import TaskDetail from "@/components/TaskDetail"
import TaskList from "@/components/TaskList"
import TaskMenu from "@/components/TaskMenu"
import styles from "@/styles/TaskManager.module.scss"
import { useState } from "react"
import { withAppStore } from "store"

const DEFAULT_TASK = {
    title: "",
    description: "",
    time: new Date(),
    color: "gray",
    project: "",
}

function TaskManager({ store }) {

    let [action, setAction] = useState("create")
    let [currentTask, setCurrentTask] = useState(DEFAULT_TASK)

    const setCurrentTaskById = taskId => {
        setCurrentTask(store.tasks.find(task => task.id == taskId))
        setAction("update")
    }

    return (
        <div className={styles['task-manager']}>
            <div className={styles['task-container']}>
                <TaskMenu />
                <TaskList 
                    onCreateTask={()=>{
                        setAction("create")
                        setCurrentTask(DEFAULT_TASK)
                    }}
                    onChangeTask={taskId=>{
                        setCurrentTaskById(taskId)
                        setAction("update")
                    }}
                    onDeleteTask={taskId=>{
                        if (currentTask != null && currentTask.id == taskId) {
                            setCurrentTask(null)
                        }
                        store.deleteTask(taskId)
                    }}
                />
                {currentTask ? 
                    <TaskDetail 
                        action={action} 
                        task={currentTask} 
                        onChange={ (task) => {
                            setCurrentTask(task)
                            if (task && task.id) {
                                store.updateTask(task)
                            }
                        }}
                        onCreate={()=>{
                            store.addTask(currentTask)
                            setCurrentTask(null)
                        }}
                    /> :
                    <StatisticBox />
                }
                
            </div>

        </div>
    )
}

export default withAppStore(TaskManager)
