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
  ]

  return (
    <div className="App">
      <Todolist title='what to learn' />
      <Todolist title='movies' />
      
    </div>
  );
}

export default App;
