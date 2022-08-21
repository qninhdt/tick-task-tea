import React from "react"

const AppContext = React.createContext()

export class AppProvider extends React.Component {

    state = {
        tasks:  [
            {
                id : 1,
                title: "Learning new programing language",
                color: "blue",
                time: "20:00",
                height: "100px",
                description: "",
            },
            {
                id : 2,
                title: "Learning new programing language",
                color: "gray",
                time: "20:00",
                height: "120px",
                project: "dizz",
                description: "",
            },
            {
                id : 3,
                title: "Learning new programing language",
                color: "red",
                time: "20:00",
                description: "",
                height: "50px",
            },
            {
                id: 4,
                title: "Learning new programing language",
                color: "nature",
                time: "20:00",
                description: "",
                height: "200px",
            },
            {
                id : 5,
                title: "ddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamds",
                color: "green",
                time: "20:00",
                description: "",
                height: "50px",
            },
            {
                id: 6,
                title: "ddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamds",
                color: "purple",
                time: "20:00",
                description: "",
                height: "110px",
            },
        ]
    }

    addTask = (task) => {
        task.id = this.state.tasks.length + 1

        this.setState({
            tasks: [...this.state.tasks, task]
        })
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
    }

    deleteTask = taskId => {
        let tasks = this.state.tasks
        let idx = tasks.findIndex(task=>task.id==taskId)
        
        tasks.splice(idx, 1)

        this.setState({ tasks })
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