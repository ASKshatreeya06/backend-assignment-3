const db_conn = require('../db/db');

require('../db/db');


// get data from database
const getAllTodo = async (req, res) => {
   db_conn.query(`select * from tasks;`, function (err, result, fields) {
        if (err) {
            console.log(err);
        }
        
        console.log(result)
        res.status(200).send(result);
        console.log(fields);
    });
  
}

const addTask = async (req, res) => {
    const { task } = req.body; // Assuming taskName is sent in the request body

    if (!task) {
        return res.status(400).json({ error: 'Task name is required' });
    }

    db_conn.query('INSERT INTO tasks (task) VALUES (?)', [task], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to add task' });
        }

        res.status(200).json({ message: 'Task added successfully', id: result.insertId });
    });

}

const deleteTask = async (req, res) => {
    const taskId = req.params.id; // Assuming taskId is passed as a URL parameter

    db_conn.query('DELETE FROM tasks WHERE id = ?', [taskId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to delete task' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    });

}

module.exports = {
    getAllTodo,
    addTask,
    deleteTask
}
