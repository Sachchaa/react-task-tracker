import Layout from './components/layout'
import Tasks from './components/tasks'
import { useState } from 'react'

function App() {

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

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <Layout>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : ('No Tasks to show')}
    </Layout>
  )
}

export default App;
