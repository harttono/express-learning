const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
let todos =[
    {
        id:1,
        title:'makan siang',
        isDone:true
    },
    {
        id:2,
        title:'makan malam',
        isDone:false
    }
]

const port = 5000;
app.get('/',(req,res) => {
    res.send({data:{todos}})
})

app.get('/todo/:id',(req,res) =>{
    const filtered = todos.filter(todo => todo.id == req.params.id);
    res.send(filtered[0]);
})

app.post('/todo',(req,res) =>{
    todos = [...todos,req.body];
    res.send(todos)
})

app.patch('/todos/:id',(req,res) =>{
    const id = req.params.id;
    const body = req.body;
    const updatedTodo = todos.map( todo => todo.id == id ? {
        ...todo,
        title:body.title,
        isDone:body.isDone
    } : todo)
    console.log('isi body',body)
    todos = updatedTodo;
    res.send({data:todos})
})

app.put('/todo-put/:id',(req,res) =>{
    const id = req.params.id;
    const body = req.body;
    const updatedTodo = todos.map( todo => todo.id == id ? body :todo);
    todos = updatedTodo;
    res.send({data:updatedTodo}) 
})

app.delete('/todos/:id',(req,res) =>{
    const id = req.params.id;
    console.log('isi id delete',id)
    todos = todos.filter( todo => todo.id !=id);
    res.send({data:todos})
})
app.listen(port,() => console.log(`port ${port} is listening.`))

