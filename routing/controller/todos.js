let todos =[
    {
        id:1,
        title:'learning express',
        isDone:true
    },
    {
        id:2,
        title:'hang out with friends',
        isDone:false
    }
]

exports.getTodos = (req,res) =>{
    res.send({data:{todos}})
}

exports.detailTodo = (req,res) =>{
    const filtered = todos.filter(todo => todo.id == req.params.id);
    res.send(filtered[0]);
}

exports.saveTodo = (req,res) =>{
    todos = [...todos,req.body];
    res.send(todos)
}

exports.updateTodo = (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    const updatedTodo = todos.map( todo => todo.id == id ? {
        ...todo,
        title:body.title,
        isDone:body.isDone
    } : todo)
    todos = updatedTodo;
    res.send({data:todos})
}

exports.deleteTodo = (req,res) =>{
    const id = req.params.id;
    todos = todos.filter( todo => todo.id !=id);
    res.send({data:todos})
}