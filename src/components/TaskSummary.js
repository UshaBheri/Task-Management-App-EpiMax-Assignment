import React from 'react';

const TaskSummary = ({metrics}) => {
    return(
        <div className='card'>
            <h1>Task Summary</h1>
            <p>Total Tasks:{metrics.total}</p>
            <p>Completed Tasks:{metrics.completed}</p>
        </div>
    );
};

export default TaskSummary;