import { useState } from 'react'
import './index.css'
import ListOfUsers from './components/ListOfUsers'
import CreateNewUser from './components/CreateNewUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-red-500 text-blue-600'>Usuarios</h1>
    <p className='text-2xl'>hola desde Tailwindcss</p>
      <ListOfUsers/>     
      <CreateNewUser/>3 
    </>
  )
}

export default App
