import React from 'react';

const TaskAssign = ({users,onAssignTask}) => {
    return (
        <div className='card'>
            <h1>Assign Task</h1>
            <select onChange={e => onAssignTask(e.target.value)}>
                <option value="">Select User</option>
                {users.map(user => (
                    <option key ={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
        </div>
    );
};

export default TaskAssign;