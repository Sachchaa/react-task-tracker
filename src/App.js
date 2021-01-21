import Tasks from './components/tasks'
import { useState } from 'react'
import AddTask from './components/addTask'
import Header from './components/header'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Hair cut appointment',
      day: '31 January at 17:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Insurance appointment',
      day: '22 January at 11:00',
      reminder: true,
    },
    {
      id: 3,
      text: 'Bank appointment',
      day: '28 January at 13:30',
      reminder: false,
    },
    {
      id: 4,
      text: 'University appointment',
      day: '25 January at 12:30',
      reminder: true,
    }
  ])

  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      { showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : ('No Tasks to show')
      }
    </div>
  )
}

export default App;
