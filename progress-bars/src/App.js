import {useState} from 'react';
import './App.css';
import ProgressBar from './Progressbar'

function App() {
  const [bars, setBars] = useState(0);
  return (
    <div>
      <button onClick={()=> setBars(bars+1)}>Add</button>
      {Array(bars).fill(null).map((_, index)=> (
        <ProgressBar key={index}/>
      ))}
    </div>
  );
}

export default App;
