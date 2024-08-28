import { useState } from 'react';
import './App.css';


function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [showTable, setShowTable] = useState(false);

  const generateTable = ()=> {
    return showTable && (
      <table>
        <tbody>
          {Array.from({length: rows}).map((_,row)=> (
             <tr key={row}>
              {Array.from({length: columns}).map((_,column)=> (
                 <td key={column}>
                    {column %2===0 ?
                      (column*rows) + (row+1)
                    : (rows*(column+1) - (row))} 
                 </td>
              ))}            
           </tr>
          ))}
         
        </tbody>
      </table>
    )
  };
  

  const onSubmit = (e)=> {
    e.preventDefault();
    setShowTable(true);
  };
  return (
    <div className="App">
     <h2>Generate Table</h2>
     <form>
        <div>
            <label>Rows</label>
            <input value={rows} onChange={((e)=> setRows(e.target.value))} type="number"/>
        </div>
        <div>
            <label>Columns</label>
            <input value = {columns} onChange={((e)=> setColumns(e.target.value))} type="number"/>
        </div>
        <input type="submit" onClick={(e)=> onSubmit(e)}/>
      </form>
      {generateTable()}
    </div>
  );
}

export default App;
