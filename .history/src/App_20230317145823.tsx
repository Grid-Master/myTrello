import { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import Todolist, { taskType } from './Todolist';

export type FilterValuesType = "all" | "completed" | "active"

const initTasks = [
  {
    id: v1(),
    title: 'css',
    isDone: true
  },
  {
    id: v1(),
    title: 'js',
    isDone: true
  },
  {
    id: v1(),
    title: 'react',
    isDone: false
  },
  {
    id: v1(),
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
  const [tasks, setTasks] = useState<Array<taskType>>(initTasks)
  const [filter, setFilter] = useState<FilterValuesType>('active')
  const [taskTitle, setTaskTitle] = useState<string>('')

  const removeTask = (id: string) => {
    let filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  const addTask = (taskTitle: string) => {
    if(taskTitle.trim() !== '') {
      let newTask = {id: v1(), title: taskTitle, isDone: false}
      setTasks([newTask, ...tasks])
      setTaskTitle('')
    }
  }

  const changeFilter = (value:FilterValuesType) => {
    setFilter(value)
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
      <Todolist 
        removeTask={removeTask}
        changeFilter={changeFilter} 
        addTask={addTask}
        title='what to learn' 
        tasks={tasksForTodoList}
        taskTitle ={taskTitle}
        setTaskTitle = {setTaskTitle}
      />
      {/* <Todolist title='movies' tasks={tasks2} /> */}  
    </div>
  );
}

export default App;
