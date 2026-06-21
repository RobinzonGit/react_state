import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Form from './Form';
import Range from './Range';
import Posts from './Posts';

function App() {
  let posts =
  [
    
      {title: 'C++ Base', content: 'Основы программирования на языке C++'},
      {title: 'C++ OOP', content: 'Объектно-ориентированое программирования на языке C++'},
      {title: 'Windows vita C++', content: 'Разработка настольных приложений на языке C++ '},
    
  ]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Hello />
      <Form />
      <Range />
      <Posts posts={posts} />
      
    </div>
  );
}

export default App;
