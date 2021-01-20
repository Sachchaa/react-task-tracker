import React from 'react'

const tasks = [
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
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}

        </>
    )
}

export default Tasks
