import {useState,useEffect} from 'react';
import users from './data/users.json';


export default function DataTable() {
    const tableHeaderData = [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
        { label: 'Occupation', key: 'occupation' },
      ]

      const [currentPage, setCurrentPage] = useState(1);
      const [filteredData, setFilteredData] = useState(users);
      const [resultsPerPage, setResultsPerPage] = useState(5);
      const [totalPages, setTotalPages] = useState(Math.ceil(users.length/resultsPerPage));

      useEffect(()=> {
        let newData=[];  
        newData = users.slice((currentPage-1) * resultsPerPage,(currentPage-1) * resultsPerPage + resultsPerPage);
        setFilteredData(newData);
      },[resultsPerPage,currentPage])

      const handleDropdownClick = (e) => {
        const input = e.target.value;
        setResultsPerPage(Number(input));
        setTotalPages(Math.ceil(users.length/input));
        setCurrentPage(1);
      }
    return (
        <div>
            <h1>Data Table</h1>
            <table>
                <thead>
                    <tr>
                        {tableHeaderData.map((header)=> <th key={header.key}>{header.label}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((user)=> 
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.occupation}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            <select onChange={(e)=> handleDropdownClick(e)}>
                <option value={5}>Show 5</option>
                <option value={10}>Show 10</option>
                <option value={15}>Show 15</option>
            </select>
            <button disabled={currentPage === 1} onClick={()=> setCurrentPage(currentPage-1)}>Previous </button>
                Page {currentPage} of {totalPages}
            <button disabled={totalPages === currentPage} onClick={()=> setCurrentPage(currentPage+1)}>Next</button>
        </div>
    );
}