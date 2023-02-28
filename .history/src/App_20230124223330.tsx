import { useState } from 'react';
import './App.css';
import Todolist, { taskType } from './Todolist';

const initTasks = [
  {
    id: 1,
    title: 'css',
    isDone: true
  },
  {
    id: 2,
    title: 'js',
    isDone: true
  },
  {
    id: 3,
    title: 'react',
    isDone: false
  },
  {
    id: 4,
    title: 'angular',
    isDone: false
  },
]
 // const tasks2 = [
  //   {
  //     id: 1,
  //     title: 'avengers',
  //     isDone: true
  //   },
  //   {
  //     id: 2,
  //     title: 'terminator',
  //     isDone: false
  //   },
  //   {
  //     id: 3,
  //     title: 'prject x',
  //     isDone: false
  //   },
  // ]

function App() {
  const [tasks, setTasks] = useState<taskType[]>(initTasks)


  const removeTask = (id: number) => {
    let filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <Todolist removeTask={removeTask} title='what to learn' tasks={tasks} />
      {/* <Todolist title='movies' tasks={tasks2} /> */}  
    </div>
  );
}

export default App;
