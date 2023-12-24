import React from 'react'

export const AddTask = ({taskList, setTaskList,task, setTask}) => {
  const handleSubmit= (e) =>{
    e.preventDefault()

    if (task.id){
      const date= new Date()
      const updatedTaskList = taskList.map( todo => (
        todo.id === task.id ? {id : task.id, name: e.target.textField.value, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} : todo
      ))   

      setTaskList(updatedTaskList)
      setTask({})

    }else{
    const date= new Date()
    const data= {
      id: date.getTime(),
      name: e.target.textField.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }

    setTaskList([...taskList, data])

    setTask({})
  
}
}
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name='textField' value={task.name || ''} autoComplete="off" placeholder=" add task" maxLength={25} onChange={(e) => setTask({...task, name : e.target.value})} required/>
        <button type="submit">{task.id ? 'update' : 'add'}</button>
      </form>

    </section>
  )
}
