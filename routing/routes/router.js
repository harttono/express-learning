const express = require('express');
const router  = express.Router();

const {getTodos,detailTodo,saveTodo,updateTodo,deleteTodo} = require('../controller/todos');

router.get('/todos',getTodos);
router.get('/todos/:id',detailTodo);
router.post('/todo',saveTodo);
router.patch('/todos/:id',updateTodo);
router.delete('/todos/:id',deleteTodo);

module.exports = router;