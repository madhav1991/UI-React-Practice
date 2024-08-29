import './App.css';
import ProgressBar from './ProgressBar';

export default function App() {
  return (
    <div>
      <ProgressBar completed={0}/>
      <ProgressBar completed={25}/>
      <ProgressBar completed={50}/>
      <ProgressBar completed={75}/>
      <ProgressBar completed={100}/>
    </div>
  );
}
