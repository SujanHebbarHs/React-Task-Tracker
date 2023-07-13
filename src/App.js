import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Trial from "./components/Trial";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask]=useState(false);
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doc appointment',
        day: 'Feb 5th at 2:30pm',
        remainder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 2:30pm',
        remainder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        remainder: false,
    }
  ]);
  
  const addTask = (task)=>{
    const id = Math.floor(Math.random()*1000) + 1
    const newTask = {id,...task}
    setTasks([...tasks, newTask]);

    // setTasks
  }

  const deleteTask = (id)=>{
    // setTasks(tasks.filter((task)=>{
    //     return (task.id!==id);
    // }))
    setTasks((p)=>{
      return p.filter((task)=>{
        return (task.id!==id);
      })
    })
  }

  const toggleRemainder = (id)=>{

  setTasks((p)=>{
    return p.map((task)=>{
      return (
        task.id === id ?{...task, remainder: !task.remainder}:task
      )
    })
  })  
}

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/>:('Not Task Added')}
    </div>
  );
}

export default App;
