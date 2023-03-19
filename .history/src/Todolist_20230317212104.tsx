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

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setTaskTitle(e.target.value)
    }

    const onKeyPressHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            props.addTask(taskTitle)
            setTaskTitle('')
        }
    }

    const onAddTask = () => {
        props.addTask(taskTitle)
        setTaskTitle('')
    }

    const onRemoveHandler = (id: string) => {
     props.removeTask(id)
    }

    const allClickHandler = () => props.changeFilter('all')
    const activeClickHandler = () => props.changeFilter('active')
    const completedClickHandler = () => props.changeFilter('completed')

    return (
    <div>
        <h3>{props.title}</h3>
        <div>
            <input 
            value={taskTitle} 
            onChange={onChangeHandler} 
            onKeyDown = {onKeyPressHandler} />
            <button onClick={onAddTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map((task) => <li key={task.id}>
                    <input type='checkbox' checked={task.isDone} />
                    <span>{task.title}</span>
                    <button onClick={() => onRemoveHandler(task.id)}>X</button>
                </li> )
            }
        </ul>
        <div>
            <button onClick={allClickHandler}>All</button>
            <button onClick={activeClickHandler} >Active</button>
            <button onClick={completedClickHandler}>Completed</button>
        </div>
    </div>
    );
};

export default Todolist;