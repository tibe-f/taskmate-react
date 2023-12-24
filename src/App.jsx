import { useEffect, useState } from 'react'

import { AddTask } from './components/addTask'
import { Header } from './components/header'
import { ShowTask } from './components/showTask'

import './App.css'

function App() {
const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || [])
const [task, setTask] = useState({})

useEffect(()=> {
  localStorage.setItem("taskList", JSON.stringify(taskList))
}, [taskList])

  return (
    <div className='container'>
    <Header/>
    <AddTask task={task} setTask={setTask} taskList={taskList} setTaskList={setTaskList}/>
    <ShowTask task={task} setTask={setTask} taskList={taskList} setTaskList={setTaskList}/>
    </div>
  )
}

export default App
