import React, {useState} from 'react';
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
}

const Todolist = (props:Props) => {
    const [taskTitle, setTaskTitle] = useState<string>('')

    return (
    <div>
        <h3>{props.title}</h3>
        <div>
            <input 
            value={taskTitle} 
            onChange={(e) => setTaskTitle(e.target.value)} 
            onKeyDown = {(e) => {
                if(e.key === 'Enter') {
                    props.addTask(taskTitle)
                    setTaskTitle('')
                }
            }} />
            <button onClick={() => {
                props.addTask(taskTitle)
                setTaskTitle('')
                }}>+</button>
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