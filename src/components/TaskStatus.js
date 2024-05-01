import React from 'react';

const TaskStatus = ({task,onUpdateStatus}) => {
    return(
        <div className='card'>
            <h1>Task Status</h1>
            <button onClick ={() => onUpdateStatus(task.id,'start')}>Start Task</button>
            <button onClick ={() => onUpdateStatus(task.id,'Pending')}>Pending Task</button>
            <button onClick ={() => onUpdateStatus(task.id,'Completed')}>Completed Task</button>
        </div>
    );
};
export default TaskStatus