import { useState } from 'react'

import { AddTask } from './components/addTask'
import { Header } from './components/header'
import { ShowTask } from './components/showTask'

import './App.css'

function App() {
const [taskList, setTaskList] = useState([])
  return (
    <div className='container'>
    <Header/>
    <AddTask taskList={taskList} setTaskList={setTaskList}/>
    <ShowTask taskList={taskList} setTaskList={setTaskList}/>
    </div>
  )
}

export default App
