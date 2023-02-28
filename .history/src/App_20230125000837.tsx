import { useState } from 'react';
import './App.css';
import Todolist, { taskType } from './Todolist';

export type FilterValuesType = "all" | "completed" | "active"

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
  const [filter, setFilter] = useState<FilterValuesType>('active')

  const removeTask = (id: number) => {
    let filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  let tasksForTodoList = tasks
  if(filter === 'completed') {
    tasksForTodoList = tasks.filter(task => task.isDone)
  }
  if(filter === 'active') {
    tasksForTodoList = tasks.filter(task => !task.isDone)
  }

  return (
    <div className="App">
      <Todolist removeTask={removeTask} title='what to learn' tasks={tasksForTodoList} />
      {/* <Todolist title='movies' tasks={tasks2} /> */}  
    </div>
  );
}

export default App;
