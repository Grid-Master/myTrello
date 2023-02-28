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
            <li><input type='checkbox' checked={true} /><span>tasks</span></li>
            <li><input type='checkbox' checked={true} /><span>JS</span></li>
            <li><input type='checkbox' checked={false} /><span>REACT</span></li>
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