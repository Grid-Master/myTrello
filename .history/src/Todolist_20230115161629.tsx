import React from 'react';

const Todolist = () => {
    return (
        <div>
            <h3>what to learn</h3>
    <div>
      <input />
      <button>+</button>
    </div>
    <ul>
      <li><input type='checkbox' checked={true} /><span>CSS&HTML</span></li>
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