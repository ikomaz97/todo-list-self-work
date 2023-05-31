import React from "react";
import './App.css'
import {TodoList} from './TodoList';
import {useState} from "react";

export type FilterValuesType = "Active" | "Completed" | "All"
function App () {
    let [tasks, setTasks] = useState( [
        {id: 1, title:"HTML&CSS", isDone:true},
        {id: 2, title:"JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GrafQL", isDone: false},
    ])

    function removeTask (id:number) {
        let filteredTasks =tasks.filter(task=>task.id!==id)
        setTasks(filteredTasks)
    }
    let [filter, setFiltr] = useState<FilterValuesType>( "All")
    let tasksForTodoLists = tasks
    if (filter == "Active") {
        tasksForTodoLists = tasks.filter(task => task.isDone === false)
    }
    if (filter == "Completed") {
        tasksForTodoLists = tasks.filter(task => task.isDone === true)
    }
    function changeFilter(value:FilterValuesType) {
        setFiltr(value)
    }
    return (
        <div className = "App">
            <div>
                <TodoList title="What to lern"
                          tasks={tasksForTodoLists}
                          removeTask={removeTask}
                          changeFilter={changeFilter}
                />
            </div>

        </div>
    )
}


export default App;