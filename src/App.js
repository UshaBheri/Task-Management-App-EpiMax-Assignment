import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskAssign from './components/TaskAssign';
import TaskStatus from './components/TaskStatus';
import TaskSummary from './components/TaskSummary';
import './App.css';

const App = () => {
    const [tasks,setTasks] = useState([]);
    const [assignedTask,setAssignedTask] = useState(null);
    const[taskMetrics,setTaskMetrics] = useState({total:0,completes:0});

    //Function to add a task
    const handleAddTask = title => {
        const newTask = {id:tasks.length + 1,title,status:'pending'};
        setTasks([...tasks,newTask]);
        updateTaskMetrics();
    };

    const handleAssignTask = userId => {
        setAssignedTask(userId);
    };

    const handleUpdateStatus = (taskId,status) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? {...task,status} : task
        );
        setTasks(updatedTasks);
        updateTaskMetrics();
    };

    const updateTaskMetrics = () => {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.status === 'pending').length;
        setTaskMetrics({total:totalTasks,completed:completedTasks});
    };

    const Users = [
        {id:1, name:'Usha'},
        {id:2, name:'Laya'},
        {id:3,name:'Kranthi'}
    ];

    return(
        <div className='container'>
            <h1 className='heading'>Task Management App</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList tasks = {tasks} />
            <TaskAssign users={Users} onAssignTask={handleAssignTask} />
            {assignedTask && <TaskStatus task = {tasks[0]} onUpdateStatus={handleUpdateStatus}/>}
            <TaskSummary metrics={taskMetrics} />
        </div>
    );

};
export default App;