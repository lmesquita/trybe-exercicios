import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromisses = ['exercise', 'meditation', 'eat healthy', 'study', 'hobby'];

const createList = (compromisses) => compromisses.map((item) => Task(item))

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      
      {createList(compromisses)}
    </div>
  );
}

export default App;
