import React from 'react';

type Props = {
    title: string,
    tasks: {
        id: number
        title: string
        isDone: boolean
    }[]
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
            <li><input type='checkbox' checked={props.tasks[0].isDone} /><span>{props.tasks[0].title}</span></li>
            <li><input type='checkbox' checked={props.tasks[1].isDone} /><span>{props.tasks[1].title}</span></li>
            <li><input type='checkbox' checked={props.tasks[2].isDone} /><span>{props.tasks[2].title}</span></li>
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