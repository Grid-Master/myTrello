import './App.css';
import Todolist from './Todolist';

function App() {

  const tasks1 = [
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

  return (
    <div className="App">
      <Todolist title='what to learn' tasks={tasks1} />
      {/* <Todolist title='movies' tasks={tasks2} /> */}  
    </div>
  );
}

export default App;
