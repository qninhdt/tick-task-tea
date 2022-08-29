import React from "react"

const AppContext = React.createContext()

export class AppProvider extends React.Component {

    state = {
        tasks:  []
    }

    componentDidMount() {
        let tasks_str = localStorage.getItem("tasks");

        if (tasks_str) {
            let tasks = JSON.parse(tasks_str)

            tasks = tasks.map(({ time, ...task })=>({time: new Date(time), ...task}))

            this.setState({
                tasks: tasks
            })
        }
    }

    saveToStorage(tasks) {
        tasks = tasks.map(({ time, ...task })=>({time:time.getTime(), ...task}))
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    addTask = (task) => {
        task.id = this.state.tasks.length + 1

        this.setState({
            tasks: [task, ...this.state.tasks]
        })

        this.saveToStorage([task, ...this.state.tasks])
    } 

    updateTask = (task) => {
        let tasks = [...this.state.tasks]
        let idx = tasks.findIndex(({id})=>id==task.id)

        tasks[idx] = {
            project: task.project,
            id: task.id,
            title: task.title,
            description: task.description,
            time: task.time,
            color: task.color
        }

        this.setState({ tasks })
        this.saveToStorage(tasks)
    }

    deleteTask = taskId => {
        let tasks = this.state.tasks
        let idx = tasks.findIndex(task=>task.id==taskId)
        
        tasks.splice(idx, 1)

        this.setState({ tasks })
        this.saveToStorage(this.state.task)
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    ...this.state,
                    addTask: this.addTask,
                    updateTask: this.updateTask,
                    deleteTask: this.deleteTask,
                }}
            >
                { this.props.children }
            </AppContext.Provider>
        )
    }
}

export const withAppStore = Component => props => (
    <AppContext.Consumer>
        {store => {
            return <Component {...props} store={store} />;
        }}
    </AppContext.Consumer>
)