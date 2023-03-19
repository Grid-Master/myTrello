import React from 'react';
import { FilterValuesType } from './App';

export interface taskType {
    id: string
    title: string
    isDone: boolean
}

type Props = {
    title: string,
    tasks: Array<taskType>
    removeTask: (id: string) => void
    addTask: (taskTitle: string) => void
    changeFilter: (value: FilterValuesType) => void
    taskTitle: string
    setTaskTitle: React.Dispatch<React.SetStateAction<string>>
}

const Todolist = (props:Props) => {
    return (
    <div>
        <h3>{props.title}</h3>
        <div>
            <input value={props.taskTitle} onChange={(e) => props.setTaskTitle(e.target.value)} />
            <button onClick={props.addTask(props.taskTitle)}>+</button>
        </div>
        <ul>
            {
                props.tasks.map((task) => <li key={task.id}>
                    <input type='checkbox' checked={task.isDone} />
                    <span>{task.title}</span>
                    <button onClick={() => props.removeTask(task.id)}>X</button>
                </li> )
            }
        </ul>
        <div>
            <button onClick={() => props.changeFilter('all')}>All</button>
            <button onClick={() => props.changeFilter('active')} >Active</button>
            <button onClick={() => props.changeFilter('completed')}>Completed</button>
        </div>
    </div>
    );
};

export default Todolist;