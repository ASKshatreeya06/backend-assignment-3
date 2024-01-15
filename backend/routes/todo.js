const express = require('express')
const {getAllTodo,addTask,deleteTask} = require('../controller/todo.controller')

const router = express.Router();
// GET all task
router.get('/',getAllTodo);

// POST task
router.post('/',addTask);

// DELETE TASK BY ID
router.delete('/:id',deleteTask);




module.exports = router;