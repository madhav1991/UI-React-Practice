import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=> {
    localStorage.setItem("dark-mode", darkMode)
    if(darkMode){
      document.body.classList.add('dark-mode');
    }
    else {
      document.body.classList.remove('dark-mode');
    }

  },[darkMode])

  useEffect(()=> {
    const defaultMode = localStorage.getItem("dark-mode") === true;
    setDarkMode(defaultMode);
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'} </h1>
        <button onClick={()=> setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      </header>
    </div>
  );
}

export default App;
