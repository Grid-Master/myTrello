import React from 'react';

interface taskType {
    id: number
    title: string
    isDone: boolean
}

type Props = {
    title: string,
    tasks: Array<taskType>
    removeTask: (id: number) => void
}

const Todolist = (props:Props) => {
    return (
    <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks.map((task) => <li key={task.id}>
                    <input type='checkbox' checked={task.isDone} />
                    <span>{task.title}</span>
                    <button onClick={() => alert(task.title)}>X</button>
                </li> )
            }
        </ul>
        <div>
            <button>ALL</button>
            <button>ACTIVE</button>
            <button>COMPLETED</button>
        </div>
    </div>
    );
};

export default Todolist;