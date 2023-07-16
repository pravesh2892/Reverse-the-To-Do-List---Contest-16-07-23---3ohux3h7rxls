import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({id, createdAt}) {
  return (<tr>
    <td>
      <p>{id}</p>
    </td>
    <td>
      <input />
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  const handClick = () => {
    setTodos(prev => [...prev].reverse());
  }
  return (
    <div id="main">
      <button onClick={handClick}>Reverse</button>
      <table>
        <tbody>{
          todos.map(todo => (
            <ToDo key = {todo.id} id={todo.id} createdAt={todo.createdAt}/>
  ))
    }
        </tbody>
      </table>
    </div>
  )
}




export default App;
