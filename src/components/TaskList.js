import React from 'react';

const TaskList = ({tasks}) => {
    return (
        <div className='card'>
            <h1>Task List</h1>
            <div className='unordered-list'>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;