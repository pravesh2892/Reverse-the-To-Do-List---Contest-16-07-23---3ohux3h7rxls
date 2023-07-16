import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({id, createdAt}) {
  return (<tr>
    <td>
      <p>id</p>
    </td>
    <td>
      <input type="text" value ="Some text" />
    </td>
    <td>
      <p>createdAt</p>
    </td>
  </tr>)
}
const reverseOrder =()={
  setTodos((prevTodos)=>[..prevTodos].reverse());
};
function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);

  return (
    <div id="main">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <thead>
        <tr>
    <th>ID</th>
    <th>Input</th>
    <th>Created</th>
    </tr>
    </thead>
    <tbody>
    {todos.map((todo) =>(
      <ToDo key ={todo.id} id ={todo.id} createdAt={todo.createdAt} />
))}
        </tbody>
      </table>
    </div>
  )
}


export default App;
