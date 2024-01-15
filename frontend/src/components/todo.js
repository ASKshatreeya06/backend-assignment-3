import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
const Todo = () => {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const getTodo = async () => {
        try {
            const get = await axios.get("http://localhost:8000/");
            setTasks(get.data); //update task state with fetch data
            console.log(get.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getTodo() // fetch data when component is mount
    });

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/${id}`);
        } catch (error) {
            console.log(error.message)
        }

    }
    const addNewTask = async (e) => {
        e.preventDefault();
        try {
            const body = { task };
            await axios.post("http://localhost:8000/", body);
            getTodo();
            setTask('');
            window.location = '/';

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='container'>
            <h1>Todo</h1>
            <form onSubmit={addNewTask}>
                <input type='text' placeholder='Add task' value={task} onChange={e => setTask(e.target.value)} />
                <input type='submit' value="add task" />
            </form>
            <ul>
                <b>Task List Here</b>
                {
                    tasks.map((task, index) =>(
                        <li key={index}>
                            <b> {task.id}</b>  {task.task}
                            <span onClick={() => deleteTask(task.id)}>Delete</span></li>
                    ) )
                }
            </ul>
        </div>
    )
}

export default Todo
