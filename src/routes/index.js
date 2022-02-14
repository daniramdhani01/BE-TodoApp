const express = require('express');

const router = express.Router();

const {
    showTodos,
    showTodo,
    addTodo,
    deleteTodo,
    edit,
    complete,
    inComplete
} = require('../controllers/todo')

router.get('/todos', showTodos)
router.get('/todo/:id', showTodo)
router.post('/todo', addTodo)
router.post('/todo/:id', deleteTodo)
router.patch('/todo/:id', edit)
router.patch('/todo-complete/:id', complete)
router.patch('/todo-incomplete/:id', inComplete)

module.exports = router