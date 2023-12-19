import './App.css'
import { AddTask } from './components/addTask'
import { Header } from './components/header'
import { ShowTask } from './components/showTask'

function App() {

  return (
    <div className='container'>
    <Header/>
    <AddTask />
    <ShowTask />
    </div>
  )
}

export default App
