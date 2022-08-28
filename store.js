import React from "react"

const AppContext = React.createContext()

export class AppProvider extends React.Component {

    state = {
        tasks:  [
            {
                id : 1,
                title: "Learning new programing language",
                color: "blue",
                height: "100px",
                description: "",
                time: new Date()
            },
            {
                id : 2,
                title: "Learning new programing language",
                color: "gray",
                height: "120px",
                project: "dizz",
                description: "",
                time: new Date()
            },
            {
                id : 3,
                title: "Learning new programing language",
                color: "red",
                description: "",
                height: "50px",
                time: new Date()
            },
            {
                id: 4,
                title: "Learning new programing language",
                color: "nature",
                description: "",
                height: "200px",
                time: new Date()
            },
            {
                id : 5,
                title: "ddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamds",
                color: "green",
                description: "",
                height: "50px",
                time: new Date()
            },
            {
                id: 6,
                title: "ddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamdsddasamds",
                color: "purple",
                description: "",
                height: "110px",
                time: new Date()
            },
        ]
    }

    addTask = (task) => {
        task.id = this.state.tasks.length + 1

        this.setState({
            tasks: [task, ...this.state.tasks]
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